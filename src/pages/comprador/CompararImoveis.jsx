import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

export default function CompararImoveis() {
  const [openModal, setOpenModal] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false); // Novo estado para agendamento
  const [selected, setSelected] = useState(null);

  const [comparativos] = useState([
    {
      id: 1,
      title: "Penthouse de Luxo",
      location: "Talatona",
      price: "250M Kz",
      area: "420m²",
      rooms: 4,
      suites: 4,
      vagas: 3,
      tag: "Premium",
      status: "Disponível",
      date: "Ref: PENT-001",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Moradia T5 Moderna",
      location: "Kilamba",
      price: "180M Kz",
      area: "350m²",
      rooms: 5,
      suites: 2,
      vagas: 2,
      tag: "Oportunidade",
      status: "Em Análise",
      date: "Ref: MOR-042",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    }
  ]);

  // Função para transição entre modais
  const handleOpenSchedule = () => {
    setOpenModal(false);
    setOpenSchedule(true);
  };

  return (
    <>
      <title>Comparar Ativos | Imobi Premium</title>

      <CompradorLayout title="Análise Comparativa">
        <section className="space-y-8">
          
          {/* Cabeçalho da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                Data Science Imobiliário
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Cruzamento de Dados
              </h2>
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-full border border-neutral-400">
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                {comparativos.length} Ativos em análise
              </span>
            </div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {comparativos.map((item) => (
              <div 
                key={item.id} 
                className="bg-neutral-50 rounded-[2.5rem] border border-neutral-400 overflow-hidden group hover:border-blue-800 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Imagem com Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={item.title} 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-blue-900 text-neutral-50 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-2xl">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-neutral-700 tracking-tight leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-bold text-blue-800 uppercase tracking-[0.2em]">
                        {item.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-blue-900 italic leading-none">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-neutral-400 opacity-30"></div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-blue-800 border border-neutral-400">
                        <i className="fa-solid fa-ruler-combined text-xs"></i>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-neutral-500 uppercase">Área Total</p>
                        <p className="text-xs font-bold text-neutral-700">{item.area}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-blue-800 border border-neutral-400">
                        <i className="fa-solid fa-bed text-xs"></i>
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-neutral-500 uppercase">Dormitórios</p>
                        <p className="text-xs font-bold text-neutral-700">{item.rooms} Quartos</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button 
                      onClick={() => { setSelected(item); setOpenModal(true); }}
                      className="flex-1 h-14 bg-blue-900 text-neutral-50 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-95 cursor-pointer"
                    >
                      Detalhes Completos
                    </button>
                    <button className="w-14 h-14 bg-neutral-100 text-neutral-700 rounded-2xl flex items-center justify-center border border-neutral-400 hover:bg-neutral-400 hover:text-neutral-50 transition-all cursor-pointer">
                      <i className="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dica de Especialista */}
          <div className="p-8 bg-neutral-100 rounded-4xl border-l-8 border-l-blue-900 flex items-start gap-6 border border-neutral-400">
            <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-neutral-400">
              <i className="fa-solid fa-chart-line text-blue-900"></i>
            </div>
            <div>
              <h4 className="font-black text-neutral-700 text-sm uppercase tracking-tight mb-1 italic">Projeção de Valorização</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Esta comparação leva em conta a infraestrutura atual de Luanda. Ativos em Talatona tendem a ter maior estabilidade de aluguel, enquanto a zona do Kilamba apresenta maior potencial de ganho de capital.
              </p>
            </div>
          </div>

          {/* MODAL DE DETALHES RÁPIDOS */}
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title={selected?.title}
            icon="fa-solid fa-building-circle-check"
          >
            {selected && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <img src={selected.image} className="w-full h-80 object-cover rounded-[2.5rem] shadow-2xl" alt="" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-blue-800 uppercase tracking-widest">{selected.location}</p>
                    <h3 className="text-4xl font-black text-neutral-700 tracking-tighter mt-1 italic">{selected.price}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">{selected.date}</p>
                    <span className="text-[10px] font-black text-neutral-50 bg-blue-900 px-4 py-2 rounded-lg uppercase tracking-widest">{selected.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-neutral-400 border-opacity-20">
                  <div className="text-center">
                    <p className="text-[9px] font-black text-neutral-400 uppercase">Área</p>
                    <p className="text-sm font-black text-neutral-700">{selected.area}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-neutral-400 uppercase">Quartos</p>
                    <p className="text-sm font-black text-neutral-700">{selected.rooms}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-neutral-400 uppercase">Suítes</p>
                    <p className="text-sm font-black text-neutral-700">{selected.suites}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-neutral-400 uppercase">Vagas</p>
                    <p className="text-sm font-black text-neutral-700">{selected.vagas}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <button 
                    onClick={handleOpenSchedule}
                    className="h-16 bg-blue-900 text-neutral-50 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-blue-800 transition-all cursor-pointer shadow-lg shadow-blue-900/20"
                  >
                    Agendar Visita ao Ativo
                  </button>
                  <button className="h-16 border border-neutral-400 text-neutral-700 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-neutral-100 transition-all cursor-pointer">
                    Baixar Ficha Técnica PDF
                  </button>
                </div>
              </div>
            )}
          </Modal>

          {/* MODAL DE AGENDAMENTO */}
          <Modal
            isOpen={openSchedule}
            onClose={() => setOpenSchedule(false)}
            title="Agendar Visita Técnica"
            icon="fa-solid fa-calendar-check"
          >
            <form className="space-y-6">
              <div className="p-4 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30">
                <p className="text-[10px] font-black text-blue-800 uppercase tracking-widest mb-1">Unidade de Interesse</p>
                <p className="text-sm font-bold text-neutral-700 italic">{selected?.title} — {selected?.location}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-500 uppercase ml-2">Data Sugerida</label>
                  <input type="date" className="w-full h-14 px-5 bg-neutral-50 border border-neutral-400 rounded-2xl focus:border-blue-900 outline-none text-xs font-bold text-neutral-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-500 uppercase ml-2">Período</label>
                  <select className="w-full h-14 px-5 bg-neutral-50 border border-neutral-400 rounded-2xl focus:border-blue-900 outline-none text-xs font-bold text-neutral-700 appearance-none">
                    <option>Manhã (09h - 12h)</option>
                    <option>Tarde (14h - 17h)</option>
                    <option>Final do Dia (17h - 19h)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-neutral-500 uppercase ml-2">Notas Adicionais</label>
                <textarea 
                  rows="3" 
                  placeholder="Ex: Gostaria de verificar a pressão da água e acabamentos..."
                  className="w-full p-5 bg-neutral-50 border border-neutral-400 rounded-2xl focus:border-blue-900 outline-none text-xs font-bold text-neutral-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                onClick={() => { alert('Agendamento enviado!'); setOpenSchedule(false); }}
                className="w-full h-16 bg-blue-900 text-neutral-50 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/30 cursor-pointer"
              >
                Confirmar Solicitação de Visita
              </button>
            </form>
          </Modal>

        </section>
      </CompradorLayout>
    </>
  );
}
