import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";

export default function MensagensVendedor() {
  const [activeChatId, setActiveChatId] = useState(1);
  const [openChatModal, setOpenChatModal] = useState(false);

  const conversas = [
    { id: 1, nome: "Mateus Henriques", cargo: "Interessado - Vivenda Talatona", status: "online", ultimaMsg: "Já consegui o extrato bancário para avançar com o sinal de 20%.", horario: "14:20" },
    { id: 2, nome: "Dra. Eliane Vidal", cargo: "Advogada (Minutas e CPVC)", status: "offline", ultimaMsg: "A minuta do contrato de promessa de compra e venda está revisada.", horario: "Ontem" },
    { id: 3, nome: "Sandro Silva", cargo: "Comprador - Apartamento Kilamba", status: "online", ultimaMsg: "Consigo passar no imóvel amanhã às 17h para fechar?", horario: "Segunda" },
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

      <VendedorLayout title="Central de Comunicação">
        <section className="w-full space-y-8 h-[calc(100vh-180px)] min-h-150 flex gap-4">
          
          {/* LISTA DE CONVERSAS (Sidebar Esquerda) */}
          <div className="w-full md:w-80 lg:w-96 flex flex-col bg-slate-50 border border-slate-300 rounded-4xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-300">
              <h3 className="text-xs font-black text-blue-950 uppercase tracking-[0.2em] italic">Negociações Ativas</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {conversas.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => handleSelectChat(chat.id)}
                  className={`w-full p-4 rounded-3xl flex gap-4 items-center transition-all cursor-pointer ${
                    activeChatId === chat.id ? "bg-blue-950 text-slate-50 shadow-lg" : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-slate-300 overflow-hidden border-2 border-white/20">
                      <img src={`https://ui-avatars.com/api/?name=${chat.nome}&background=random`} alt={chat.nome} />
                    </div>
                    {chat.status === "online" && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-50 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex justify-between items-start gap-2">
                      <p className="text-[11px] font-black uppercase tracking-tighter truncate">{chat.nome}</p>
                      <span className={`text-[8px] font-bold uppercase shrink-0 ${activeChatId === chat.id ? "text-sky-300" : "text-slate-400"}`}>
                        {chat.horario}
                      </span>
                    </div>
                    <p className={`text-[10px] font-bold truncate max-w-45 ${activeChatId === chat.id ? "text-slate-100/70" : "text-slate-500"}`}>
                      {chat.ultimaMsg}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ÁREA DO CHAT (Desktop) */}
          <div className="hidden md:flex flex-1 flex-col bg-slate-50 border border-slate-300 rounded-4xl overflow-hidden shadow-sm">
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
      </VendedorLayout>
    </>
  );
}

function ChatWindow({ chat, isMobile = false }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-slate-300 flex justify-between items-center bg-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-slate-50 text-xs font-black uppercase">
            {chat.nome.split(' ').map(n => n[0]).join('').substring(0,2)}
          </div>
          <div>
            <h4 className="text-[11px] font-black text-blue-950 uppercase tracking-widest">{chat.nome}</h4>
            <p className="text-[9px] font-black text-sky-700 uppercase italic">{chat.cargo} • STATUS: {chat.status}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-950 hover:text-slate-50 transition-all cursor-pointer">
            <i className="fa-solid fa-phone text-[10px]"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px]">
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white border border-slate-300 p-4 rounded-3xl rounded-tl-none shadow-sm text-xs font-bold text-slate-600 leading-relaxed uppercase tracking-tight">
             {chat.ultimaMsg} Gostaria de agendar a assinatura do CPVC ainda esta semana para travar outras propostas.
          </div>
          <span className="text-[8px] font-black text-slate-400 uppercase mt-2 ml-1 italic">{chat.horario} • RECEBIDO</span>
        </div>

        <div className="flex flex-col items-end ml-auto max-w-[85%]">
          <div className="bg-blue-950 p-4 rounded-3xl rounded-tr-none shadow-lg text-xs font-bold text-slate-50 leading-relaxed uppercase tracking-tight">
            PERFEITO. JÁ ENVIEI OS MEUS DOCUMENTOS DE IDENTIDADE E A CERTIDÃO PREDIAL ATUALIZADA PARA O JURÍDICO ADIANTAR A MINUTA.
          </div>
          <span className="text-[8px] font-black text-slate-400 uppercase mt-2 mr-1 italic">10:18 AM • LIDO</span>
        </div>
      </div>

      <div className={`p-6 bg-white border-t border-slate-300 ${isMobile ? 'pb-2' : ''}`}>
        <div className="flex gap-3 items-center bg-slate-100 p-2 rounded-2xl border border-slate-300">
          <button className="w-10 h-10 text-slate-400 hover:text-sky-700 transition-all cursor-pointer">
            <i className="fa-solid fa-paperclip text-sm"></i>
          </button>
          <input 
            type="text" 
            placeholder="ESCREVER MENSAGEM DE NEGOCIAÇÃO..."
            className="flex-1 bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest text-slate-700 placeholder:text-slate-400"
          />
          <button className="bg-blue-950 text-slate-50 h-10 px-4 md:px-6 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-sky-700 transition-all cursor-pointer flex items-center gap-2">
            <span className="hidden md:block">Enviar</span> <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
