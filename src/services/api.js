import axios from "axios";

const API_URL = "http://imobiliaria.hossidev.com/api/";
//const API_URL = "/api/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TOKEN AUTOMÁTICO
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
