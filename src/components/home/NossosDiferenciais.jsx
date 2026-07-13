import { Link } from "react-router-dom";

export default function NossosDiferenciais() {
  const diferenciais = [
    {
      icon: "fa-scale-balanced",
      title: "Segurança Jurídica",
      description:
        "Processos transparentes, documentação validada e total proteção legal em cada negociação imobiliária.",
    },
    {
      icon: "fa-user-tie",
      title: "Atendimento Personalizado",
      description:
        "Cada cliente recebe uma consultoria exclusiva, adaptada ao seu perfil e aos seus objetivos patrimoniais.",
    },
    {
      icon: "fa-key",
      title: "Imóveis Exclusivos",
      description:
        "Selecionamos propriedades estratégicas e premium com alto potencial de valorização e localização privilegiada.",
    },
    {
      icon: "fa-gem",
      title: "Consultoria Premium",
      description:
        "Análise especializada para investidores exigentes que procuram segurança, retorno e posicionamento de mercado.",
    },
    {
      icon: "fa-shield-halved",
      title: "Investimento Seguro",
      description:
        "Foco em ativos sólidos e oportunidades imobiliárias capazes de gerar crescimento patrimonial consistente.",
    },
    {
      icon: "fa-handshake",
      title: "Parcerias Estratégicas",
      description:
        "Rede de parceiros confiáveis no setor imobiliário, jurídico e financeiro para garantir operações mais seguras e rápidas.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header: Mantendo seu Texto Original */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
            Muito além da compra de imóveis
          </h2>

          <p className="text-neutral-500 text-lg leading-relaxed italic border-x border-neutral-200 px-10">
            Oferecemos uma experiência imobiliária construída sobre confiança,
            exclusividade e inteligência patrimonial.
          </p>
        </div>

        {/* Cards: Estrutura em Divs com Hover Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(2,6,23,0.1)] hover:border-sky-700/40 transition-all duration-700 flex flex-col"
            >
              {/* Icon Container com Glow Sutil */}
              <div className="relative mb-10">
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-blue-950 text-2xl group-hover:bg-sky-700 group-hover:text-white group-hover:border-sky-700 transition-all duration-500 relative z-10">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div className="absolute -inset-2 bg-sky-700/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content: Mantendo seu Texto Original */}
              <h3 className="text-blue-950 text-2xl font-black tracking-tight mb-6">
                {item.title}
              </h3>

              <p className="text-neutral-500 leading-relaxed text-base mb-10 grow">
                {item.description}
              </p>

              {/* Indicador de Seleção Industrial */}
              <div className="flex items-center gap-4">
                <div className="h-0.5 grow bg-neutral-100 group-hover:bg-sky-700/20 transition-colors">
                  <div className="h-full w-0 bg-sky-700 group-hover:w-full transition-all duration-700"></div>
                </div>
                <span className="text-[10px] font-black text-neutral-300 group-hover:text-sky-700 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Mantendo seu Link Original */}
        <div className="flex justify-center mt-24">
          <Link
            to="/contato"
            className="group relative inline-flex items-center gap-6 bg-blue-950 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:bg-sky-700 shadow-2xl shadow-blue-950/20 overflow-hidden"
          >
            <span className="relative z-10">Falar com Especialista</span>
            <i className="fa-solid fa-arrow-right-long relative z-10 transition-transform group-hover:translate-x-2"></i>
            {/* Efeito de Reflexo no Hover */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
          </Link>
        </div>
      </div>
    </section>
  );
}
