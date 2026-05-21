import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";

export default function InteressadosVendedor() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [filter, setFilter] = useState("Todos");

  // Dados focados no contexto Angolano P2P
  const interessados = [
    {
      id: 1,
      name: "João Manuel",
      phone: "+244 923 000 111",
      interest: "Vivenda V3 em Talatona",
      status: "Nova Proposta",
      date: "21 Mai 2026",
      proposal: "240M Kz",
      message: "Boa tarde. Tenho o valor a pronto pagamento, mas gostaria de visitar a casa este sábado antes de avançarmos para a minuta do contrato.",
      avatar: "JM"
    },
    {
      id: 2,
      name: "Ana Costa",
      phone: "+244 912 333 444",
      interest: "Apartamento T2 no Kilamba",
      status: "Visita Agendada",
      date: "23 Mai 2026",
      proposal: "A Combinar",
      message: "Gostaria de ver o estado da cozinha e se o apartamento tem infiltrações. Confirmo a minha ida no sábado às 10h.",
      avatar: "AC"
    },
    {
      id: 3,
      name: "Carlos Pedro",
      phone: "+244 999 888 777",
      interest: "Vivenda V3 em Talatona",
      status: "Em Negociação",
      date: "18 Mai 2026",
      proposal: "230M Kz",
      message: "Conforme conversamos, o banco já aprovou o meu crédito habitação. Aguardo o envio dos documentos do imóvel para o banco analisar.",
      avatar: "CP"
    }
  ];

  const handleOpenDetails = (client) => {
    setSelectedClient(client);
    setOpenModal(true);
  };

  return (
    <>
      <title>Interessados | Imobi Premium</title>

      <VendedorLayout title="Compradores Interessados">
        <section className="space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Mensagens e Propostas</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Interessados</h2>
            </div>
          </div>

          {/* BARRA DE PESQUISA E FILTROS */}
          <div className="flex flex-col lg:flex-row gap-4 bg-slate-50 p-4 rounded-4xl border border-slate-300 shadow-sm">
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
              <input 
                type="text" 
                placeholder="BUSCAR NOME DO COMPRADOR OU IMÓVEL..." 
                className="w-full h-14 bg-slate-50 rounded-xl pl-12 pr-6 text-[10px] font-black uppercase tracking-widest outline-none border border-slate-300 focus:border-sky-700 transition-all placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Todos", "Nova Proposta", "Visita Agendada", "Em Negociação"].map((item) => (
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

          {/* LISTA DE INTERESSADOS */}
          <div className="grid grid-cols-1 gap-4">
            {interessados.map((client) => (
              <div key={client.id} className="bg-slate-50 border border-slate-300 rounded-4xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 group">
                
                {/* Perfil e Imóvel */}
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-700 transition-colors">
                    <span className="text-slate-50 font-black text-xl italic">{client.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter">{client.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <i className="fas fa-house text-sky-700 text-[9px]"></i>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">{client.interest}</p>
                    </div>
                  </div>
                </div>

                {/* Status e Proposta */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1 flex-1 md:flex-none">
                  <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                      client.status === 'Nova Proposta' ? 'bg-sky-700 text-slate-50' : 
                      client.status === 'Visita Agendada' ? 'bg-blue-900 text-slate-50' : 
                      'bg-slate-300 text-blue-950'
                  }`}>
                    {client.status}
                  </span>
                  <p className="text-[10px] font-black text-blue-950 uppercase tracking-widest mt-1">
                    Valor: <span className="italic text-sky-700">{client.proposal}</span>
                  </p>
                </div>

                {/* Ações */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <a 
                    href={`https://wa.me/${client.phone.replace(/\s+/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 md:flex-none h-12 w-12 border border-slate-300 text-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-300 hover:text-blue-950 transition-all cursor-pointer"
                    title="Chamar no WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                  </a>
                  <button 
                    onClick={() => handleOpenDetails(client)}
                    className="flex-1 md:flex-none h-12 px-6 bg-blue-950 text-slate-50 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all cursor-pointer shadow-md"
                  >
                    Ver Detalhes
                  </button>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* MODAL DE DETALHES DO COMPRADOR */}
        <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Detalhes da Proposta"
            icon="fas fa-user-tag"
        >
            {selectedClient && (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    
                    {/* Cabeçalho do Modal */}
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-300">
                        <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center">
                            <span className="text-slate-50 font-black text-lg italic">{selectedClient.avatar}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-blue-950 uppercase tracking-tighter">{selectedClient.name}</h3>
                            <p className="text-[10px] font-black text-slate-500 tracking-widest">{selectedClient.phone}</p>
                        </div>
                    </div>

                    {/* Dados da Negociação */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-300">
                            <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest mb-1">Propriedade Desejada</p>
                            <p className="font-black text-blue-950 text-xs uppercase tracking-tighter leading-tight">{selectedClient.interest}</p>
                        </div>
                        <div className="bg-blue-950 p-5 rounded-2xl border border-blue-950 text-slate-50 shadow-lg">
                            <p className="text-[8px] uppercase font-black text-sky-700 tracking-widest mb-1">Proposta do Cliente</p>
                            <p className="font-black text-xl italic tracking-tighter">{selectedClient.proposal}</p>
                        </div>
                    </div>

                    {/* Mensagem / Contexto */}
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-300 relative">
                        <h4 className="font-black uppercase text-[9px] tracking-[0.2em] mb-3 text-slate-500">Mensagem do Comprador</h4>
                        <p className="text-blue-950 leading-relaxed italic text-sm relative z-10 font-medium">
                            "{selectedClient.message}"
                        </p>
                    </div>

                    {/* Botões de Ação Final */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <button className="h-14 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer">
                            Aceitar Proposta
                        </button>
                        <button className="h-14 border border-slate-300 text-blue-950 font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-slate-300 transition-all cursor-pointer">
                            Rejeitar / Contraproposta
                        </button>
                    </div>
                </div>
            )}
        </Modal>

      </VendedorLayout>
    </>
  );
}
