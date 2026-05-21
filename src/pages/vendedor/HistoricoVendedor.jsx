import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";

export default function HistoricoVendedor() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [selectedTransacao, setSelectedTransacao] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Dados focados na realidade P2P Angolana (Venda de Imóveis)
  const historico = [
    {
      id: 1,
      type: "Recebimento",
      title: "Sinal (20%) - Vivenda V3 Talatona",
      date: "25 Mai 2026",
      value: "+ 50.000.000 Kz",
      status: "Confirmado",
      method: "Transferência Bancária",
      ref: "REF-992834",
      category: "Venda de Imóvel"
    },
    {
      id: 2,
      type: "Pagamento",
      title: "Emissão de Certidão Predial",
      date: "22 Mai 2026",
      value: "- 15.000 Kz",
      status: "Concluído",
      method: "Débito em Conta",
      ref: "REF-881722",
      category: "Documentação"
    },
    {
      id: 3,
      type: "Recebimento",
      title: "Pagamento Final - Apartamento Kilamba",
      date: "10 Mai 2026",
      value: "+ 45.000.000 Kz",
      status: "Confirmado",
      method: "Transferência Bancária",
      ref: "REF-772154",
      category: "Venda de Imóvel"
    },
    {
        id: 4,
        type: "Pagamento",
        title: "Destaque Premium de Anúncio (7 Dias)",
        date: "05 Mai 2026",
        value: "- 25.000 Kz",
        status: "Concluído",
        method: "Referência Multicaixa",
        ref: "REF-665241",
        category: "Marketing P2P"
      },
  ];

  return (
    <>
      <title>Extrato e Transações | Imobi Premium</title>

      <VendedorLayout title="Linha do Tempo">
        <section className="space-y-8">
          
          {/* HEADER E FILTROS DE PERÍODO */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Transações e Auditoria</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter">Extrato Consolidado</h2>
            </div>

            <div className="flex gap-2 flex-wrap bg-white p-2 rounded-2xl shadow-sm border border-slate-50">
              {["Todos", "Recebimentos", "Pagamentos"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                    selectedFilter === f 
                    ? "bg-blue-950 text-white shadow-lg" 
                    : "text-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* LISTA DE ATIVIDADES EM CARDS */}
          <div className="space-y-4">
            {historico.map((item) => (
              <div 
                key={item.id} 
                onClick={() => { setSelectedTransacao(item); setOpenModal(true); }}
                className="bg-white rounded-3xl border border-slate-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 cursor-pointer group"
              >
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.type === 'Recebimento' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <i className={`fas ${item.type === 'Recebimento' ? 'fa-arrow-down' : 'fa-arrow-up'} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-blue-950 uppercase tracking-tighter group-hover:text-sky-700 transition-colors">{item.title}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date} • {item.category}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-12 w-full md:w-auto border-t md:border-none pt-4 md:pt-0">
                  <div className="text-right">
                    <p className={`text-lg font-black italic tracking-tighter ${
                      item.type === 'Recebimento' ? 'text-emerald-600' : 'text-blue-950'
                    }`}>
                      {item.value}
                    </p>
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.status}</span>
                  </div>
                  <i className="fas fa-chevron-right text-slate-200 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            ))}
          </div>

          {/* BOTÃO CARREGAR MAIS */}
          <div className="flex justify-center pt-8">
            <button className="px-12 h-14 border-2 border-slate-100 text-blue-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-sky-700 hover:text-sky-700 transition-all cursor-pointer">
              Carregar Meses Anteriores
            </button>
          </div>
        </section>

        {/* MODAL: DETALHES DA TRANSAÇÃO */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Comprovante Digital"
          icon="fas fa-receipt"
        >
          {selectedTransacao && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="text-center py-6 border-b border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Valor da Operação</p>
                  <h4 className={`text-4xl font-black italic tracking-tighter ${
                    selectedTransacao.type === 'Recebimento' ? 'text-emerald-600' : 'text-blue-950'
                  }`}>
                    {selectedTransacao.value}
                  </h4>
               </div>

               <div className="space-y-4">
                  {[
                    { label: "ID da Transação", value: selectedTransacao.ref },
                    { label: "Data e Hora", value: `${selectedTransacao.date} - 14:32` },
                    { label: "Método", value: selectedTransacao.method },
                    { label: "Categoria", value: selectedTransacao.category },
                    { label: "Status no Banco", value: "Validado pela Instituição" },
                  ].map((info, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{info.label}</span>
                      <span className="text-[10px] font-black text-blue-950 uppercase">{info.value}</span>
                    </div>
                  ))}
               </div>

               <div className="grid grid-cols-1 gap-3 pt-4">
                  <button className="h-16 bg-blue-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all shadow-xl shadow-blue-950/20 flex items-center justify-center gap-3 cursor-pointer">
                    <i className="fas fa-download"></i> Baixar PDF do Recibo
                  </button>
                  <button className="h-16 border border-slate-200 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer">
                    Reportar Inconsistência
                  </button>
               </div>
            </div>
          )}
        </Modal>
      </VendedorLayout>
    </>
  );
}
