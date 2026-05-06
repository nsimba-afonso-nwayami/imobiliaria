export default function ContatoSection() {
  const contatos = [
    {
      icon: "fa-location-dot",
      title: "Localização",
      info: "Luanda, Angola",
      sub: "Atendimento presencial com agendamento",
    },
    {
      icon: "fa-phone-volume",
      title: "Telefone",
      info: "+244 999 000 000",
      sub: "Segunda à Sexta • 08h às 18h",
    },
    {
      icon: "fa-envelope",
      title: "E-mail",
      info: "geral@imobipremium.ao",
      sub: "Resposta em até 24 horas",
    },
    {
      icon: "fa-clock",
      title: "Horário",
      info: "08:00 — 18:00",
      sub: "Consultoria premium agendada",
    },
  ];

  return (
    <section className="py-32 px-6 bg-neutral-50 relative overflow-hidden">

      {/* Background Grid - Ajustado para o padrão industrial */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 bg-sky-700/5 border border-sky-700/10 px-5 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-700 animate-pulse"></span>
            <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[9px]">
              Informações de Contacto
            </p>
          </div>

          <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
            Estamos mais perto do seu próximo <span className="text-sky-700 italic">investimento</span>
          </h2>

          <p className="text-neutral-500 text-lg leading-relaxed">
            Escolha o melhor canal para falar com a nossa equipa e receba atendimento especializado com total discrição e profissionalismo.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Cards de Contacto - Grid 2x2 no mobile/tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {contatos.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-neutral-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(2,6,23,0.1)] hover:border-sky-700/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-700/5 border border-sky-700/10 flex items-center justify-center text-sky-700 text-xl mb-6 group-hover:bg-sky-700 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <h3 className="text-blue-950 font-black text-lg mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-blue-950 font-bold text-base mb-2">
                    {item.info}
                  </p>

                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                {/* Linha de progresso decorativa */}
                <div className="mt-8 h-1 w-0 bg-sky-700 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Mapa Integrado */}
          <div className="relative h-full min-h-125">
            <div className="h-full rounded-[2.5rem] overflow-hidden border border-neutral-100 shadow-[0_30px_80px_rgba(2,6,23,0.08)] bg-white flex flex-col">

              {/* Top Label do Mapa */}
              <div className="p-8 border-b border-neutral-100 bg-white">
                <p className="text-sky-700 font-black uppercase tracking-[0.35em] text-[10px] mb-3">
                  Escritório Sede
                </p>

                <h3 className="text-blue-950 text-2xl font-black tracking-tight leading-tight">
                  Luanda, Business Center
                </h3>
              </div>

              {/* Google Maps Embed com Filtro suave */}
              <div className="flex-1 w-full grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                <iframe
                  title="Mapa ImobiPremium"
                  src="https://www.google.com/maps?q=Luanda,Angola&output=embed"
                  className="w-full h-full border-0 min-h-100"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}