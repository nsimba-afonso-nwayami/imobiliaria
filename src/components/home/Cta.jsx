import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="relative py-40 px-6 bg-blue-950 overflow-hidden">
      
      {/* Background Decorativo: Malha Industrial e Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-cta)" /></svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-sky-700/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Title: Mantendo seu Texto Original */}
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-10">
          Pronto para investir no <span className="text-sky-500 italic">imóvel ideal</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
          Fale com um dos nossos consultores e receba uma seleção exclusiva de imóveis alinhados ao seu perfil de investimento.
        </p>

        {/* Botões com Hover de Alta Performance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contato"
            className="group relative bg-sky-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-[0_20px_60px_rgba(3,105,161,0.3)] hover:shadow-sky-700/60 hover:-translate-y-2 flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">Falar com Consultor</span>
            <i className="fa-solid fa-headset relative z-10 text-lg transition-transform group-hover:rotate-12"></i>
            
            {/* Efeito Shine */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
          </Link>

          <Link
            to="/imoveis"
            className="group border border-white/10 bg-white/5 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:bg-white hover:text-blue-950 flex items-center gap-4"
          >
            <span>Ver Imóveis</span>
            <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
          </Link>
        </div>

        {/* Micro Confiança com Ícones Reais */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-700/20 flex items-center justify-center text-sky-500">
              <i className="fa-solid fa-user-check text-[10px]"></i>
            </div>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Atendimento personalizado</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-700/20 flex items-center justify-center text-sky-500">
              <i className="fa-solid fa-hand-holding-dollar text-[10px]"></i>
            </div>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Sem custos ocultos</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-700/20 flex items-center justify-center text-sky-500">
              <i className="fa-solid fa-bolt text-[10px]"></i>
            </div>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Resposta em minutos</span>
          </div>
        </div>

      </div>
    </section>
  );
}
