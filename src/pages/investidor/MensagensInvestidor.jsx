import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";

export default function MensagensInvestidor() {
  const [activeChatId, setActiveChatId] = useState(1);
  const [openChatModal, setOpenChatModal] = useState(false);

  const conversas = [
    { id: 1, nome: "Eng. Ricardo Santos", cargo: "Gestão de Projetos", status: "online", ultimaMsg: "O relatório de progresso da obra no Talatona já está disponível.", horario: "14:20" },
    { id: 2, nome: "Consultoria Imobi", cargo: "Asset Management", status: "offline", ultimaMsg: "Recebemos a sua proposta para o loteamento industrial de Viana.", horario: "Ontem" },
    { id: 3, nome: "Dra. Ana Paula", cargo: "Jurídico", status: "online", ultimaMsg: "A escritura da Penthouse Kinaxixi foi agendada para sexta-feira.", horario: "Segunda" },
  ];

  const activeChat = conversas.find(c => c.id === activeChatId) || conversas[0];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    if (window.innerWidth < 768) {
      setOpenChatModal(true);
    }
  };

  return (
    <>
      <title>Mensagens & Negociações | Imobi Premium</title>

      <InvestidorLayout title="Central de Comunicação">
        <section className="w-full space-y-8 h-[calc(100vh-180px)] min-h-150 flex gap-4">
          
          {/* LISTA DE CONVERSAS (Sidebar Esquerda) */}
          <div className="w-full md:w-80 lg:w-96 flex flex-col bg-neutral-50 border border-neutral-400 rounded-4xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-neutral-400 border-opacity-30">
              <h3 className="text-xs font-black text-neutral-700 uppercase tracking-[0.2em] italic">Negociações Ativas</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {conversas.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => handleSelectChat(chat.id)}
                  className={`w-full p-4 rounded-3xl flex gap-4 items-center transition-all cursor-pointer ${
                    activeChatId === chat.id ? "bg-blue-900 text-white shadow-lg" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-300 overflow-hidden border-2 border-white/20">
                      <img src={`https://ui-avatars.com/api/?name=${chat.nome}&background=random`} alt={chat.nome} />
                    </div>
                    {chat.status === "online" && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-neutral-50 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex justify-between items-start gap-2">
                      <p className="text-[11px] font-black uppercase tracking-tighter truncate">{chat.nome}</p>
                      <span className={`text-[8px] font-bold uppercase shrink-0 ${activeChatId === chat.id ? "text-blue-200" : "text-neutral-400"}`}>
                        {chat.horario}
                      </span>
                    </div>
                    <p className={`text-[10px] font-bold truncate max-w-45 ${activeChatId === chat.id ? "text-blue-100/70" : "text-neutral-500"}`}>
                      {chat.ultimaMsg}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ÁREA DO CHAT (Desktop) */}
          <div className="hidden md:flex flex-1 flex-col bg-neutral-50 border border-neutral-400 rounded-4xl overflow-hidden shadow-sm">
            <ChatWindow chat={activeChat} />
          </div>

          {/* MODAL DE CHAT (Mobile) */}
          <Modal
            isOpen={openChatModal}
            onClose={() => setOpenChatModal(false)}
            title="Canal de Negociação"
            icon="fa-solid fa-comments"
          >
            <div className="h-125">
               <ChatWindow chat={activeChat} isMobile={true} />
            </div>
          </Modal>

        </section>
      </InvestidorLayout>
    </>
  );
}

function ChatWindow({ chat, isMobile = false }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-neutral-400 border-opacity-30 flex justify-between items-center bg-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white text-xs font-black uppercase">
            {chat.nome.split(' ').map(n => n[0]).join('').substring(0,2)}
          </div>
          <div>
            <h4 className="text-[11px] font-black text-neutral-700 uppercase tracking-widest">{chat.nome}</h4>
            <p className="text-[9px] font-black text-blue-800 uppercase italic">{chat.cargo} • STATUS: {chat.status}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
            <i className="fa-solid fa-video text-[10px]"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px]">
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white border border-neutral-400 border-opacity-40 p-4 rounded-3xl rounded-tl-none shadow-sm text-xs font-bold text-neutral-600 leading-relaxed uppercase tracking-tight">
             {chat.ultimaMsg} Gostaria de agendar uma breve reunião para discutirmos as projeções de Yield para o próximo semestre.
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase mt-2 ml-1 italic">{chat.horario} • RECEBIDO</span>
        </div>

        <div className="flex flex-col items-end ml-auto max-w-[85%]">
          <div className="bg-blue-900 p-4 rounded-3xl rounded-tr-none shadow-lg text-xs font-bold text-white leading-relaxed uppercase tracking-tight">
            CONFIRMADO. FAVOR ENVIAR O DOCUMENTO TÉCNICO E A PLANILHA DE VIABILIDADE ANTES DA CALL.
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase mt-2 mr-1 italic">10:18 AM • LIDO</span>
        </div>
      </div>

      <div className={`p-6 bg-white border-t border-neutral-400 border-opacity-30 ${isMobile ? 'pb-2' : ''}`}>
        <div className="flex gap-3 items-center bg-neutral-100 p-2 rounded-2xl border border-neutral-400">
          <button className="w-10 h-10 text-neutral-400 hover:text-blue-900 transition-all cursor-pointer">
            <i className="fa-solid fa-file-invoice-dollar text-sm"></i>
          </button>
          <input 
            type="text" 
            placeholder="ESCREVER MENSAGEM DE NEGOCIAÇÃO..."
            className="flex-1 bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest text-neutral-700 placeholder:text-neutral-400"
          />
          <button className="bg-blue-900 text-white h-10 px-4 md:px-6 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-blue-800 transition-all cursor-pointer flex items-center gap-2">
            <span className="hidden md:block">Enviar</span> <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
