export default function TimelineEmpresa() {
  const timeline = [
    {
      year: "2014",
      title: "Fundação da ImobiPremium",
      text: "Início das operações em Luanda com foco em consultoria imobiliária e intermediação de ativos residenciais.",
    },
    {
      year: "2017",
      title: "Expansão para segmento premium",
      text: "Entrada no mercado de imóveis de alto padrão e terrenos estratégicos para investidores.",
    },
    {
      year: "2020",
      title: "Consolidação no mercado angolano",
      text: "Aumento significativo da carteira de clientes e expansão da rede de parceiros jurídicos e financeiros.",
    },
    {
      year: "2023",
      title: "Digitalização e escala",
      text: "Implementação de processos digitais e melhoria da experiência do cliente com foco em eficiência e transparência.",
    },
    {
      year: "2026",
      title: "Referência em investimento imobiliário",
      text: "Posicionamento como uma das principais consultoras de ativos imobiliários premium em Angola.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      
      {/* Background sutil compartilhado com as outras seções */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[40px_40px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header Centralizado - Exatamente como na seção Missão */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            Linha do <span className="text-sky-700 italic">Tempo</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Evolução da ImobiPremium ao longo dos anos no mercado imobiliário angolano.
          </p>
        </div>

        {/* Timeline Clean */}
        <div className="relative border-l-2 border-neutral-100 ml-4 md:ml-0 md:mx-auto space-y-12">
          
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-12 group">
              
              {/* Marcador Minimalista */}
              <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-white border-2 border-sky-700 group-hover:bg-sky-700 transition-colors duration-500 z-10"></div>

              {/* Card de Conteúdo Alinhado ao Padrão Industrial */}
              <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(2,6,23,0.05)] transition-all duration-500">
                
                <span className="text-sky-700 font-black text-xs tracking-[0.2em] block mb-2">
                  {item.year}
                </span>

                <h3 className="text-blue-950 text-xl font-black mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-neutral-500 leading-relaxed text-sm font-medium">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
