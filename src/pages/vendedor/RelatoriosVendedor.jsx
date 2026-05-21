import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from "recharts";

export default function RelatoriosVendedor() {
  const [periodo, setPeriodo] = useState("Mensal");

  const kpis = [
    { label: "Interesse do Mercado", value: "2.4K vistas", trend: "+15%", icon: "fa-eye" },
    { label: "Propostas Ativas", value: "08 Recebidas", trend: "+2 novas", icon: "fa-comments-dollar" },
    { label: "Eficiência de Visita", value: "65%", trend: "Conversão", icon: "fa-person-walking-arrow-right" },
  ];

  // Mock Data para o Gráfico de Área (Evolução no Tempo)
  const dataEvolucao = [
    { name: "Sem 1", vistas: 400, propostas: 1 },
    { name: "Sem 2", vistas: 800, propostas: 3 },
    { name: "Sem 3", vistas: 650, propostas: 2 },
    { name: "Sem 4", vistas: 1100, propostas: 5 },
  ];

  // Mock Data para o Gráfico de Barras (Funil de Conversão)
  const dataFunil = [
    { name: "Vivenda Talatona", visitas: 15, propostas: 4, fechadas: 1 },
    { name: "Apto Kilamba", visitas: 28, propostas: 7, fechadas: 0 },
    { name: "Terreno Benfica", visitas: 10, propostas: 2, fechadas: 0 },
  ];

  return (
    <>
      <title>Relatórios de Venda | Imobi Premium</title>

      <VendedorLayout title="Inteligência de Vendas">
        <section className="space-y-10">
          
          {/* HEADER E SELETOR DE PERÍODO */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">Performance dos Anúncios</p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">Análise de Mercado</h2>
            </div>

            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-300 shadow-sm">
              {["Mensal", "Trimestral", "Anual"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p)}
                  className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                    periodo === p ? "bg-blue-950 text-slate-50 shadow-md" : "text-slate-500 hover:text-blue-950"
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
              <div key={idx} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-300 shadow-sm hover:shadow-xl hover:shadow-blue-950/5 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-slate-50 group-hover:bg-sky-700 transition-colors">
                    <i className={`fas ${kpi.icon} text-lg`}></i>
                  </div>
                  <span className="text-[9px] font-black text-sky-700 bg-sky-50 px-3 py-1 rounded-full uppercase border border-sky-100">
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{kpi.label}</p>
                <p className="text-3xl font-black text-blue-950 italic tracking-tighter">{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* ÁREA DE GRÁFICOS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            
            {/* GRÁFICO 1: EVOLUÇÃO DE VISTAS */}
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-300 shadow-sm">
              <div className="mb-8">
                <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter">Evolução de Vistas vs Propostas</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tráfego orgânico nos seus anúncios</p>
              </div>
              <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataEvolucao} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorVistas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cbd5e1" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} />
                    <RechartsTooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: '#172554', color: '#f8fafc' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                      labelStyle={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}
                    />
                    <Area type="monotone" dataKey="vistas" stroke="#0369a1" strokeWidth={3} fillOpacity={1} fill="url(#colorVistas)" name="Vistas no Anúncio" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* GRÁFICO 2: FUNIL DE CONVERSÃO POR IMÓVEL */}
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-300 shadow-sm">
              <div className="mb-8">
                <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter">Desempenho por Imóvel</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Comparativo de visitas físicas e propostas</p>
              </div>
              <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataFunil} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={12}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cbd5e1" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} />
                    <RechartsTooltip 
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: '#1e3a8a', color: '#f8fafc' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#64748b', paddingTop: '20px' }} iconType="circle" />
                    <Bar dataKey="visitas" name="Visitas Físicas" fill="#bae6fd" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="propostas" name="Propostas Recebidas" fill="#0284c7" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </section>
      </VendedorLayout>
    </>
  );
}