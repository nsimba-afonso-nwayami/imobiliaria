import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function HeaderVendedor({ sidebarOpen, setSidebarOpen, title }) {
  const { user } = useAuth();

  const actionBtnStyle =
    "relative w-10 h-10 cursor-pointer flex items-center justify-center rounded-xl bg-blue-950 hover:bg-sky-700 text-white transition-all duration-300 shadow-sm group";

  const badgeStyle =
    "absolute -top-1 -right-1 bg-white text-blue-950 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-md border-2 border-blue-950 group-hover:scale-110 transition-transform";

  return (
    <header
      className="
        bg-blue-950/95 backdrop-blur-sm text-white
        border-b border-blue-900/50
        fixed top-0 right-0 left-0 md:left-64
        h-20 flex items-center justify-between
        px-6
        z-30 transition-all duration-300
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          className="md:hidden text-2xl text-white hover:text-sky-300 transition-colors"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars-staggered"></i>
        </button>

        <div className="hidden sm:block h-8 w-px bg-blue-800/50 mx-2"></div>

        <h2 className="text-lg font-black text-white tracking-tight">
          {title}
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* MENSAGENS */}
        <Link to="/dashboard/vendedor/mensagens" className={actionBtnStyle}>
          <i className="fas fa-comment-dots text-lg"></i>
          <span className={badgeStyle}>5</span>
        </Link>

        {/* NOTIFICAÇÓES */}
        <Link to="/dashboard/vendedor/notificacoes" className={actionBtnStyle}>
          <i className="fas fa-bell text-lg"></i>
          <span className={badgeStyle}>2</span>
        </Link>

        {/* DIVIDER */}
        <div className="h-8 w-px bg-blue-800/50 mx-1 hidden sm:block"></div>

        {/* USER */}
        <div className="flex items-center gap-3 group cursor-pointer">

          <div className="text-right hidden lg:block">
            <p className="text-sm text-white font-black leading-none">
              {user?.username || "Utilizador"}
            </p>
            <p className="text-[10px] text-sky-200/60 uppercase font-black tracking-widest mt-1">
              {user?.user_type || "Vendedor"}
            </p>
          </div>

          <Link
            to="/dashboard/vendedor/configuracoes"
            className="
              w-11 h-11
              cursor-pointer
              bg-white text-blue-950
              rounded-xl flex items-center justify-center
              hover:bg-sky-100 hover:scale-105
              transition-all duration-300 shadow-lg shadow-black/10
              overflow-hidden border-2 border-transparent hover:border-sky-400
            "
          >
            <i className="fas fa-chart-pie text-lg"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
