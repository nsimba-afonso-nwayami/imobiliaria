import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function DashboardInvestidor() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAtivo, setSelectedAtivo] = useState(null);

  const stats = [
    { label: "Patrimônio Total", value: "1.2B Kz", sub: "+12.5% este ano", icon: "fa-chart-line", trend: "up" },
    { label: "Rendimento Mensal", value: "8.5M Kz", sub: "Dividendos Estimados", icon: "fa-sack-dollar", trend: "up" },
    { label: "Ativos em Carteira", value: "06", sub: "Monitoramento Ativo", icon: "fa-building-shield", trend: "neutral" },
  ];

  const meusAtivos = [
    { 
        id: 1, 
        title: "Edifício Corporativo Viana", 
        yield: "12% a.a", 
        status: "Alugado", 
        value: "450M Kz",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        details: "Ativo de alta liquidez com contrato de 5 anos assinado por multinacional."
    },
    { 
        id: 2, 
        title: "Condomínio Talatona Park", 
        yield: "9.5% a.a", 
        status: "Em Valorização", 
        value: "280M Kz",
        image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
        details: "Zona de expansão urbana com projeção de valorização de 20% até 2027."
    },
  ];

  const handleOpenDetails = (ativo) => {
    setSelectedAtivo(ativo);
    setOpenModal(true);
  };

  return (
    <>
      <title>Investidor | Imobi Premium</title>

      <InvestidorLayout title="Gestão de Ativos">
        <section className="space-y-10">
          
          {/* MÉTRICAS DE PERFORMANCE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-50 p-8 shadow-sm relative overflow-hidden group hover:border-sky-700/30 transition-all duration-500">
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-2">{stat.label}</p>
                  <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter">{stat.value}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-sky-50 text-sky-700'}`}>
                       {stat.sub}
                    </span>
                  </div>
                </div>
                <i className={`fas ${stat.icon} absolute -right-4 -bottom-4 text-7xl text-slate-50 group-hover:text-sky-50 transition-colors duration-500`}></i>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* CARTEIRA DE ATIVOS */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-950"></span>
                  <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">Ativos Estratégicos</h2>
                </div>
                <button className="text-[10px] font-black text-sky-700 uppercase tracking-widest hover:text-blue-950 transition-colors cursor-pointer">
                  Exportar Relatório <i className="fas fa-file-pdf ml-2"></i>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {meusAtivos.map((ativo) => (
                  <div key={ativo.id} className="bg-white border border-slate-50 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-sky-700">
                    <div className="w-full md:w-32 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-50">
                        <img src={ativo.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-black text-blue-950 text-lg tracking-tight">{ativo.title}</h3>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Patrimônio Alocado: {ativo.value}</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-1">
                      <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase italic">Yield: {ativo.yield}</span>
                      <button 
                        onClick={() => handleOpenDetails(ativo)}
                        className="w-12 h-12 bg-blue-950 text-white rounded-xl hover:bg-sky-700 transition-all cursor-pointer flex items-center justify-center shadow-lg shadow-blue-950/20"
                      >
                        <i className="fas fa-chart-pie text-xs"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OPORTUNIDADES & AÇÕES */}
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <span className="w-8 h-1 bg-sky-700"></span>
                  <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">Oportunidades</h2>
                </div>
                
                <div className="bg-blue-950 rounded-4xl p-8 text-white relative overflow-hidden shadow-2xl group">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black leading-tight mb-4 italic">Mercado<br/>Off-Market</h3>
                        <p className="text-slate-300 text-xs mb-8 leading-relaxed uppercase tracking-tighter font-bold">Acesse ativos exclusivos antes de chegarem ao público.</p>
                        <Link to="/dashboard/investidor/oportunidades" className="inline-block bg-sky-700 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-blue-950 transition-all shadow-lg shadow-sky-700/20 active:scale-95">
                            Ver Curadoria
                        </Link>
                    </div>
                    <i className="fas fa-gem absolute -right-8 -bottom-8 text-9xl text-white/5 rotate-12 group-hover:text-sky-700/10 transition-colors duration-700"></i>
                </div>

                <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-4xl p-8 flex flex-col items-center text-center group hover:border-sky-700 transition-all duration-500 cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-sky-50 transition-colors">
                        <i className="fas fa-plus text-slate-300 group-hover:text-sky-700"></i>
                    </div>
                    <p className="font-black text-blue-950 text-xs uppercase tracking-widest">Incluir Ativo Externo</p>
                    <p className="text-[9px] text-slate-500 mt-2 font-bold uppercase tracking-widest">Consolidar Patrimônio</p>
                </div>
            </div>

          </div>
        </section>

        {/* MODAL ANALÍTICO */}
        <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Relatório de Performance"
            icon="fas fa-chart-line"
        >
            {selectedAtivo && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                            <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1">Status do Ativo</p>
                            <p className="font-black text-blue-950 italic text-xl uppercase tracking-tighter">{selectedAtivo.status}</p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-emerald-700">
                            <p className="text-[9px] uppercase font-black text-emerald-600 tracking-widest mb-1">Retorno Líquido</p>
                            <p className="font-black text-xl italic tracking-tighter">{selectedAtivo.yield}</p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-950 rounded-3xl text-white relative overflow-hidden">
                        <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-4 text-sky-400">Sumário Técnico</h4>
                        <p className="text-slate-100 leading-relaxed italic text-sm relative z-10">
                            "{selectedAtivo.details}"
                        </p>
                        <i className="fas fa-quote-right absolute top-4 right-4 text-4xl text-white/5"></i>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-4">
                        <button className="h-16 bg-sky-700 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/10 cursor-pointer">
                            Documentação de Propriedade
                        </button>
                        <button className="h-16 border border-slate-200 text-blue-950 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-slate-50 transition-all cursor-pointer">
                            Falar com Consultor
                        </button>
                    </div>
                </div>
            )}
        </Modal>
      </InvestidorLayout>
    </>
  );
}