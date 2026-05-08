import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";

export default function OportunidadesInvestidor() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const oportunidades = [
    {
      id: 1,
      title: "Loteamento Industrial ZEE",
      type: "Terreno",
      price: "120M Kz",
      growth: "+24% est.",
      deadline: "Faltam 3 dias",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd",
      badge: "Oportunidade Única",
      description: "Lote estratégico na Zona Econômica Especial com incentivos fiscais aprovados para indústrias leves."
    },
    {
      id: 2,
      title: "Penthouse Kinaxixi Premium",
      type: "Residencial",
      price: "550M Kz",
      growth: "+15% est.",
      deadline: "Lançamento",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      badge: "Exclusive",
      description: "Apartamento de luxo com vista 360º para a Baía de Luanda. Alta demanda para executivos expatriados."
    },
    {
      id: 3,
      title: "Complexo de Armazéns Cacuaco",
      type: "Industrial",
      price: "980M Kz",
      growth: "+18% est.",
      deadline: "Em Leilão",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
      badge: "Leilão Bancário",
      description: "Unidade recuperada com valor 30% abaixo do mercado. Ideal para centros de distribuição logística."
    }
  ];

  return (
    <>
      <title>Oportunidades Exclusivas | Imobi Premium</title>

      <InvestidorLayout title="Oportunidades de Mercado">
        <section className="space-y-10">
          
          {/* HEADER E BUSCA */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Marketplace de Ativos</p>
                <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Novas Oportunidades</h2>
              </div>
            </div>

            {/* BARRA DE PESQUISA E FILTROS RÁPIDOS */}
            <div className="bg-white p-4 rounded-[2.5rem] border border-slate-50 shadow-sm space-y-4 lg:space-y-0 lg:flex lg:gap-4 lg:items-center">
              <div className="relative flex-1">
                <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
                <input 
                  type="text" 
                  placeholder="BUSCAR OPORTUNIDADES (EX: ARMAZÉM, TERRENO...)" 
                  className="w-full h-14 bg-slate-50 rounded-2xl pl-12 pr-6 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-sky-700/20 transition-all"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {["Todos", "Residencial", "Industrial", "Terrenos", "Leilão"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`h-14 px-6 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                      activeFilter === cat 
                      ? "bg-blue-950 text-white shadow-lg" 
                      : "bg-slate-50 text-slate-400 hover:text-blue-950"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* BANNER DE DESTAQUE */}
          <div className="relative h-64 rounded-[3rem] overflow-hidden bg-blue-950 flex items-center p-8 lg:p-16">
            <div className="relative z-10 max-w-xl space-y-4">
               <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Acesso VIP</span>
               <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter leading-none uppercase">Pre-Reserva Aberta</h2>
               <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-relaxed">Unidades com valor de custo para investidores qualificados.</p>
            </div>
            <i className="fas fa-gem absolute right-12 text-[12rem] text-white/5 -rotate-12 hidden lg:block"></i>
          </div>

          {/* GRID DE OPORTUNIDADES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oportunidades.map((op) => (
              <div key={op.id} className="group bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-700 flex flex-col">
                {/* Imagem com Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img src={op.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                    <p className="text-[8px] font-black text-blue-950 uppercase tracking-widest leading-none mb-1">Crescimento</p>
                    <p className="text-sm font-black text-sky-700 italic">{op.growth}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-950 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest">
                    {op.deadline}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[9px] font-black text-sky-700 uppercase tracking-widest">{op.type}</span>
                       <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{op.badge}</span>
                    </div>
                    <h3 className="text-xl font-black text-blue-950 tracking-tighter uppercase italic mb-4">{op.title}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6 font-medium italic">"{op.description}"</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                       <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Valor do Ativo</p>
                          <p className="text-2xl font-black text-blue-950 italic tracking-tighter">{op.price}</p>
                       </div>
                       <i className="fas fa-chart-line text-sky-700 text-xl"></i>
                    </div>

                    <button 
                      onClick={() => { setSelected(op); setOpenModal(true); }}
                      className="w-full h-14 bg-slate-50 text-blue-950 hover:bg-blue-950 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer shadow-sm"
                    >
                      Solicitar Dossier Completo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL: DOSSIER DE OPORTUNIDADE */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Dossier de Investimento"
          icon="fas fa-file-invoice-dollar"
        >
          {selected && (
            <div className="space-y-6">
               <div className="p-6 bg-slate-50 rounded-3xl space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Projeção de Valorização</span>
                    <span className="text-sm font-black text-sky-700 italic">{selected.growth}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Preço m² sugerido</span>
                    <span className="text-sm font-black text-blue-950 italic">Sob Consulta</span>
                  </div>
               </div>

               <div className="space-y-2">
                 <p className="text-[10px] font-black text-blue-950 uppercase tracking-widest ml-1">Por que investir neste ativo?</p>
                 <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <ul className="text-[10px] font-bold text-emerald-700 space-y-2 uppercase tracking-tighter">
                        <li>• Localização em zona de expansão governamental</li>
                        <li>• Documentação (DDU e IPU) 100% regularizada</li>
                        <li>• Retorno sobre investimento acima da média regional</li>
                    </ul>
                 </div>
               </div>

               <div className="grid grid-cols-1 gap-3 pt-4">
                  <button className="h-16 bg-sky-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all shadow-xl shadow-sky-700/20 cursor-pointer">
                    Falar com Consultor Senior
                  </button>
                  <button className="h-16 border-2 border-slate-100 text-blue-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-blue-950 transition-all cursor-pointer">
                    Agendar Visita Técnica
                  </button>
               </div>
            </div>
          )}
        </Modal>
      </InvestidorLayout>
    </>
  );
}
