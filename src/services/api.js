import axios from "axios";
const API_URL = "https://imobiliaria.hossidev.com/api/";
//const API_URL = "/api/";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 15000, // Proteção contra travamentos: cancela a requisição após 15s se o cPanel não responder
  headers: {
    "Content-Type": "application/json",
  },
});

// TOKEN AUTOMÁTICO
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  console.log("TOKEN ENVIADO:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("HEADERS FINAL:", config.headers);

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

    // TRATAMENTO DE QUEDA DE CONEXÃO DO CPANEL (packetLen < 0 ou Timeout)
    if (!error.response || error.code === 'ECONNABORTED') {
      console.error("Erro crítico de rede ou quebra de pacote no servidor cPanel.");
      return Promise.reject(error); // Destrava o estado "A processar..." imediatamente no componente
    }

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
