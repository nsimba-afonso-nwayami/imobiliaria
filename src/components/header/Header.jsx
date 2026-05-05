import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Imóveis", path: "/imoveis" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="w-full shadow-2xl sticky top-0 z-50 transition-all duration-500">
      {/* Top Header */}
      <div className="bg-blue-950 text-slate-50 px-6 py-4 border-b border-blue-900/40 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 text-2xl font-black tracking-tighter uppercase shrink-0 transition-transform active:scale-95">
            <span className="text-slate-50">Imobi</span>
            <span className="text-sky-700 group-hover:text-sky-500 transition-colors">Premium</span>
          </Link>

          {/* Search - Desktop (Fundo Branco Slate-50) */}
          <div className="hidden md:flex flex-1 max-w-lg relative group">
            <input
              type="search"
              placeholder="Onde você deseja morar?"
              className="w-full bg-slate-50 text-blue-950 placeholder:text-slate-500 rounded-lg px-6 py-2.5 pr-12 outline-none border-2 border-transparent focus:border-sky-700 focus:ring-4 focus:ring-sky-700/20 transition-all duration-300 text-sm font-medium shadow-inner"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-700 transition-colors">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Actions & Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/carrinho" className="relative p-2 flex items-center justify-center text-slate-300 hover:text-sky-700 transition-all duration-300 group">
                <i className="fa-solid fa-cart-shopping text-xl transition-transform group-hover:scale-110"></i>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-sky-700 text-slate-50 text-[10px] font-bold min-w-5 h-5 flex items-center justify-center rounded-full border-2 border-blue-950 shadow-lg">
                      {cartCount}
                    </span>
                )}
            </Link>

            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-slate-50 px-6 py-2.5 rounded-lg font-bold text-xs transition-all duration-300 uppercase tracking-widest shadow-lg"
            >
              <i className="fa-solid fa-circle-user text-sm"></i>
              Acessar
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl md:hidden text-slate-50 p-2 hover:bg-blue-900/50 rounded-lg transition-all"
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'} transition-transform duration-300 ${menuOpen ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - Padding & Opacity */}
      <nav className={`
        bg-blue-900 w-full transition-all duration-500 ease-in-out border-b border-sky-900/30
        ${menuOpen 
          ? "opacity-100 py-8 translate-y-0 visible" 
          : "opacity-0 py-0 -translate-y-2 invisible md:opacity-100 md:py-4 md:translate-y-0 md:visible"
        }
        absolute left-0 md:relative md:block
      `}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-16
            transition-all duration-500
            ${menuOpen ? "scale-100" : "scale-95 md:scale-100"}
          `}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`group relative transition-colors font-bold text-xs uppercase tracking-[0.25em] text-center ${isActive ? 'text-sky-500' : 'text-slate-300 hover:text-slate-50'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-sky-700 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}