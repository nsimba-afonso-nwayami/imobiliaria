import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";

export default function MeusImoveisInvestidor() {
  const [openManageModal, setOpenManageModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const meusImoveis = [
    {
      id: 1,
      title: "Edifício Corporativo Viana",
      tenant: "Standard Bank Angola",
      rentStatus: "Pago",
      nextMaintenance: "15 Jun 2026",
      occupancy: "100%",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      address: "Estrada de Viana, Luanda",
      value: "4.5M Kz/mês"
    },
    {
      id: 2,
      title: "Condomínio Talatona Park",
      tenant: "Unidade 402 - Família Silva",
      rentStatus: "Aguardando",
      nextMaintenance: "22 Mai 2026",
      occupancy: "85%",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
      address: "Via AL 15, Talatona",
      value: "1.2M Kz/mês"
    },
  ];

  return (
    <>
      <title>Meus Imóveis | Imobi Premium</title>

      <InvestidorLayout title="Gestão de Unidades">
        <section className="space-y-8">
          
          {/* HEADER OPERACIONAL */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Monitoramento de Ativos</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Minhas Unidades</h2>
            </div>
            <button 
              onClick={() => setOpenAddModal(true)}
              className="h-14 px-8 bg-blue-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all shadow-lg shadow-blue-950/20 cursor-pointer flex items-center gap-3"
            >
              <i className="fas fa-plus"></i> Adicionar Nova Unidade
            </button>
          </div>

          {/* BARRA DE PESQUISA E FILTROS */}
          <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-4xl border border-slate-50 shadow-sm">
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input 
                type="text" 
                placeholder="BUSCAR POR NOME, INQUILINO OU LOCALIZAÇÃO..." 
                className="w-full h-14 bg-slate-50 rounded-xl pl-12 pr-6 text-[10px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-sky-700/20 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Todos", "Ocupados", "Vagos", "Em Manutenção"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`h-14 px-6 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                    filter === item 
                    ? "bg-blue-950 text-white shadow-md" 
                    : "bg-slate-50 text-slate-400 hover:text-blue-950"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DE CARDS GESTÃO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meusImoveis.map((imovel) => (
              <div key={imovel.id} className="bg-white rounded-[2.5rem] border border-slate-50 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 group">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Miniatura e Badge de Ocupação */}
                  <div className="relative shrink-0">
                    <img src={imovel.image} className="w-full sm:w-32 h-32 object-cover rounded-3xl" alt="" />
                    <div className="absolute -top-2 -right-2 bg-white shadow-md rounded-lg px-2 py-1 flex items-center gap-1 border border-slate-100">
                       <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                       <span className="text-[9px] font-black text-blue-950 uppercase">{imovel.occupancy}</span>
                    </div>
                  </div>

                  {/* Informações Principais */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter italic">{imovel.title}</h3>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{imovel.address}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-y border-slate-50 py-4">
                       <div>
                          <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Inquilino Atual</p>
                          <p className="text-[10px] font-black text-blue-950 truncate uppercase">{imovel.tenant}</p>
                       </div>
                       <div>
                          <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Valor Mensal</p>
                          <p className="text-[10px] font-black text-sky-700 italic">{imovel.value}</p>
                       </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                       <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                          imovel.rentStatus === 'Pago' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          Aluguel: {imovel.rentStatus}
                       </span>
                       <button 
                        onClick={() => { setSelected(imovel); setOpenManageModal(true); }}
                        className="flex-1 bg-slate-50 text-blue-950 hover:bg-sky-700 hover:text-white h-10 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer"
                       >
                        Gerenciar Ativo
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL: ADICIONAR NOVA UNIDADE */}
        <Modal
            isOpen={openAddModal}
            onClose={() => setOpenAddModal(false)}
            title="Cadastrar Unidade"
            icon="fas fa-building-circle-plus"
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome do Imóvel</label>
                        <input type="text" placeholder="EX: EDIFÍCIO LUXOR" className="w-full h-14 bg-slate-50 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:ring-2 focus:ring-sky-700 transition-all" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Localização</label>
                        <input type="text" placeholder="BAIRRO, CIDADE" className="w-full h-14 bg-slate-50 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:ring-2 focus:ring-sky-700 transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Valor de Aquisição</label>
                            <input type="text" placeholder="Kz" className="w-full h-14 bg-slate-50 rounded-2xl px-6 text-[11px] font-bold outline-none focus:ring-2 focus:ring-sky-700 transition-all" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de Ativo</label>
                            <select className="w-full h-14 bg-slate-50 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:ring-2 focus:ring-sky-700 transition-all appearance-none cursor-pointer">
                                <option>COMERCIAL</option>
                                <option>INDUSTRIAL</option>
                                <option>RESIDENCIAL</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-sky-700 transition-colors cursor-pointer bg-slate-50/50">
                    <i className="fas fa-cloud-arrow-up text-2xl text-slate-300 group-hover:text-sky-700 mb-2"></i>
                    <p className="text-[10px] font-black text-slate-500 uppercase">Anexar Documentação (PDF/IMG)</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                    <button type="button" onClick={() => setOpenAddModal(false)} className="h-14 border border-slate-200 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">Cancelar</button>
                    <button className="h-14 bg-sky-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-sky-700/20 hover:bg-sky-600 transition-all">Salvar Unidade</button>
                </div>
            </form>
        </Modal>

        {/* MODAL: GERENCIAR UNIDADE EXISTENTE */}
        <Modal
          isOpen={openManageModal}
          onClose={() => setOpenManageModal(false)}
          title="Painel de Controle"
          icon="fas fa-sliders"
        >
          {selected && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
               <div className="bg-blue-950 p-8 rounded-4xl text-white relative overflow-hidden">
                  <p className="text-[9px] font-black uppercase text-sky-400 tracking-widest mb-1 relative z-10">Manutenção Agendada</p>
                  <p className="text-2xl font-black italic tracking-tighter relative z-10">{selected.nextMaintenance}</p>
                  <i className="fas fa-screwdriver-wrench absolute -right-4 -bottom-4 text-7xl text-white/5 -rotate-12"></i>
               </div>

               <div className="grid grid-cols-1 gap-4">
                  <h4 className="text-[10px] font-black text-blue-950 uppercase tracking-widest border-l-4 border-sky-700 pl-3">Ações de Gestão</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-5 bg-slate-50 rounded-2xl hover:bg-sky-50 transition-all text-center group cursor-pointer border border-transparent hover:border-sky-700/20">
                      <i className="fas fa-tools text-slate-400 group-hover:text-sky-700 mb-2 block text-xl"></i>
                      <span className="text-[9px] font-black text-blue-950 uppercase">Pedir Reparo</span>
                    </button>
                    <button className="p-5 bg-slate-50 rounded-2xl hover:bg-sky-50 transition-all text-center group cursor-pointer border border-transparent hover:border-sky-700/20">
                      <i className="fas fa-file-contract text-slate-400 group-hover:text-sky-700 mb-2 block text-xl"></i>
                      <span className="text-[9px] font-black text-blue-950 uppercase">Contrato</span>
                    </button>
                  </div>

                  <button className="h-16 bg-blue-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all shadow-lg shadow-blue-950/20">
                    Histórico de Pagamentos
                  </button>
               </div>
            </div>
          )}
        </Modal>

      </InvestidorLayout>
    </>
  );
}
