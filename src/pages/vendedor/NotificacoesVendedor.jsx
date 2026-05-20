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
      titulo: "Dividendos Creditados",
      descricao: "O rendimento mensal do portfólio Kilamba Business Center foi depositado.",
      detalhes: "O valor referente ao yield de Abril de 2026 foi processado. A rentabilidade líquida superou a projeção inicial em 0.8%. Verifique o extrato detalhado na seção de faturamento.",
      data: "Hoje, 14:20",
      lida: false,
      icon: "fa-solid fa-money-bill-trend-up"
    },
    {
      id: 2,
      tipo: "alerta",
      titulo: "Aporte de Capital Pendente",
      descricao: "Aguardando validação da segunda tranche para o projeto Talatona Park.",
      detalhes: "O prazo para o aporte de capital referente à fase de acabamentos encerra em 48h. Por favor, anexe o comprovativo Swift ou realize a transferência via conta vinculada para evitar multas contratuais.",
      data: "Hoje, 09:15",
      lida: false,
      icon: "fa-solid fa-triangle-exclamation"
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Dossiê Jurídico Atualizado",
      descricao: "A Dra. Ana Paula enviou a certidão de registro de imóvel atualizada (Penthouse Kinaxixi).",
      detalhes: "O documento comprova a averbação da escritura pública e a quitação integral do IPU. O arquivo PDF está disponível para revisão técnica no chat ou na central de documentos.",
      data: "Ontem, 16:45",
      lida: true,
      icon: "fa-solid fa-gavel"
    },
    {
      id: 4,
      tipo: "info",
      titulo: "Oportunidade de Leilão",
      descricao: "Novo ativo recuperado pelo banco em Luanda Sul disponível para reserva prioritária.",
      detalhes: "Unidade comercial de 450m² com desconto de 35% sobre a avaliação de mercado. Como investidor Premium, você tem 24h de exclusividade para manifestar interesse antes da listagem pública.",
      data: "05 Mai 2026",
      lida: true,
      icon: "fa-solid fa-hand-holding-dollar"
    }
  ]);

  const handleOpenDetails = (notificacao) => {
    setSelectedNotif(notificacao);
    setIsModalOpen(true);
    setNotificacoes(notificacoes.map(n => n.id === notificacao.id ? { ...n, lida: true } : n));
  };

  return (
    <>
      <title>Centro de Notificações | Imobi Premium</title>

      <VendedorLayout title="Log de Eventos">
        <section className="w-full space-y-8 pb-12">
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                Asset Alerts & Logs
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Central de Notificações
              </h2>
            </div>
            <button 
              onClick={() => setNotificacoes(notificacoes.map(n => ({ ...n, lida: true })))}
              className="px-6 h-10 bg-neutral-100 border border-neutral-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Marcar todos como lidos
            </button>
          </div>

          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <div 
                key={notificacao.id}
                onClick={() => handleOpenDetails(notificacao)}
                className={`group relative bg-neutral-50 border rounded-4xl p-6 transition-all duration-300 flex items-start gap-6 cursor-pointer shadow-sm ${
                  notificacao.lida ? 'border-neutral-400 opacity-70' : 'border-blue-800 border-l-12'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center border ${
                  notificacao.tipo === 'sucesso' ? 'bg-green-50 border-green-200 text-green-600' :
                  notificacao.tipo === 'alerta' ? 'bg-amber-50 border-amber-200 text-amber-600' :
                  'bg-blue-50 border-blue-200 text-blue-800'
                }`}>
                  <i className={`${notificacao.icon} text-lg`}></i>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-sm font-black uppercase tracking-tight ${notificacao.lida ? 'text-neutral-500' : 'text-neutral-700'}`}>
                      {notificacao.titulo}
                    </h3>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase italic whitespace-nowrap">
                      {notificacao.data}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-neutral-500 leading-relaxed uppercase tracking-tight">
                    {notificacao.descricao}
                  </p>
                </div>

                {!notificacao.lida && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-800 rounded-full animate-pulse"></div>
                )}
                
                <div className="hidden group-hover:flex items-center gap-2 absolute right-6 bottom-4 animate-in fade-in slide-in-from-right-4">
                   <button 
                     onClick={(e) => { e.stopPropagation(); handleOpenDetails(notificacao); }}
                     className="h-8 px-4 bg-white border border-neutral-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all shadow-sm"
                   >
                     Abrir Log
                   </button>
                </div>
              </div>
            ))}
          </div>

          {notificacoes.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border border-dashed border-neutral-400 rounded-4xl bg-neutral-50/50">
              <i className="fa-solid fa-bell-slash text-neutral-300 text-4xl"></i>
              <div>
                <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Atividade Silenciosa</p>
                <p className="text-[10px] font-bold text-neutral-300 uppercase italic">Nenhuma nova movimentação de ativos detectada</p>
              </div>
            </div>
          )}
          
        </section>

        <ModalSmall 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Relatório de Evento"
          icon={selectedNotif?.icon || "fa-solid fa-bell"}
        >
          {selectedNotif && (
            <div className="space-y-6">
              <div className="p-4 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30">
                <p className="text-[9px] font-black text-blue-800 uppercase tracking-widest mb-1 italic">Descriptor do Evento</p>
                <h4 className="text-sm font-black text-neutral-700 uppercase tracking-tight">{selectedNotif.titulo}</h4>
              </div>

              <div className="space-y-2 px-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase italic">Registro de Auditoria:</p>
                <p className="text-xs font-bold text-neutral-600 leading-relaxed uppercase tracking-tight">
                  {selectedNotif.detalhes || selectedNotif.descricao}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-blue-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all cursor-pointer shadow-lg"
                >
                  Confirmar Ciência
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-neutral-100 text-neutral-700 border border-neutral-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  Sair do Log
                </button>
              </div>
            </div>
          )}
        </ModalSmall>

      </VendedorLayout>
    </>
  );
}
