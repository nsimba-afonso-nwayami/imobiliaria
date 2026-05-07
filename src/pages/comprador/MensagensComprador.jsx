import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

export default function MensagensComprador() {
  const [activeChatId, setActiveChatId] = useState(1);
  const [openChatModal, setOpenChatModal] = useState(false);

  const conversas = [
    { id: 1, nome: "Eng. Ricardo Santos", cargo: "Corretor Sénior", status: "online", ultimaMsg: "O contrato da Penthouse está pronto.", horario: "14:20" },
    { id: 2, nome: "Suporte Imobi", cargo: "Atendimento", status: "offline", ultimaMsg: "A sua visita foi confirmada.", horario: "Ontem" },
    { id: 3, nome: "Dra. Ana Paula", cargo: "Jurídico", status: "online", ultimaMsg: "Preciso do seu NIF atualizado.", horario: "Segunda" },
  ];

  // Encontra os dados do chat ativo para popular a interface e o modal
  const activeChat = conversas.find(c => c.id === activeChatId) || conversas[0];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    // Se for mobile (ajuste o breakpoint se necessário), abre o modal
    if (window.innerWidth < 768) {
      setOpenChatModal(true);
    }
  };

  return (
    <>
      <title>Mensagens & Negociações | Imobi Premium</title>

      <CompradorLayout title="Central de Comunicação">
        <section className="w-full space-y-8 h-[calc(100vh-180px)] min-h-150 flex gap-4">
          
          {/* LISTA DE CONVERSAS (Sidebar Esquerda) */}
          <div className="w-full md:w-80 lg:w-96 flex flex-col bg-neutral-50 border border-neutral-400 rounded-4xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-neutral-400 border-opacity-30">
              <h3 className="text-xs font-black text-neutral-700 uppercase tracking-[0.2em] italic">Conversas Ativas</h3>
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
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-300 overflow-hidden border-2 border-white/20">
                      <img src={`https://ui-avatars.com/api/?name=${chat.nome}&background=random`} alt={chat.nome} />
                    </div>
                    {chat.status === "online" && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-neutral-50 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start">
                      <p className="text-[11px] font-black uppercase tracking-tighter truncate w-32">{chat.nome}</p>
                      <span className={`text-[8px] font-bold uppercase ${activeChatId === chat.id ? "text-blue-200" : "text-neutral-400"}`}>
                        {chat.horario}
                      </span>
                    </div>
                    <p className={`text-[10px] font-bold truncate ${activeChatId === chat.id ? "text-blue-100/70" : "text-neutral-500"}`}>
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
            title="Chat de Suporte Técnico"
            icon="fa-solid fa-comments"
          >
            <div className="h-125"> {/* Altura fixa para o modal mobile */}
               <ChatWindow chat={activeChat} isMobile={true} />
            </div>
          </Modal>

        </section>
      </CompradorLayout>
    </>
  );
}

// Componente Interno para evitar repetição de código
function ChatWindow({ chat, isMobile = false }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header do Chat (Apenas Desktop ou dentro do Modal se preferir duplicar) */}
      <div className="p-6 border-b border-neutral-400 border-opacity-30 flex justify-between items-center bg-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white text-xs font-black uppercase">
            {chat.nome.split(' ').map(n => n[0]).join('').substring(0,2)}
          </div>
          <div>
            <h4 className="text-[11px] font-black text-neutral-700 uppercase tracking-widest">{chat.nome}</h4>
            <p className="text-[9px] font-black text-blue-800 uppercase italic">{chat.cargo} • {chat.status}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
            <i className="fa-solid fa-phone text-[10px]"></i>
          </button>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px]">
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white border border-neutral-400 border-opacity-40 p-4 rounded-3xl rounded-tl-none shadow-sm text-xs font-bold text-neutral-600 leading-relaxed uppercase tracking-tight">
             {chat.ultimaMsg}
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase mt-2 ml-1 italic">{chat.horario} • Entregue</span>
        </div>

        <div className="flex flex-col items-end ml-auto max-w-[85%]">
          <div className="bg-blue-900 p-4 rounded-3xl rounded-tr-none shadow-lg text-xs font-bold text-white leading-relaxed uppercase tracking-tight">
            ENTENDIDO. ESTAREI AGUARDANDO OS DOCUMENTOS PARA PROCESSAMENTO TÉCNICO.
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase mt-2 mr-1 italic">10:18 AM • Lido</span>
        </div>
      </div>

      {/* Input de Mensagem */}
      <div className={`p-6 bg-white border-t border-neutral-400 border-opacity-30 ${isMobile ? 'pb-2' : ''}`}>
        <div className="flex gap-3 items-center bg-neutral-100 p-2 rounded-2xl border border-neutral-400">
          <button className="w-10 h-10 text-neutral-400 hover:text-blue-900 transition-all cursor-pointer">
            <i className="fa-solid fa-paperclip text-sm"></i>
          </button>
          <input 
            type="text" 
            placeholder="MENSAGEM TÉCNICA..."
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
