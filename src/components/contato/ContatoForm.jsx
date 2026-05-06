import Contato2 from "../../assets/img/contato2.jpg";

export default function ContatoForm() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      
      {/* Background Decorativo: Malha Industrial */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[36px_36px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Lado Esquerdo - Visual & Info de Suporte */}
          <div className="lg:sticky lg:top-32">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(2,6,23,0.1)] group">
              <img
                src={Contato2}
                alt="Consultoria imobiliária ImobiPremium"
                className="w-full h-125 lg:h-150 object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Overlay Premium Dinâmico */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/20 to-transparent"></div>

              {/* Card Flutuante de Confiança */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <i className="fa-solid fa-headset text-sm"></i>
                  </div>
                  <p className="text-white font-black uppercase tracking-[0.35em] text-[10px]">
                    Atendimento Premium
                  </p>
                </div>

                <h3 className="text-white text-2xl font-black leading-tight mb-4 italic">
                  Consultoria especializada para decisões seguras.
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Nossa equipa acompanha cada etapa com transparência, 
                  análise estratégica e foco total no seu patrimônio em Angola.
                </p>
              </div>
            </div>

            {/* Atalhos Rápidos pós-imagem */}
            <div className="mt-12 grid grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                  <span className="text-sky-700 font-black text-[10px] uppercase tracking-widest">E-mail Direto</span>
                  <p className="text-blue-950 font-bold text-sm">geral@imobipremium.ao</p>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-sky-700 font-black text-[10px] uppercase tracking-widest">Localização</span>
                  <p className="text-blue-950 font-bold text-sm">Luanda, Angola</p>
               </div>
            </div>
          </div>

          {/* Lado Direito - O Formulário */}
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-sky-700/5 border border-sky-700/10 px-5 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-700 animate-pulse"></span>
                <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[9px]">
                  Canal Exclusivo
                </p>
              </div>

              <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
                Vamos falar sobre o seu próximo <span className="text-sky-700 italic">investimento</span>
              </h2>

              <p className="text-neutral-500 text-lg leading-relaxed max-w-xl border-l-2 border-neutral-100 pl-6">
                Preencha os campos abaixo. Um consultor sênior analisará o seu perfil e entrará em contacto em até 24h.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group flex flex-col gap-3">
                  <label className="text-blue-950 font-black uppercase tracking-widest text-[10px] ml-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: João Manuel"
                    className="w-full h-16 px-6 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700 focus:bg-white focus:shadow-xl focus:shadow-sky-700/5 transition-all duration-300 font-medium text-blue-950"
                  />
                </div>

                <div className="group flex flex-col gap-3">
                  <label className="text-blue-950 font-black uppercase tracking-widest text-[10px] ml-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+244"
                    className="w-full h-16 px-6 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700 focus:bg-white focus:shadow-xl focus:shadow-sky-700/5 transition-all duration-300 font-medium text-blue-950"
                  />
                </div>
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-blue-950 font-black uppercase tracking-widest text-[10px] ml-2">
                  E-mail Profissional
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full h-16 px-6 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700 focus:bg-white focus:shadow-xl focus:shadow-sky-700/5 transition-all duration-300 font-medium text-blue-950"
                />
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-blue-950 font-black uppercase tracking-widest text-[10px] ml-2">
                  Tipo de interesse
                </label>
                <div className="relative">
                  <select
                    className="w-full h-16 px-6 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700 focus:bg-white transition-all appearance-none font-medium text-blue-950 cursor-pointer"
                  >
                    <option>Comprar imóvel pronto</option>
                    <option>Investimento em terrenos</option>
                    <option>Venda de patrimônio</option>
                    <option>Gestão de ativos imobiliários</option>
                    <option>Consultoria Jurídica / Documentação</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none text-xs"></i>
                </div>
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-blue-950 font-black uppercase tracking-widest text-[10px] ml-2">
                  Mensagem ou Preferências
                </label>
                <textarea
                  rows="5"
                  placeholder="Descreva brevemente o que procura (Localização, orçamento ou dúvidas)..."
                  className="w-full p-6 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700 focus:bg-white focus:shadow-xl focus:shadow-sky-700/5 transition-all resize-none font-medium text-blue-950"
                ></textarea>
              </div>

              {/* Botão de Envio com Efeito Industrial */}
              <button
                type="submit"
                className="group relative w-full h-20 cursor-pointer flex items-center justify-center gap-4 bg-blue-950 text-white rounded-[1.25rem] font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-sky-700 hover:-translate-y-1 shadow-2xl shadow-blue-950/20 overflow-hidden"
              >
                <span className="relative z-10">Solicitar Consultoria</span>
                <i className="fa-solid fa-paper-plane relative z-10 text-[10px] group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500"></i>
                
                {/* Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
              </button>

              <p className="text-center text-neutral-400 text-[10px] uppercase tracking-widest font-bold">
                ✓ Seus dados estão protegidos sob sigilo profissional
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
