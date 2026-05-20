import { Link, useLocation } from "react-router-dom";

export default function SidebarVendedor({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-black text-sm";

  const normalStyle =
    "text-sky-100/70 hover:text-white hover:bg-blue-800/40";

  const activeStyle =
    "bg-sky-700 text-white shadow-lg shadow-blue-950/20";

  const iconStyle = (path) =>
    isActive(path) ? "text-white" : "text-sky-400";

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
            to="/dashboard/vendedor"
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
            Painel do vendedor
          </p>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1">

          {/* DASHBOARD */}
          <Link
            to="/dashboard/vendedor"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-gauge-high ${iconStyle(
                "/dashboard/vendedor"
              )}`}
            ></i>

            Dashboard
          </Link>

          {/* MEUS IMÓVEIS */}
          <Link
            to="/dashboard/vendedor/imoveis"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/imoveis")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-house ${iconStyle(
                "/dashboard/vendedor/imoveis"
              )}`}
            ></i>

            Meus imóveis
          </Link>

          {/* CLIENTES */}
          <Link
            to="/dashboard/vendedor/clientes"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/clientes")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-users ${iconStyle(
                "/dashboard/vendedor/clientes"
              )}`}
            ></i>

            Clientes
          </Link>

          {/* VISITAS */}
          <Link
            to="/dashboard/vendedor/visitas"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/visitas")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-calendar-check ${iconStyle(
                "/dashboard/vendedor/visitas"
              )}`}
            ></i>

            Visitas agendadas
          </Link>

          {/* HISTÓRICO */}
          <Link
            to="/dashboard/vendedor/historico"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/historico")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-clock-rotate-left ${iconStyle(
                "/dashboard/vendedor/historico"
              )}`}
            ></i>

            Histórico
          </Link>

          {/* RELATÓRIOS */}
          <Link
            to="/dashboard/vendedor/relatorios"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/relatorios")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-chart-pie ${iconStyle(
                "/dashboard/vendedor/relatorios"
              )}`}
            ></i>

            Relatórios
          </Link>

          {/* PERFIL */}
          <Link
            to="/dashboard/vendedor/configuracoes"
            className={`${linkStyle} ${
              isActive("/dashboard/vendedor/configuracoes")
                ? activeStyle
                : normalStyle
            }`}
          >
            <i
              className={`fas fa-user-gear ${iconStyle(
                "/dashboard/vendedor/configuracoes"
              )}`}
            ></i>

            Perfil & Conta
          </Link>
        </nav>

        {/* LOGOUT */}
        <div className="pt-6 border-t border-blue-900/50">
          <button
            className="
              flex items-center gap-3
              cursor-pointer w-full px-4 py-3
              rounded-xl text-sky-200/60
              hover:text-white hover:bg-blue-800/40
              transition-all font-black text-sm group
            "
          >
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
