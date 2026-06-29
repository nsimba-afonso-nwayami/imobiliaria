import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProperties } from "../../services/propertyService";

import {
  createSlug,
  getPropertyImage,
  formatPrice,
  getPropertyLocation,
} from "../../utils/propertyUtils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);
  const [results, setResults] = useState([]);

  //Carrega os imóveis
  useEffect(() => {
    const carregar = async () => {
      try {
        const response = await getProperties();

        setProperties(response.results || response);
      } catch (error) {
        console.error(error);
      }
    };

    carregar();
  }, []);

  //Fazer pesquisas em tempo real
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    const texto = search.toLowerCase();

    const encontrados = properties.filter((item) => {
      return (
        item.title.toLowerCase().includes(texto) ||
        item.neighborhood?.toLowerCase().includes(texto) ||
        item.municipality?.toLowerCase().includes(texto) ||
        item.province?.toLowerCase().includes(texto)
      );
    });

    setResults(encontrados.slice(0, 6));
  }, [search, properties]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Imóveis", path: "/imoveis" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  //Função para destacar o texto pesquisado
  const highlightMatch = (text, query) => {
    if (!query) return text;

    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`(${escapedQuery})`, "gi");

    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="bg-sky-100 text-sky-700 font-black rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 text-blue-950 placeholder:text-slate-500 rounded-lg px-6 py-2.5 pr-12 outline-none border-2 border-transparent focus:border-sky-700 focus:ring-4 focus:ring-sky-700/20 transition-all duration-300 text-sm font-medium shadow-inner"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-700 transition-colors">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {search.trim() && (
              <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden z-50">

                {results.length > 0 ? (
                  results.map((item) => (
                    <Link
                      key={item.id}
                      to={`/imoveis/${createSlug(item.title)}`}
                      onClick={() => {
                        setSearch("");
                        setResults([]);
                        document.activeElement.blur();
                      }}
                      className="flex gap-4 p-4 hover:bg-slate-50 transition border-b last:border-b-0"
                    >
                      <img
                        src={getPropertyImage(item)}
                        alt={item.title}
                        className="w-20 h-16 rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h4 className="font-bold text-blue-950 line-clamp-1">
                          {highlightMatch(item.title, search)}
                        </h4>

                        <p className="text-xs text-neutral-500 mt-1">
                          {highlightMatch(getPropertyLocation(item), search)}
                        </p>

                        <p className="text-sky-700 font-black mt-2">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                      <i className="fa-solid fa-magnifying-glass text-2xl text-slate-400"></i>
                    </div>

                    <h3 className="font-black text-blue-950">
                      Nenhum resultado encontrado
                    </h3>

                    <p className="text-sm text-neutral-500 mt-2">
                      Não encontramos imóveis para "<strong>{search}</strong>".
                    </p>
                  </div>
                )}

              </div>
            )}
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