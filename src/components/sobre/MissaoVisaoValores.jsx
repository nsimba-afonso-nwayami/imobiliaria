export default function MissaoVisaoValores() {
  const data = [
    {
      title: "Missão",
      icon: "fa-bullseye",
      roman: "I",
      text: "Conectar investidores aos melhores ativos imobiliários em Angola, com segurança jurídica, transparência e foco em valorização patrimonial.",
    },
    {
      title: "Visão",
      icon: "fa-eye",
      roman: "II",
      text: "Ser a referência no mercado imobiliário premium em Angola, redefinindo o padrão de investimento e consultoria imobiliária.",
    },
    {
      title: "Valores",
      icon: "fa-gem",
      roman: "III",
      text: "Integridade, exclusividade, rigor na análise de ativos, compromisso com o cliente e excelência em cada negociação.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-neutral-50 relative overflow-hidden">
      
      {/* Background Subtle: Grid Industrial */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            Nossos <span className="text-sky-700 italic">Pilares</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Os princípios fundamentais que orientam cada análise e negociação da ImobiPremium no mercado angolano.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-neutral-100 rounded-[2.5rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_90px_rgba(2,6,23,0.1)] transition-all duration-700 overflow-hidden flex flex-col"
            >
              {/* Numeração Romana Decorativa */}
              <span className="absolute top-8 right-12 text-neutral-100 text-6xl font-black italic select-none transition-colors group-hover:text-sky-700/5 duration-700">
                {item.roman}
              </span>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-sky-700 text-2xl mb-10 group-hover:bg-sky-700 group-hover:text-white group-hover:border-sky-700 transition-all duration-500 group-hover:rotate-6">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>

              {/* Content */}
              <div className="relative z-10 grow">
                <h3 className="text-blue-950 text-2xl font-black tracking-tight mb-5">
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-base font-medium">
                  {item.text}
                </p>
              </div>

              {/* Detalhe de Rodapé do Card */}
              <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sky-700 font-black text-[9px] uppercase tracking-widest">Compromisso Imobi</span>
              </div>

              {/* Borda de Progresso Inferior */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-sky-700 group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
