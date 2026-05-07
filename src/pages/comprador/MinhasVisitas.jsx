import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

export default function MinhasVisitas() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [openChat, setOpenChat] = useState(false);

  const [visitas] = useState([
    {
      id: 1,
      title: "Penthouse de Luxo",
      location: "Talatona",
      date: "15 Mai 2026",
      time: "10:30",
      status: "Confirmada",
      consultor: "Eng. Ricardo Santos",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      type: "Técnica"
    },
    {
      id: 2,
      title: "Moradia T5 Moderna",
      location: "Kilamba",
      date: "12 Mai 2026",
      time: "14:00",
      status: "Pendente",
      consultor: "Dra. Maria Bento",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      type: "Revisita"
    }
  ]);

  const filteredVisitas = visitas.filter(visita => 
    visita.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    visita.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <title>Minhas Visitas | Imobi Premium</title>

      <CompradorLayout title="Gestão de Agenda">
        <section className="space-y-8">
          
          {/* Cabeçalho de Performance */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                Cronograma de Ativos
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Visitas Programadas
              </h2>
            </div>

            <div className="relative flex-1 max-w-md w-full">
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-xs"></i>
              <input 
                type="text" 
                placeholder="BUSCAR IMÓVEL OU LOCALIZAÇÃO..."
                className="w-full h-12 pl-10 pr-4 bg-neutral-100 border border-neutral-400 rounded-xl text-[10px] font-black tracking-widest outline-none focus:border-blue-800 transition-all uppercase"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <div className="px-4 py-2 bg-neutral-100 rounded-xl border border-neutral-400">
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                  {filteredVisitas.length} Ativos Filtrados
                </span>
              </div>
            </div>
          </div>

          {/* Listagem */}
          <div className="space-y-4">
            {filteredVisitas.map((visita) => (
              <div 
                key={visita.id}
                className="group bg-neutral-50 rounded-4xl border border-neutral-400 p-2 flex flex-col md:flex-row items-center gap-6 hover:border-blue-800 transition-all duration-500 shadow-sm"
              >
                <div className="relative w-full md:w-48 h-32 rounded-3xl overflow-hidden shrink-0 border border-neutral-400 border-opacity-30">
                  <img src={visita.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <i className="fa-solid fa-eye text-neutral-50 text-xl"></i>
                  </div>
                </div>

                <div className="flex-1 space-y-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded border ${
                      visita.status === 'Confirmada' ? 'bg-blue-900 text-neutral-50 border-blue-900' : 'bg-neutral-100 text-neutral-500 border-neutral-400'
                    }`}>
                      {visita.status}
                    </span>
                    <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest italic">
                      Visita {visita.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-neutral-700 tracking-tight">{visita.title}</h3>
                  <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">{visita.location}</p>
                </div>

                <div className="px-8 border-x border-neutral-400 border-opacity-20 hidden lg:block text-center">
                  <div className="flex items-center gap-2 text-neutral-700 mb-1">
                    <i className="fa-solid fa-calendar-day text-blue-800 text-xs"></i>
                    <p className="text-sm font-black italic">{visita.date}</p>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <i className="fa-solid fa-clock text-xs"></i>
                    <p className="text-[10px] font-bold uppercase">{visita.time}h</p>
                  </div>
                </div>

                <div className="px-8 hidden xl:block">
                  <p className="text-[8px] font-black text-neutral-400 uppercase mb-1">Especialista</p>
                  <p className="text-[11px] font-bold text-neutral-700">{visita.consultor}</p>
                </div>

                <div className="p-4 flex gap-2 w-full md:w-auto">
                  <button 
                    onClick={() => { setSelected(visita); setOpenModal(true); }}
                    className="flex-1 md:w-12 h-12 bg-neutral-100 text-neutral-700 rounded-xl flex items-center justify-center border border-neutral-400 hover:bg-blue-900 hover:text-neutral-50 transition-all cursor-pointer"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                  <button 
                    onClick={() => { setSelected(visita); setOpenChat(true); }}
                    className="flex-1 md:px-6 h-12 bg-blue-900 text-neutral-50 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-md cursor-pointer"
                  >
                    Chat Consultor
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Detalhes */}
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Protocolo de Visita"
            icon="fa-solid fa-file-invoice"
          >
            {selected && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center gap-4 p-4 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-neutral-400">
                    <img src={selected.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h4 className="font-black text-neutral-700 text-lg tracking-tighter">{selected.title}</h4>
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">{selected.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-neutral-400 rounded-2xl">
                    <p className="text-[9px] font-black text-neutral-400 uppercase mb-1 italic">Data Confirmada</p>
                    <p className="text-sm font-black text-neutral-700">{selected.date}</p>
                  </div>
                  <div className="p-4 border border-neutral-400 rounded-2xl">
                    <p className="text-[9px] font-black text-neutral-400 uppercase mb-1 italic">Horário Marcado</p>
                    <p className="text-sm font-black text-neutral-700">{selected.time} Horas</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full h-14 bg-neutral-100 text-neutral-700 border border-neutral-400 font-black uppercase tracking-widest text-[9px] rounded-xl hover:bg-neutral-200 transition-all cursor-pointer">
                    Remarcar Visita
                  </button>
                  <button className="w-full h-14 bg-white text-red-600 border border-red-100 font-black uppercase tracking-widest text-[9px] rounded-xl hover:bg-red-50 transition-all cursor-pointer">
                    Cancelar Agendamento
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-tighter leading-relaxed">
                    O não comparecimento sem aviso prévio de 2h pode impactar seu score de investidor na plataforma.
                  </p>
                </div>
              </div>
            )}
          </Modal>

          {/* MODAL DE CHAT - FONTES ATUALIZADAS */}
          <Modal
            isOpen={openChat}
            onClose={() => setOpenChat(false)}
            title="Chat de Suporte Técnico"
            icon="fa-solid fa-comments"
          >
            {selected && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-neutral-400 border-opacity-20 pb-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-neutral-50 text-xs font-black">
                    CP
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-neutral-700 uppercase">{selected.consultor}</h4>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Disponível agora</p>
                  </div>
                </div>
                
                <div className="h-64 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30 p-5 overflow-y-auto">
                   <div className="bg-neutral-50 border border-neutral-400 border-opacity-20 p-4 rounded-xl rounded-tl-none max-w-[90%] mb-4 shadow-sm">
                      <p className="text-xs font-bold text-neutral-700 leading-relaxed">
                        Olá! Sou o especialista responsável pelo ativo <span className="text-blue-800 italic">{selected.title}</span>. Como posso ajudar com sua visita?
                      </p>
                   </div>
                </div>

                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="ESCREVA SUA MENSAGEM..."
                    className="flex-1 h-14 bg-neutral-100 border border-neutral-400 rounded-xl px-5 text-[11px] font-black tracking-wider outline-none focus:border-blue-800 uppercase transition-all"
                  />
                  <button className="w-14 h-14 cursor-pointer bg-blue-900 text-neutral-50 rounded-xl flex items-center justify-center hover:bg-blue-800 transition-all shadow-lg">
                    <i className="fa-solid fa-paper-plane text-sm"></i>
                  </button>
                </div>
              </div>
            )}
          </Modal>

        </section>
      </CompradorLayout>
    </>
  );
}
