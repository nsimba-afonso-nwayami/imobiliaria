import axios from "axios";

//const API_URL = "http://imobiliaria.hossidev.com/api/";
const API_URL = "/api/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TOKEN AUTOMÁTICO
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// REFRESH CONTROL
let isRefreshing = false;
let failedQueue = [];

// PROCESSAR FILA
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // TOKEN EXPIRADO
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      // JÁ ESTÁ RENOVANDO
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;

      isRefreshing = true;

      try {
        const refresh = localStorage.getItem("refresh");

        // SEM REFRESH
        if (!refresh) {
          throw new Error("Refresh token inexistente");
        }

        // PEDIR NOVO ACCESS
        const response = await axios.post(
          `${API_URL}auth/token/refresh/`,
          {
            refresh,
          }
        );

        const newAccess = response.data.access;

        // SALVAR NOVO ACCESS
        localStorage.setItem("access", newAccess);

        // ATUALIZAR HEADER GLOBAL
        api.defaults.headers.common.Authorization =
          `Bearer ${newAccess}`;

        processQueue(null, newAccess);

        // REPETIR REQUEST ORIGINAL
        originalRequest.headers.Authorization =
          `Bearer ${newAccess}`;

        return api(originalRequest);

      } catch (refreshError) {
        processQueue(refreshError, null);

        // LIMPAR SESSÃO
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        // REDIRECT LOGIN
        window.location.href = "/login";

        return Promise.reject(refreshError);

      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
