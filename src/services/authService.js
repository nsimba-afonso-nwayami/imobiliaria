import { api } from "./api";

// REGISTRO
export const registerUser = async (data) => {
  const response = await api.post("auth/register/", data);
  return response.data;
};

// LOGIN
export const loginUser = async (data) => {
  const response = await api.post("auth/login/", data);

  if (response.data?.access) {
    localStorage.setItem("token", response.data.access);
  }

  return response.data;
};

// LOGOUT
export const logoutUser = async () => {
  const response = await api.post("auth/logout/");

  localStorage.removeItem("token");

  return response.data;
};

// PROFILE
export const getProfile = async () => {
  const response = await api.get("auth/profile/");
  return response.data;
};

// ALTERAR SENHA
export const changePassword = async (data) => {
  const response = await api.post("auth/change-password/", data);
  return response.data;
};

// STATS
export const getUserStats = async () => {
  const response = await api.get("auth/stats/");
  return response.data;
};
