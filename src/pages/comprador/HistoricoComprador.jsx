import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";

export default function HistoricoComprador() {
  const [searchTerm, setSearchTerm] = useState("");

  const [registros] = useState([
    {
      id: "DOC-5520",
      data: "12 Abr 2026",
      evento: "Escritura Assinada",
      ativo: "Penthouse de Luxo - Talatona",
      valor: "450.000.000 Kz",
      status: "Finalizado",
      tipo: "Compra",
    },
    {
      id: "VIS-4412",
      data: "28 Mar 2026",
      evento: "Visita Realizada",
      ativo: "Moradia T5 - Kilamba",
      valor: "---",
      status: "Concluído",
      tipo: "Visita",
    },
    {
      id: "PRP-3390",
      data: "15 Mar 2026",
      evento: "Proposta não Aceite",
      ativo: "Apartamento T2 - Centralidade",
      valor: "42.000.000 Kz",
      status: "Encerrado",
      tipo: "Proposta",
    },
    {
      id: "DOC-2215",
      data: "05 Mar 2026",
      evento: "Contrato de Promessa",
      ativo: "Terreno Condomínio - Viana",
      valor: "25.500.000 Kz",
      status: "Finalizado",
      tipo: "Documentação",
    }
  ]);

  const filteredRegistros = registros.filter(reg => 
    reg.ativo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    reg.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <title>Meu Histórico de Compra | Imobi Premium</title>

      <CompradorLayout title="Linha do Tempo">
        <section className="space-y-8">
          
          {/* Cabeçalho focado no Cliente */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
                Minha Jornada Imobiliária
              </p>
              <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
                Histórico de Atividade
              </h2>
            </div>

            <div className="relative flex-1 max-w-md w-full">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-[10px]"></i>
              <input 
                type="text" 
                placeholder="PROCURAR POR IMÓVEL OU DATA..."
                className="w-full h-12 pl-10 pr-4 bg-neutral-100 border border-neutral-400 rounded-xl text-[10px] font-black tracking-widest outline-none focus:border-blue-800 transition-all uppercase"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Lista de Atividades em Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRegistros.map((reg) => (
              <div 
                key={reg.id}
                className="bg-neutral-50 border border-neutral-400 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-blue-800 transition-all duration-300 relative overflow-hidden"
              >
                {/* Indicador Visual de Conclusão */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  reg.status === 'Finalizado' || reg.status === 'Concluído' ? 'bg-green-600' : 'bg-neutral-300'
                }`}></div>

                {/* Bloco de Data */}
                <div className="shrink-0 text-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-2xl border border-neutral-400 border-opacity-30 flex flex-col items-center justify-center">
                    <p className="text-[14px] font-black text-neutral-700 leading-none">{reg.data.split(' ')[0]}</p>
                    <p className="text-[8px] font-black text-neutral-400 uppercase">{reg.data.split(' ')[1]}</p>
                  </div>
                </div>

                {/* Informações da Etapa */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black text-blue-800 uppercase tracking-widest">{reg.id}</span>
                    <span className="text-[8px] font-black text-neutral-400 uppercase">•</span>
                    <span className="text-[8px] font-black text-neutral-500 uppercase tracking-widest">{reg.tipo}</span>
                  </div>
                  <h3 className="text-base font-black text-neutral-700 tracking-tight uppercase">
                    {reg.evento}
                  </h3>
                  <p className="text-[11px] font-bold text-neutral-500 italic">{reg.ativo}</p>
                </div>

                {/* Valor e Download */}
                <div className="w-full md:w-auto text-left md:text-right flex md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-t-0 md:border-l border-neutral-400 border-opacity-20 pt-4 md:pt-0 md:pl-6">
                  <div>
                    <p className="text-[8px] font-black text-neutral-400 uppercase mb-0.5">Valor do Negócio</p>
                    <p className="text-sm font-black text-neutral-700 tracking-tight">{reg.valor}</p>
                  </div>
                  <button className="w-10 h-10 bg-neutral-100 border border-neutral-400 rounded-xl flex items-center justify-center text-neutral-700 hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
                    <i className="fa-solid fa-file-contract text-xs"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cards de Resumo da Conta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-neutral-100 border border-neutral-400 rounded-3xl">
              <p className="text-[9px] font-black text-neutral-400 uppercase mb-2">Imóveis Visitados</p>
              <h4 className="text-2xl font-black text-neutral-700 italic">12 Unidades</h4>
            </div>
            <div className="p-6 bg-neutral-100 border border-neutral-400 rounded-3xl">
              <p className="text-[9px] font-black text-neutral-400 uppercase mb-2">Propostas Enviadas</p>
              <h4 className="text-2xl font-black text-neutral-700 italic">03 Submissões</h4>
            </div>
            <div className="p-6 bg-blue-900 border border-blue-900 rounded-3xl group">
              <p className="text-[9px] font-black text-neutral-50/60 uppercase mb-2">Status da Conta</p>
              <h4 className="text-2xl font-black text-neutral-50 italic uppercase tracking-tighter group-hover:scale-105 transition-transform origin-left">Cliente Verificado</h4>
            </div>
          </div>

        </section>
      </CompradorLayout>
    </>
  );
}
