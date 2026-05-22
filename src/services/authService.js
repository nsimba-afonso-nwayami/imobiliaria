import { api } from "./api";

// REGISTER
export const registerUser = async (data) => {
  const response = await api.post("auth/register/", data);
  return response.data;
};

// LOGIN
export const loginUser = async (data) => {
  const response = await api.post("auth/login/", data);

  // TOKENS
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  // USER
  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data;
};

// LOGOUT
export const logoutUser = async () => {
  try {
    await api.post("auth/logout/");
  } catch (error) {
    console.log(error);
  }

  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");
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
