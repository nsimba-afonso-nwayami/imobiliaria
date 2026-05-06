import { Link } from "react-router-dom";
import VideoBg from "../../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex items-center pb-28 md:pb-36">
      {/* Video Background com Filtro de Nitidez */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        >
          <source src={VideoBg} type="video/mp4" />
        </video>
        {/* Overlay em Gradiente (Premium Touch) */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl">
          
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-3 bg-sky-700/10 border border-sky-700/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-700"></span>
            </span>
            <p className="text-sky-700 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Curadoria Exclusiva 2026
            </p>
          </div>

          {/* Main Title com Quebra Inteligente */}
          <h1 className="text-slate-50 text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8 animate-fade-in-up">
            Onde a <span className="text-transparent bg-clip-text bg-linear-to-b from-slate-50 to-slate-400">arquitetura</span> <br /> 
            encontra o seu <span className="text-sky-700">sucesso.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 animate-fade-in-up delay-200">
            A ImobiPremium conecta investidores aos imóveis mais extraordinários de Angola. 
            Segurança jurídica e exclusividade em cada m².
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
            <Link
              to="/imoveis"
              className="group relative bg-sky-700 overflow-hidden text-slate-50 px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-500 shadow-[0_20px_50px_rgba(3,105,161,0.3)] hover:shadow-sky-700/50 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Explorar Portfólio</span>
              <i className="fa-solid fa-arrow-right-long relative z-10 transition-transform group-hover:translate-x-2"></i>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            <Link
              to="/contato"
              className="group border border-slate-300/20 hover:border-sky-700 text-slate-50 px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-500 backdrop-blur-md hover:bg-sky-700/5 flex items-center justify-center gap-3"
            >
              Falar com Especialista
            </Link>
          </div>

          {/* Stats Revisitados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20 pt-12 border-t border-white/5 animate-fade-in delay-500">
            <div className="flex flex-col gap-1">
              <span className="text-slate-50 text-4xl font-black tabular-nums">+500</span>
              <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em]">Imóveis Selecionados</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-50 text-4xl font-black tabular-nums">100%</span>
              <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em]">Segurança Jurídica</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-50 text-4xl font-black tabular-nums">+1B</span>
              <span className="text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em]">Em Ativos Geridos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-slate-500/50 hidden md:block">
        <div className="w-px h-16 bg-linear-to-b from-sky-700 to-transparent"></div>
      </div>
    </section>
  );
}