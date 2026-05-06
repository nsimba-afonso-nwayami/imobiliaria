import Sobre2 from "../../assets/img/sobre2.jpg";

export default function Institucional() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Lado Esquerdo: Imagem Pura e Robusta */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={Sobre2}
                alt="Institucional ImobiPremium"
                className="w-full h-125 md:h-162.5 object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Gradiente sutil para acabamento */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Lado Direito: Conteúdo e Valores */}
          <div className="flex flex-col">
            
            {/* Título */}
            <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-12">
              Mais do que imobiliária, somos uma <br />
              <span className="text-sky-700 italic">consultora de ativos</span>
            </h2>

            {/* Bloco de Texto Estilo Manifesto */}
            <div className="relative space-y-8 text-neutral-600 text-lg leading-relaxed border-l-4 border-sky-700/20 pl-10 mb-16">
              <i className="fa-solid fa-quote-left absolute -left-4 top-0 text-sky-700/10 text-6xl -z-10"></i>
              
              <p className="font-medium">
                Atuamos no mercado imobiliário premium com foco em <span className="text-blue-950 font-bold text-xl underline decoration-sky-700/30 underline-offset-4">exclusividade, segurança jurídica e valorização patrimonial.</span>
              </p>

              <p className="text-neutral-500">
                Cada imóvel é selecionado com critérios rigorosos para oferecer oportunidades sólidas e estratégicas. A ImobiPremium nasceu para redefinir o padrão de investimento em Angola, unindo transparência e análise de mercado.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-microscope text-lg"></i>
                </div>
                <div>
                  <h4 className="text-blue-950 font-black uppercase tracking-widest text-xs mb-2">Curadoria de Ativos</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">Seleção rigorosa baseada em dados de valorização futura.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-gavel text-lg"></i>
                </div>
                <div>
                  <h4 className="text-blue-950 font-black uppercase tracking-widest text-xs mb-2">Segurança Jurídica</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">Conformidade total e proteção do investidor em cada contrato.</p>
                </div>
              </div>
            </div>

            {/* Assinatura Final */}
            <div className="mt-20 pt-10 border-t border-neutral-100 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-blue-950 font-black text-2xl tracking-tighter">ImobiPremium</span>
                <span className="text-sky-700 font-bold uppercase tracking-[0.3em] text-[9px]">Padrão de Excelência</span>
              </div>
              <div className="h-10 w-px bg-neutral-200"></div>
              <p className="text-neutral-400 text-[10px] uppercase tracking-widest leading-tight">
                Fundada em Luanda <br /> Referência em Investimento
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}