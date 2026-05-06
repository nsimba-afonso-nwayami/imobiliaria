import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Imóveis", path: "/imoveis" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const services = [
    "Compra de Imóveis",
    "Venda de Imóveis",
    "Arrendamento",
    "Consultoria Imobiliária",
    "Avaliação Patrimonial",
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", path: "#" },
    { icon: "fa-instagram", path: "#" },
    { icon: "fa-linkedin-in", path: "#" },
    { icon: "fa-whatsapp", path: "#" },
  ];

  return (
    <footer className="bg-blue-950 text-slate-50 border-t pt-24 border-blue-900/40 relative overflow-hidden">
      {/* Glow Decorativo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-700/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/5">
          
          {/* Coluna 1: Brand & Bio */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter uppercase transition-transform hover:scale-105 self-start">
              <span className="text-slate-50">Imobi</span>
              <span className="text-sky-700">Premium</span>
            </Link>

            <p className="text-slate-300 leading-relaxed text-sm max-w-xs">
              Referência no mercado imobiliário de luxo em Luanda. 
              Comprometidos com a exclusividade e a segurança do seu investimento.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  className="w-10 h-10 rounded-lg bg-blue-900/40 hover:bg-sky-700 text-slate-300 hover:text-slate-50 flex items-center justify-center transition-all duration-500 hover:-translate-y-1"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-sky-700">
              Navegação
            </h3>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-slate-300 hover:text-slate-50 transition-all duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-sky-700">
              Serviços
            </h3>
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <div 
                  key={service}
                  className="text-slate-300 text-sm font-medium flex items-center gap-3 group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900 border border-sky-700 transition-transform group-hover:scale-125"></div>
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-sky-700">
              Contato
            </h3>
            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-sky-700 mt-1"></i>
                <div className="flex flex-col">
                  <span className="text-slate-50 font-bold">Endereço</span>
                  <span className="text-slate-300 italic">Luanda, Angola</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fa-solid fa-phone text-sky-700 mt-1"></i>
                <div className="flex flex-col">
                  <span className="text-slate-50 font-bold">Suporte</span>
                  <span className="text-slate-300">+244 900 000 000</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[13px] font-medium text-center">
            &copy; 2026 <span className="text-slate-300">ImobiPremium</span>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-8">
            <Link to="/privacidade" className="text-slate-500 hover:text-sky-700 text-xs font-bold tracking-widest uppercase transition-colors">
              Privacidade
            </Link>
            <Link to="/termos" className="text-slate-500 hover:text-sky-700 text-xs font-bold tracking-widest uppercase transition-colors">
              Termos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
