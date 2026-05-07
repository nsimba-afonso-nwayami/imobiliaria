import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import ModalSmall from "./components/ModalSmall";

export default function NotificacoesComprador() {
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      tipo: "sucesso",
      titulo: "Pagamento Confirmado",
      descricao: "A reserva da Unidade 402 em Talatona foi processada com sucesso no sistema.",
      detalhes: "O comprovativo de transferência bancária foi validado pela nossa equipa financeira. O recibo oficial já está disponível na sua área de faturamento para download.",
      data: "Hoje, 14:20",
      lida: false,
      icon: "fa-solid fa-circle-check"
    },
    {
      id: 2,
      tipo: "alerta",
      titulo: "Visita Técnica Pendente",
      descricao: "Lembrete: Sua visita para amanhã às 10:30 precisa de confirmação final via chat.",
      detalhes: "A visita ao ativo 'Penthouse Talatona' está agendada para amanhã. Por favor, confirme a sua presença através do chat para que o consultor se desloque ao local.",
      data: "Hoje, 09:15",
      lida: false,
      icon: "fa-solid fa-clock"
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Novo Documento Disponível",
      descricao: "O Eng. Ricardo Santos anexou o rascunho do contrato de promessa de compra e venda.",
      detalhes: "O rascunho do CPVC foi carregado. Recomendamos a revisão técnica dos anexos antes da assinatura presencial agendada para a próxima semana.",
      data: "Ontem, 16:45",
      lida: true,
      icon: "fa-solid fa-file-contract"
    },
    {
      id: 4,
      tipo: "info",
      titulo: "Atualização de Mercado",
      descricao: "Novas unidades foram adicionadas ao projeto Kilamba Business Center.",
      detalhes: "O inventário do Kilamba Business Center foi atualizado com 5 novas unidades de escritório premium. Verifique a listagem atualizada.",
      data: "05 Mai 2026",
      lida: true,
      icon: "fa-solid fa-chart-line"
    }
  ]);

  const handleOpenDetails = (notificacao) => {
    setSelectedNotif(notificacao);
    setIsModalOpen(true);
    // Marcar como lida automaticamente ao abrir detalhes
    setNotificacoes(notificacoes.map(n => n.id === notificacao.id ? { ...n, lida: true } : n));
  };

  const marcarComoLida = (id) => {
    setNotificacoes(notificacoes.map(n => n.id === id ? { ...n, lida: true } : n));
  };

  return (
    <>
      <title>Centro de Notificações | Imobi Premium</title>

      <CompradorLayout title="Log de Atividades">
        <section className="w-full space-y-8 pb-12">
          
          {/* Cabeçalho da Página */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                System Alerts & Logs
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Notificações
              </h2>
            </div>
            <button 
              onClick={() => setNotificacoes(notificacoes.map(n => ({ ...n, lida: true })))}
              className="px-6 h-10 bg-neutral-100 border border-neutral-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Marcar tudo como lido
            </button>
          </div>

          {/* Listagem de Notificações */}
          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <div 
                key={notificacao.id}
                onClick={() => handleOpenDetails(notificacao)}
                className={`group relative bg-neutral-50 border rounded-4xl p-6 transition-all duration-300 flex items-start gap-6 cursor-pointer shadow-sm ${
                  notificacao.lida ? 'border-neutral-400 opacity-70' : 'border-blue-800 border-l-12'
                }`}
              >
                {/* Ícone por Tipo */}
                <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center border ${
                  notificacao.tipo === 'sucesso' ? 'bg-green-50 border-green-200 text-green-600' :
                  notificacao.tipo === 'alerta' ? 'bg-amber-50 border-amber-200 text-amber-600' :
                  'bg-blue-50 border-blue-200 text-blue-800'
                }`}>
                  <i className={`${notificacao.icon} text-lg`}></i>
                </div>

                {/* Conteúdo */}
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

                {/* Indicador de Status */}
                {!notificacao.lida && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-800 rounded-full animate-pulse"></div>
                )}
                
                {/* Ações de Hover (Desktop) */}
                <div className="hidden group-hover:flex items-center gap-2 absolute right-6 bottom-4 animate-in fade-in slide-in-from-right-4">
                   <button 
                     onClick={(e) => { e.stopPropagation(); handleOpenDetails(notificacao); }}
                     className="h-8 px-4 bg-white border border-neutral-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all shadow-sm"
                   >
                     Ver Detalhes
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Estado Vazio */}
          {notificacoes.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border border-dashed border-neutral-400 rounded-4xl bg-neutral-50/50">
              <i className="fa-solid fa-bell-slash text-neutral-300 text-4xl"></i>
              <div>
                <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Sem novas ocorrências</p>
                <p className="text-[10px] font-bold text-neutral-300 uppercase italic">O sistema está operando em normalidade</p>
              </div>
            </div>
          )}
          
        </section>

        {/* Modal de Detalhes - Estilo Premium Industrial */}
        <ModalSmall 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Relatório de Notificação"
          icon={selectedNotif?.icon || "fa-solid fa-bell"}
        >
          {selectedNotif && (
            <div className="space-y-6">
              <div className="p-4 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30">
                <p className="text-[9px] font-black text-blue-800 uppercase tracking-widest mb-1 italic">Assunto do Log</p>
                <h4 className="text-sm font-black text-neutral-700 uppercase tracking-tight">{selectedNotif.titulo}</h4>
              </div>

              <div className="space-y-2 px-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase italic">Detalhes da Ocorrência:</p>
                <p className="text-xs font-bold text-neutral-600 leading-relaxed uppercase tracking-tight">
                  {selectedNotif.detalhes || selectedNotif.descricao}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-blue-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all cursor-pointer shadow-lg"
                >
                  Confirmar Leitura
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-12 bg-neutral-100 text-neutral-700 border border-neutral-400 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  Fechar Registro
                </button>
              </div>
            </div>
          )}
        </ModalSmall>

      </CompradorLayout>
    </>
  );
}