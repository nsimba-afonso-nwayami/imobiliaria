import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";

export default function PortfolioInvestidor() {
  const [selectedTab, setSelectedTab] = useState("Todos");
  const [selectedAtivo, setSelectedAtivo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const portfolio = [
    {
      id: 1,
      title: "Edifício Corporativo Viana",
      type: "Comercial",
      value: "450M Kz",
      yield: "12% a.a",
      status: "Alugado",
      location: "Viana, Luanda",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      inquilino: "Standard Bank Angola",
      vencimento: "Jan 2029"
    },
    {
      id: 2,
      title: "Condomínio Talatona Park",
      type: "Residencial",
      value: "280M Kz",
      yield: "9.5% a.a",
      status: "Em Valorização",
      location: "Talatona, Luanda",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
      inquilino: "N/A",
      vencimento: "N/A"
    },
    {
        id: 3,
        title: "Armazém Logístico ZEE",
        type: "Industrial",
        value: "600M Kz",
        yield: "14.2% a.a",
        status: "Alugado",
        location: "Viana, ZEE",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        inquilino: "Olisipo Cargo",
        vencimento: "Mar 2031"
      },
  ];

  const filteredPortfolio = selectedTab === "Todos" 
    ? portfolio 
    : portfolio.filter(item => item.type === selectedTab);

  return (
    <>
      <title>Meu Portfólio | Imobi Premium</title>

      <InvestidorLayout title="Portfólio de Ativos">
        <section className="space-y-8">
          
          {/* HEADER & FILTROS */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Composição de Carteira</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter">Gestão de Patrimônio</h2>
            </div>

            <div className="flex gap-2 flex-wrap">
              {["Todos", "Residencial", "Comercial", "Industrial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                    selectedTab === tab 
                    ? "bg-blue-950 text-white shadow-lg shadow-blue-950/20" 
                    : "bg-white text-slate-500 border border-slate-100 hover:border-sky-700 hover:text-sky-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DE PORTFÓLIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((ativo) => (
              <div key={ativo.id} className="group bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-700">
                <div className="relative h-56 overflow-hidden">
                  <img src={ativo.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black text-blue-950 uppercase tracking-widest">
                      {ativo.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-sky-700 text-white px-4 py-2 rounded-xl text-[10px] font-black italic tracking-tighter shadow-lg">
                      Yield: {ativo.yield}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-blue-950 tracking-tight mb-1">{ativo.title}</h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <i className="fa-solid fa-location-dot text-[10px] text-sky-700"></i>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{ativo.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                        <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">Valor Alocado</p>
                        <p className="text-sm font-black text-blue-950 italic">{ativo.value}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                        <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">Inquilino</p>
                        <p className="text-[10px] font-black text-blue-950 truncate uppercase">{ativo.inquilino}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedAtivo(ativo); setOpenModal(true); }}
                    className="w-full h-14 bg-blue-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-sky-700 transition-all cursor-pointer shadow-xl shadow-blue-950/10"
                  >
                    Detalhamento Técnico
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL DETALHADO DO PORTFÓLIO */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Ficha do Ativo"
          icon="fas fa-file-contract"
        >
          {selectedAtivo && (
            <div className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="border border-slate-100 p-4 rounded-2xl">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Status Contratual</p>
                    <p className="text-sm font-black text-emerald-600 uppercase italic">{selectedAtivo.status}</p>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-2xl">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Vencimento</p>
                    <p className="text-sm font-black text-blue-950 uppercase italic">{selectedAtivo.vencimento}</p>
                  </div>
               </div>

               <div className="p-6 bg-slate-50 rounded-3xl space-y-4">
                 <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Impostos (IPU)</span>
                    <span className="text-xs font-black text-blue-950 italic">Em dia</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Seguro Patrimonial</span>
                    <span className="text-xs font-black text-emerald-600 italic">Vigente</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Manutenção Preventiva</span>
                    <span className="text-xs font-black text-blue-950 italic">Agendada para Jun/2026</span>
                 </div>
               </div>

               <div className="grid grid-cols-1 gap-3">
                  <button className="h-16 bg-sky-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all cursor-pointer shadow-lg shadow-sky-700/20">
                    Visualizar Contrato Digital
                  </button>
                  <button className="h-16 border border-slate-200 text-blue-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer">
                    Relatório de Manutenção
                  </button>
               </div>
            </div>
          )}
        </Modal>
      </InvestidorLayout>
    </>
  );
}
