import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

export default function MinhasPropostas() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("TODAS");

  const [propostas] = useState([
    {
      id: "PRP-9921",
      title: "Penthouse de Luxo",
      location: "Talatona, Luanda",
      valor: "450.000.000 Kz",
      data: "05 Mai 2026",
      status: "Em Análise",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      vendedor: "Nwayami Imobiliária",
      prazo: "48h para resposta"
    },
    {
      id: "PRP-8842",
      title: "Moradia T5 Moderna",
      location: "Kilamba, Luanda",
      valor: "120.000.000 Kz",
      data: "02 Mai 2026",
      status: "Aceite",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      vendedor: "Hossidev Assets",
      prazo: "Aguardando Assinatura"
    },
    {
      id: "PRP-7710",
      title: "Terreno Industrial",
      location: "Viana, Estrada ZEE",
      valor: "85.000.000 Kz",
      data: "28 Abr 2026",
      status: "Recusada",
      image: "https://images.unsplash.com/photo-1590001158193-798d3af1c12c",
      vendedor: "Efival Engenharia",
      prazo: "Finalizado"
    }
  ]);

  const filteredPropostas = filter === "TODAS" 
    ? propostas 
    : propostas.filter(p => p.status.toUpperCase() === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aceite': return 'bg-green-600 border-green-600 text-white';
      case 'Recusada': return 'bg-red-600 border-red-600 text-white';
      default: return 'bg-blue-900 border-blue-900 text-white';
    }
  };

  return (
    <>
      <title>Minhas Propostas | Gestão de Ativos</title>

      <CompradorLayout title="Central de Negócios">
        <section className="space-y-8">
          
          {/* Header & Filtros */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                Asset Acquisition
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Propostas de Compra
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {["TODAS", "ACEITE", "EM ANÁLISE", "RECUSADA"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 h-10 rounded-xl text-[9px] font-black tracking-widest transition-all border ${
                    filter === tab 
                    ? 'bg-neutral-700 text-white border-neutral-700' 
                    : 'bg-neutral-100 text-neutral-500 border-neutral-400 hover:border-blue-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Propostas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPropostas.map((prop) => (
              <div 
                key={prop.id}
                className="bg-neutral-50 border border-neutral-400 rounded-4xl overflow-hidden group hover:border-blue-800 transition-all duration-500 shadow-sm"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-full border shadow-lg ${getStatusColor(prop.status)}`}>
                      {prop.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg border border-neutral-400">
                    <p className="text-[9px] font-black text-neutral-700">{prop.id}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-neutral-700 tracking-tight leading-tight mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">{prop.location}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-400 border-opacity-20">
                    <div>
                      <p className="text-[8px] font-black text-neutral-400 uppercase italic">Valor Ofertado</p>
                      <p className="text-sm font-black text-neutral-700">{prop.valor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black text-neutral-400 uppercase italic">Data de Envio</p>
                      <p className="text-sm font-black text-neutral-700">{prop.data}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-black text-neutral-400 uppercase">Vendedor</p>
                      <p className="text-[10px] font-bold text-neutral-600">{prop.vendedor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black text-blue-800 uppercase italic">Prazo</p>
                      <p className="text-[10px] font-bold text-neutral-700 animate-pulse">{prop.prazo}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelected(prop); setOpenModal(true); }}
                    className="w-full h-12 bg-neutral-100 text-neutral-700 border border-neutral-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all cursor-pointer"
                  >
                    Ver Detalhes da Proposta
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de Detalhes Detalhado */}
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Dossiê de Proposta"
            icon="fa-solid fa-handshake"
          >
            {selected && (
              <div className="space-y-6">
                <div className="p-5 bg-neutral-100 rounded-3xl border border-neutral-400 border-opacity-30 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-neutral-400">
                    <img src={selected.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-blue-800 uppercase italic">ID da Transação: {selected.id}</p>
                    <h4 className="text-lg font-black text-neutral-700 tracking-tighter">{selected.title}</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between p-4 border border-neutral-400 rounded-2xl">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Valor da Proposta</span>
                    <span className="text-sm font-black text-neutral-700">{selected.valor}</span>
                  </div>
                  <div className="flex justify-between p-4 border border-neutral-400 rounded-2xl">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Forma de Pagamento</span>
                    <span className="text-sm font-black text-neutral-700 italic">Transferência (Pronto Pagamento)</span>
                  </div>
                  <div className="flex justify-between p-4 border border-neutral-400 rounded-2xl">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Status do Vendedor</span>
                    <span className="text-[10px] font-black text-green-600">VERIFICADO</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="h-14 bg-neutral-700 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer">
                    Baixar PDF
                  </button>
                  <button className="h-14 bg-blue-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg cursor-pointer">
                    Chat Vendedor
                  </button>
                </div>

                {selected.status === "Aceite" && (
                  <button className="w-full h-14 bg-green-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-green-700 transition-all animate-bounce">
                    Prosseguir para Contrato
                  </button>
                )}
              </div>
            )}
          </Modal>

        </section>
      </CompradorLayout>
    </>
  );
}
