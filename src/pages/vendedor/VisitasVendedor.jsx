import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";

export default function VisitasVendedor() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState(null);
  const [filter, setFilter] = useState("Todas");

  // Dados focados no contexto P2P com datas próximas
  const visitas = [
    {
      id: 1,
      buyerName: "Ana Costa",
      phone: "+244 912 333 444",
      property: "Apartamento T2 no Kilamba",
      date: "23 Mai",
      time: "10:00",
      fullDate: "Sábado, 23 de Maio de 2026",
      status: "Confirmada",
      notes: "A compradora pediu para focar na vistoria da cozinha e canalização.",
      avatar: "AC"
    },
    {
      id: 2,
      buyerName: "João Manuel",
      phone: "+244 923 000 111",
      property: "Vivenda V3 em Talatona",
      date: "21 Mai",
      time: "14:30",
      fullDate: "Quinta-feira, 21 de Maio de 2026",
      status: "Pendente",
      notes: "Aguardando a sua confirmação. O comprador indicou que tem flexibilidade de horário.",
      avatar: "JM"
    },
    {
      id: 3,
      buyerName: "Carlos Pedro",
      phone: "+244 999 888 777",
      property: "Vivenda V3 em Talatona",
      date: "18 Mai",
      time: "09:00",
      fullDate: "Segunda-feira, 18 de Maio de 2026",
      status: "Realizada",
      notes: "Visita concluída. O comprador informou que enviará uma proposta nos próximos dias.",
      avatar: "CP"
    }
  ];

  const handleOpenDetails = (visit) => {
    setSelectedVisit(visit);
    setOpenModal(true);
  };

  return (
    <>
      <title>Visitas Agendadas | Imobi Premium</title>

      <VendedorLayout title="Agenda de Visitas">
        <section className="space-y-8">
          
          {/* HEADER OPERACIONAL */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Organização e Horários</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Visitas Agendadas</h2>
            </div>
          </div>

          {/* BARRA DE PESQUISA E FILTROS */}
          <div className="flex flex-col lg:flex-row gap-4 bg-slate-50 p-4 rounded-4xl border border-slate-300 shadow-sm">
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
              <input 
                type="text" 
                placeholder="BUSCAR NOME DO VISITANTE OU IMÓVEL..." 
                className="w-full h-14 bg-slate-50 rounded-xl pl-12 pr-6 text-[10px] font-black uppercase tracking-widest outline-none border border-slate-300 focus:border-sky-700 transition-all placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Todas", "Hoje", "Confirmadas", "Pendentes", "Realizadas"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`h-14 px-6 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                    filter === item 
                    ? "bg-blue-950 text-slate-50 shadow-md" 
                    : "bg-slate-50 text-slate-500 border border-slate-300 hover:text-blue-950 hover:border-blue-950"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* LISTA DE VISITAS */}
          <div className="grid grid-cols-1 gap-4">
            {visitas.map((visit) => (
              <div key={visit.id} className="bg-slate-50 border border-slate-300 rounded-4xl p-4 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 group">
                
                {/* Bloco de Data (Estilo Calendário) */}
                <div className="w-full md:w-24 h-24 bg-blue-950 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-blue-900 shadow-inner group-hover:bg-sky-700 transition-colors">
                  <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest mb-1">{visit.date.split(' ')[1]}</span>
                  <span className="text-slate-50 text-3xl font-black italic leading-none">{visit.date.split(' ')[0]}</span>
                  <span className="text-sky-400 text-[10px] font-black tracking-widest mt-1"><i className="far fa-clock mr-1"></i>{visit.time}</span>
                </div>

                {/* Informações da Visita */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black px-3 py-1 rounded-md uppercase tracking-widest ${
                        visit.status === 'Confirmada' ? 'bg-sky-700 text-slate-50' : 
                        visit.status === 'Pendente' ? 'bg-amber-500 text-slate-900' : 
                        'bg-slate-300 text-blue-950'
                    }`}>
                      {visit.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter">Comprador: {visit.buyerName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <i className="fas fa-house text-sky-700 text-[10px]"></i>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{visit.property}</p>
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex items-center gap-2 w-full md:w-auto pt-4 md:pt-0 border-t border-slate-300 md:border-none mt-2 md:mt-0">
                  <a 
                    href={`https://wa.me/${visit.phone.replace(/\s+/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 md:flex-none h-14 w-14 border border-slate-300 text-slate-500 rounded-2xl flex items-center justify-center hover:bg-slate-300 hover:text-blue-950 transition-all cursor-pointer"
                    title="Enviar Mensagem"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                  <button 
                    onClick={() => handleOpenDetails(visit)}
                    className="flex-1 md:flex-none h-14 px-8 bg-blue-950 text-slate-50 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all cursor-pointer shadow-md"
                  >
                    Gerir Visita
                  </button>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* MODAL DE GESTÃO DA VISITA */}
        <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Detalhes do Agendamento"
            icon="fas fa-calendar-check"
        >
            {selectedVisit && (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    
                    {/* Cabeçalho do Modal */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-300 flex items-center justify-between">
                        <div>
                            <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1">Data e Hora</p>
                            <p className="font-black text-blue-950 text-sm uppercase tracking-tighter leading-tight">{selectedVisit.fullDate}</p>
                            <p className="font-black text-sky-700 text-lg italic mt-1">{selectedVisit.time}</p>
                        </div>
                        <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center border-2 border-sky-700/30">
                            <i className="far fa-calendar-alt text-2xl text-slate-50"></i>
                        </div>
                    </div>

                    {/* Dados do Visitante e Imóvel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-300">
                            <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Visitante / Comprador</p>
                            <p className="font-black text-blue-950 text-xs uppercase tracking-tighter">{selectedVisit.buyerName}</p>
                            <p className="text-[10px] font-bold text-slate-500 mt-1">{selectedVisit.phone}</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-300">
                            <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Propriedade a Visitar</p>
                            <p className="font-black text-blue-950 text-xs uppercase tracking-tighter">{selectedVisit.property}</p>
                        </div>
                    </div>

                    {/* Observações */}
                    <div className="p-6 bg-blue-950 rounded-3xl text-slate-50 relative overflow-hidden shadow-lg">
                        <h4 className="font-black uppercase text-[9px] tracking-[0.2em] mb-3 text-sky-400">Observações da Visita</h4>
                        <p className="text-slate-300 leading-relaxed italic text-sm relative z-10 font-medium">
                            "{selectedVisit.notes}"
                        </p>
                        <i className="fas fa-clipboard-list absolute -right-4 -bottom-4 text-6xl text-slate-50/5 -rotate-12"></i>
                    </div>

                    {/* Botões de Ação Final */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {selectedVisit.status === 'Pendente' && (
                            <button className="h-14 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer col-span-full md:col-span-1">
                                Confirmar Visita
                            </button>
                        )}
                        {selectedVisit.status === 'Confirmada' && (
                            <button className="h-14 bg-blue-950 text-slate-50 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-sky-700 transition-all shadow-lg shadow-blue-950/20 cursor-pointer col-span-full md:col-span-1">
                                Marcar Realizada
                            </button>
                        )}
                        <button className="h-14 border border-slate-300 text-blue-950 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-slate-300 transition-all cursor-pointer">
                            Reagendar
                        </button>
                        <button className="h-14 border border-red-200 text-red-600 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-red-50 hover:border-red-300 transition-all cursor-pointer">
                            Cancelar Visita
                        </button>
                    </div>
                </div>
            )}
        </Modal>

      </VendedorLayout>
    </>
  );
}
