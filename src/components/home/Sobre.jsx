import { Link } from "react-router-dom";

export default function Sobre() {
  const stats = [
    { icon: "fa-building", value: "+10 Anos", label: "de experiência no mercado" },
    { icon: "fa-users", value: "+1000", label: "clientes atendidos" },
    { icon: "fa-scale-balanced", value: "100%", label: "segurança jurídica" },
    { icon: "fa-chart-line", value: "Alto ROI", label: "valorização patrimonial" },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Elementos Arquitetônicos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Lado Esquerdo: Seu Conteúdo Original */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sky-700 font-bold uppercase tracking-[0.4em] text-[10px]">
                Sobre a ImobiPremium
              </p>
            </div>

            <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-10">
              Mais de uma década conectando pessoas aos melhores investimentos imobiliários
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed border-l-2 border-neutral-100 pl-8">
                Atuamos no mercado imobiliário premium com foco em exclusividade,
                segurança jurídica e valorização patrimonial. Cada imóvel é
                selecionado com critérios rigorosos para oferecer oportunidades
                sólidas e estratégicas.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed pl-8">
                Nossa missão é transformar património em confiança, entregando
                consultoria personalizada e soluções imobiliárias de alto padrão
                para investidores exigentes.
              </p>
            </div>

            <Link
              to="/sobre"
              className="group relative inline-flex items-center gap-6 bg-blue-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:bg-sky-700 shadow-2xl shadow-blue-950/20 overflow-hidden"
            >
              <span className="relative z-10">Conhecer Mais</span>
              <i className="fa-solid fa-arrow-right-long relative z-10 transition-transform group-hover:translate-x-2"></i>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
            </Link>
          </div>

          {/* Lado Direito: Seus Stats com Design Assométrico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 lg:pt-0">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className={`group p-10 rounded-3xl border border-neutral-100 transition-all duration-700 hover:-translate-y-2
                  ${idx === 1 || idx === 3 ? 'md:mt-12 bg-neutral-50' : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)]'}
                  hover:shadow-[0_40px_80px_rgba(2,6,23,0.08)] hover:border-sky-700/30`}
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-700/5 flex items-center justify-center text-sky-700 text-2xl mb-8 group-hover:bg-sky-700 group-hover:text-white transition-all duration-500">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-blue-950 text-4xl font-black tracking-tighter">
                    {stat.value}
                  </h3>
                  <p className="text-sky-700 font-bold uppercase tracking-widest text-[10px]">
                    {stat.label}
                  </p>
                </div>

                <div className="mt-8 h-1 w-0 bg-sky-700 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}