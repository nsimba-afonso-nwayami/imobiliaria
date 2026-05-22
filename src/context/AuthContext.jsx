import { createContext, useContext, useEffect, useState } from "react";
import { getProfile, logoutUser } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // VERIFICAR SESSÃO
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const access = localStorage.getItem("access");

      if (!access) {
        setLoading(false);
        return;
      }

      // USER SALVO
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      // PROFILE API
      const profile = await getProfile();

      setUser(profile);

      localStorage.setItem("user", JSON.stringify(profile));

    } catch (error) {
      console.log(error);

      logout();

    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const login = (userData) => {
    setUser(userData);

    localStorage.setItem("user", JSON.stringify(userData));
  };

  // LOGOUT
  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }

    setUser(null);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// CUSTOM HOOK
export function useAuth() {
  return useContext(AuthContext);
}
