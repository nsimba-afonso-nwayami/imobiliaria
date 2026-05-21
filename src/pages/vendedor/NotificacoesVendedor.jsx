import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import ModalSmall from "./components/ModalSmall";

export default function NotificacoesVendedor() {
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      tipo: "sucesso",
      titulo: "Sinal de Reserva Recebido",
      descricao: "O comprador João Manuel enviou o comprovativo do sinal (20%) para a Vivenda V3.",
      detalhes: "O valor foi identificado na conta vinculada. O processo de reserva da sua Vivenda em Talatona foi validado. Pode agora desativar o anúncio ou aguardar pela data da escritura.",
      data: "Hoje, 14:20",
      lida: false,
      icon: "fa-solid fa-file-invoice-dollar"
    },
    {
      id: 2,
      tipo: "alerta",
      titulo: "Confirmação de Visita",
      descricao: "A compradora Ana Costa aguarda confirmação para a visita de amanhã às 10:00.",
      detalhes: "Lembrete: A visita ao 'Apartamento T2 no Kilamba' está pendente. Por favor, confirme se estará no local através da sua agenda de visitas para que o comprador receba o alerta.",
      data: "Hoje, 09:15",
      lida: false,
      icon: "fa-solid fa-calendar-check"
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Destaque Premium Ativo",
      descricao: "O seu anúncio da Vivenda no Benfica foi promovido com sucesso.",
      detalhes: "O pagamento do destaque foi processado. O seu imóvel aparecerá no topo das buscas em Luanda pelos próximos 7 dias, aumentando a visibilidade e o número de propostas.",
      data: "Ontem, 16:45",
      lida: true,
      icon: "fa-solid fa-bullhorn"
    },
    {
      id: 4,
      tipo: "info",
      titulo: "Nova Proposta de Compra",
      descricao: "Carlos Pedro enviou uma nova proposta de 230M Kz pela sua propriedade.",
      detalhes: "O interessado Carlos Pedro manifestou interesse formal. Verifique os detalhes na aba de interessados para aceitar ou enviar uma contraproposta.",
      data: "05 Mai 2026",
      lida: true,
      icon: "fa-solid fa-comments-dollar"
    }
  ]);

  const handleOpenDetails = (notificacao) => {
    setSelectedNotif(notificacao);
    setIsModalOpen(true);
    setNotificacoes(notificacoes.map(n => n.id === notificacao.id ? { ...n, lida: true } : n));
  };

  return (
    <>
      <title>Minhas Notificações | Imobi Premium</title>

      <VendedorLayout title="Log de Atividade">
        <section className="w-full space-y-8 pb-12">
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-1">
                Anúncios & Vendas
              </p>
              <h2 className="text-3xl font-black text-blue-950 tracking-tighter italic uppercase">
                Notificações
              </h2>
            </div>
            <button 
              onClick={() => setNotificacoes(notificacoes.map(n => ({ ...n, lida: true })))}
              className="px-6 h-10 bg-slate-50 border border-slate-300 rounded-xl text-[9px] font-black uppercase tracking-widest text-blue-950 hover:bg-slate-300 transition-all cursor-pointer"
            >
              Marcar tudo como lido
            </button>
          </div>

          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <div 
                key={notificacao.id}
                onClick={() => handleOpenDetails(notificacao)}
                className={`group relative bg-slate-50 border rounded-4xl p-6 transition-all duration-300 flex items-start gap-6 cursor-pointer shadow-sm ${
                  notificacao.lida ? 'border-slate-300 opacity-70' : 'border-sky-700 border-l-12'
                }`}
              >
                {/* Ícones com as cores da tua paleta */}
                <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center border ${
                  notificacao.tipo === 'sucesso' ? 'bg-sky-50 border-sky-300 text-sky-700' :
                  notificacao.tipo === 'alerta' ? 'bg-blue-900 border-blue-950 text-slate-50' :
                  'bg-slate-300 border-slate-500 text-blue-950'
                }`}>
                  <i className={`${notificacao.icon} text-lg`}></i>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-sm font-black uppercase tracking-tight ${notificacao.lida ? 'text-slate-500' : 'text-blue-950'}`}>
                      {notificacao.titulo}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-500 uppercase italic whitespace-nowrap">
                      {notificacao.data}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                    {notificacao.descricao}
                  </p>
                </div>

                {!notificacao.lida && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-sky-700 rounded-full animate-pulse"></div>
                )}
                
                <div className="hidden group-hover:flex items-center gap-2 absolute right-6 bottom-4 animate-in fade-in slide-in-from-right-4">
                   <button 
                     onClick={(e) => { e.stopPropagation(); handleOpenDetails(notificacao); }}
                     className="h-8 px-4 bg-blue-950 text-slate-50 border border-blue-950 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all shadow-sm"
                   >
                     Ver Detalhes
                   </button>
                </div>
              </div>
            ))}
          </div>

          {notificacoes.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border border-dashed border-slate-300 rounded-4xl bg-slate-50">
              <i className="fa-solid fa-bell-slash text-slate-300 text-4xl"></i>
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Sem novas ocorrências</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase italic">O seu painel de vendas está atualizado</p>
              </div>
            </div>
          )}
          
        </section>

        {/* Modal Pequeno seguindo a tua paleta */}
        <ModalSmall 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Registo do Sistema"
          icon={selectedNotif?.icon || "fa-solid fa-bell"}
        >
          {selectedNotif && (
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-300">
                <p className="text-[9px] font-black text-sky-700 uppercase tracking-widest mb-1 italic">Assunto do Evento</p>
                <h4 className="text-sm font-black text-blue-950 uppercase tracking-tight">{selectedNotif.titulo}</h4>
              </div>

              <div className="space-y-2 px-1">
                <p className="text-[10px] font-black text-slate-500 uppercase italic">Detalhes Completos:</p>
                <p className="text-xs font-bold text-blue-950 leading-relaxed uppercase tracking-tight">
                  {selectedNotif.detalhes || selectedNotif.descricao}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-sky-700 text-slate-50 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer"
                >
                  Confirmar Ciência
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-slate-50 text-blue-950 border border-slate-300 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-300 transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </ModalSmall>

      </VendedorLayout>
    </>
  );
}
