import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function SidebarComprador({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-black text-sm";

  const normalStyle =
    "text-sky-100/70 hover:text-white hover:bg-blue-800/40";

  const activeStyle =
    "bg-sky-700 text-white shadow-lg shadow-blue-950/20";

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside
        className={`
          bg-blue-950 border-r border-blue-900/50
          w-64 fixed top-0 left-0 h-screen
          transition-transform duration-300 overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
          p-6
        `}
      >
        {/* CLOSE MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-sky-200 hover:text-white transition"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <div className="mb-10 pt-2">
          <Link
            to="/dashboard/comprador"
            className="text-xl font-black tracking-tight flex items-center gap-2"
          >
            <div className="bg-white text-blue-950 p-1.5 rounded-lg shadow-md">
              <i className="fas fa-building"></i>
            </div>

            <span className="text-white">
              Imobi<span className="text-sky-400">Premium</span>
            </span>
          </Link>

          <p className="text-[10px] text-sky-300/50 mt-4 uppercase font-black tracking-[0.2em]">
            Painel do comprador
          </p>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1">

          <Link
            to="/dashboard/comprador"
            className={`${linkStyle} ${
              isActive("/dashboard/comprador") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-gauge-high text-sky-400"></i>
            Dashboard
          </Link>

          <Link
            to="/dashboard/comprador/imoveis"
            className={`${linkStyle} ${
              isActive("/dashboard/comprador/imoveis") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-house text-sky-400"></i>
            Imóveis
          </Link>

          {/* VISITAS */}
          <Link
            to="/dashboard/comprador/visitas"
            className={`${linkStyle} ${
              isActive("/dashboard/comprador/visitas") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-calendar-check text-sky-400"></i>
            Visitas Agendadas
          </Link>

          {/* HISTÓRICO */}
          <Link
            to="/dashboard/comprador/historico"
            className={`${linkStyle} ${
              isActive("/dashboard/comprador/historico") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-clock-rotate-left text-sky-400"></i>
            Histórico
          </Link>

          {/* CONFIGURAÇÕES */}
          <Link
            to="/dashboard/comprador/configuracoes"
            className={`${linkStyle} ${
              isActive("/dashboard/comprador/configuracoes") ? activeStyle : normalStyle
            }`}
          >
            <i className="fas fa-user-gear text-sky-400"></i>
            Perfil & Conta
          </Link>

        </nav>

        {/* LOGOUT */}
        <div className="pt-6 border-t border-blue-900/50">
          <button onClick={handleLogout} className="flex items-center gap-3 cursor-pointer w-full px-4 py-3 rounded-xl text-sky-200/60 hover:text-white hover:bg-blue-800/40 transition-all font-black text-sm group">
            <i className="fas fa-right-from-bracket group-hover:translate-x-1 transition-transform"></i>
            Sair da conta
          </button>
        </div>
      </aside>

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
