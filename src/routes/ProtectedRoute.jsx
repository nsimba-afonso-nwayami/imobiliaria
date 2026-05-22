import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  allowedRoles = [],
}) {
  const { user, loading, isAuthenticated } = useAuth();

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="text-blue-950 font-black uppercase tracking-widest text-sm">
          Carregando...
        </div>
      </div>
    );
  }

  // NÃO LOGADO
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ROLE
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user?.user_type)
  ) {
    //return <Navigate to="/" replace />;
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}
