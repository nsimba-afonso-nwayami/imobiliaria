import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";

export default function RelatoriosInvestidor() {
  const [periodo, setPeriodo] = useState("Mensal");

  const kpis = [
    { label: "Yield Médio", value: "12.4%", trend: "+0.8%", icon: "fa-chart-pie" },
    { label: "Valorização total", value: "45.2M Kz", trend: "+5.2%", icon: "fa-arrow-trend-up" },
    { label: "Taxa de Ocupação", value: "94%", trend: "Estável", icon: "fa-house-circle-check" },
  ];

  const documentos = [
    { id: 1, title: "Relatório de Rendimentos Trimestral", date: "Abril 2026", type: "PDF", size: "2.4 MB" },
    { id: 2, title: "Demonstrativo de Fluxo de Caixa", date: "Março 2026", type: "XLSX", size: "1.1 MB" },
    { id: 3, title: "Relatório de Avaliação Patrimonial", date: "Janeiro 2026", type: "PDF", size: "5.8 MB" },
    { id: 4, title: "Comprovante Anual de IR - Imóveis", date: "Ano Base 2025", type: "PDF", size: "850 KB" },
  ];

  return (
    <>
      <title>Relatórios e Performance | Imobi Premium</title>

      <InvestidorLayout title="Inteligência de Dados">
        <section className="space-y-10">
          
          {/* HEADER E SELETOR DE PERÍODO */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Performance de Carteira</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Relatórios Analíticos</h2>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
              {["Mensal", "Trimestral", "Anual"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p)}
                  className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                    periodo === p ? "bg-blue-950 text-white shadow-md" : "text-slate-400 hover:text-blue-950"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* CARDS DE KPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-blue-950/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-sky-700">
                    <i className={`fas ${kpi.icon} text-lg`}></i>
                  </div>
                  <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
                <p className="text-3xl font-black text-blue-950 italic tracking-tighter">{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* DASHBOARD PREVIEW (SIMULADO COM UI) */}
          <div className="bg-blue-950 rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-2xl font-black italic uppercase tracking-tighter">Composição do Patrimônio</h3>
                   <div className="space-y-4">
                      {[
                        { label: "Industrial", value: "60%", color: "bg-sky-500" },
                        { label: "Residencial", value: "25%", color: "bg-white" },
                        { label: "Lotes / Terrenos", value: "15%", color: "bg-sky-900" },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                           <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                              <span>{item.label}</span>
                              <span>{item.value}</span>
                           </div>
                           <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className={`h-full ${item.color}`} style={{ width: item.value }}></div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="hidden lg:flex justify-center italic">
                   <div className="text-center border-2 border-white/10 p-10 rounded-full w-64 h-64 flex flex-col justify-center items-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-sky-400">ROI Acumulado</p>
                      <p className="text-5xl font-black tracking-tighter">+18.4%</p>
                   </div>
                </div>
             </div>
             <i className="fas fa-chart-line absolute -bottom-10 -right-10 text-[15rem] text-white/5"></i>
          </div>

          {/* LISTA DE DOWNLOADS */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-blue-950 uppercase tracking-[0.3em] ml-1">Arquivos para Exportação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentos.map((doc) => (
                <div key={doc.id} className="group bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between hover:border-sky-700 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-sky-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sky-700 transition-colors">
                      <i className={`fas ${doc.type === 'PDF' ? 'fa-file-pdf' : 'fa-file-excel'} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black text-blue-950 uppercase tracking-tight leading-none mb-1">{doc.title}</h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{doc.date} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-950 hover:text-white transition-all">
                    <i className="fas fa-download text-xs"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>
      </InvestidorLayout>
    </>
  );
}
