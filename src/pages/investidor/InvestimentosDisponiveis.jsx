import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";

export default function InvestimentosDisponiveis() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAtivo, setSelectedAtivo] = useState(null);

  const oportunidades = [
    {
      id: 1,
      title: "Centro Logístico Talatona",
      location: "Talatona, Luanda",
      price: "850M Kz",
      roi: "15.5% p.a.",
      type: "Industrial",
      tag: "Alta Liquidez",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      description: "Galpão industrial com 2.500m², pé direito de 12m e infraestrutura completa para logística pesada.",
    },
    {
      id: 2,
      title: "Edifício Prime Office",
      location: "Kinaxixi, Luanda",
      price: "1.2B Kz",
      roi: "11.2% p.a.",
      type: "Comercial",
      tag: "Premium",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Andares corporativos em zona nobre, ideais para sedes bancárias ou multinacionais de petróleo.",
    },
    {
      id: 3,
      title: "Residencial Skyline",
      location: "Ilha do Cabo, Luanda",
      price: "420M Kz",
      roi: "9.8% p.a.",
      type: "Residencial",
      tag: "Lançamento",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      description: "Unidades para Short-Rental (Airbnb style) com alta demanda turística e corporativa.",
    },
  ];

  const handleInteresse = (ativo) => {
    setSelectedAtivo(ativo);
    setOpenModal(true);
  };

  return (
    <>
      <title>Oportunidades | Imobi Premium</title>

      <InvestidorLayout title="Investimentos Disponíveis">
        <section className="space-y-10">
          
          {/* BARRA DE FILTROS E BUSCA */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-4xl border border-slate-50 shadow-sm">
            <div className="flex gap-4 flex-wrap">
              {["Todos", "Comercial", "Industrial", "Residencial"].map((f) => (
                <button key={f} className="px-5 py-2 text-[10px] font-black uppercase tracking-widest border border-slate-100 rounded-xl text-slate-500 hover:border-sky-700 hover:text-sky-700 transition-all cursor-pointer">
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <input type="text" placeholder="BUSCAR ATIVO..." className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-sky-700 outline-none" />
              <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"></i>
            </div>
          </div>

          {/* GRID DE OPORTUNIDADES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {oportunidades.map((item) => (
              <div key={item.id} className="group bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700">
                
                {/* Imagem com Badge de ROI */}
                <div className="md:w-64 h-64 md:h-auto overflow-hidden relative shrink-0">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                  <div className="absolute top-4 left-4 bg-sky-700 text-white px-4 py-2 rounded-xl">
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-70">Projeção ROI</p>
                    <p className="text-sm font-black italic">{item.roi}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-black text-sky-700 uppercase tracking-[0.2em]">{item.tag}</span>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-2xl font-black text-blue-950 tracking-tighter mb-1 uppercase">{item.title}</h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <i className="fa-solid fa-location-dot text-[10px]"></i>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 italic mb-6">
                      "{item.description}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Valor de Aporte</p>
                      <p className="text-xl font-black text-blue-950 italic">{item.price}</p>
                    </div>
                    <button 
                      onClick={() => handleInteresse(item)}
                      className="bg-blue-950 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all cursor-pointer shadow-lg shadow-blue-950/20 active:scale-95"
                    >
                      Analisar Ativo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL DE ANÁLISE DE INVESTIMENTO */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Análise Prospectiva"
          icon="fas fa-microscope"
        >
          {selectedAtivo && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="relative h-48 rounded-3xl overflow-hidden">
                  <img src={selectedAtivo.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 to-transparent flex items-end p-6">
                    <h4 className="text-white font-black text-xl uppercase italic tracking-tighter">{selectedAtivo.title}</h4>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Payback Estimado</p>
                    <p className="text-lg font-black text-blue-950 italic">7.5 Anos</p>
                  </div>
                  <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
                    <p className="text-[9px] font-black text-sky-700 uppercase tracking-widest mb-1">Risco do Ativo</p>
                    <p className="text-lg font-black text-sky-700 italic uppercase">Baixo / AA</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <p className="text-slate-500 text-sm leading-relaxed border-l-4 border-slate-100 pl-4 italic">
                    {selectedAtivo.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <h5 className="text-[10px] font-black text-blue-950 uppercase mb-3 flex items-center gap-2">
                        <i className="fas fa-check-circle text-sky-700"></i> Pontos de Valorização
                    </h5>
                    <ul className="text-[10px] font-bold text-slate-500 space-y-2 uppercase tracking-tighter">
                        <li>• Próximo ao novo centro administrativo</li>
                        <li>• Isenção fiscal para projetos industriais (ZEE)</li>
                        <li>• Contrato de Master-Lease disponível</li>
                    </ul>
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-3 pt-4">
                  <button className="h-16 bg-sky-700 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-xl shadow-sky-700/20 cursor-pointer">
                    Manifestar Interesse de Compra
                  </button>
                  <button className="h-16 border-2 border-slate-100 text-blue-950 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:border-sky-700 transition-all cursor-pointer">
                    Agendar Reunião com Consultor
                  </button>
               </div>
            </div>
          )}
        </Modal>
      </InvestidorLayout>
    </>
  );
}
