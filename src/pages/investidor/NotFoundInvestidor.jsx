import { Link } from "react-router-dom";
import InvestidorLayout from "./components/InvestidorLayout";

export default function NotFoundInvestidor() {
  return (
    <>
      <InvestidorLayout title="Erro de Sistema">
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          
          {/* Elemento Visual de Impacto */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[180px] font-black text-neutral-100 leading-none select-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-triangle-exclamation text-blue-900 text-4xl md:text-6xl animate-pulse"></i>
            </div>
          </div>

          {/* Texto de Erro */}
          <div className="max-w-md space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-neutral-700 uppercase tracking-[0.2em] italic">
              Acesso Não Mapeado
            </h2>
            
            <div className="h-0.5 w-20 bg-blue-800 mx-auto"></div>
            
            <p className="text-[11px] md:text-xs font-bold text-neutral-500 uppercase leading-relaxed tracking-widest px-6">
              O módulo que está a tentar aceder não existe no diretório atual ou foi movido para uma nova coordenada técnica.
            </p>
          </div>

          {/* Ação de Recuperação - Links do React Router */}
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <Link 
              to="/dashboard/investidor/"
              className="h-14 px-10 bg-blue-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-800 transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <i className="fa-solid fa-house-chimney text-sm"></i>
              Voltar ao Dashboard
            </Link>
            
            <Link 
              to="/contato"
              className="h-14 px-10 bg-neutral-100 text-neutral-700 border border-neutral-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <i className="fa-solid fa-headset text-sm"></i>
              Reportar Falha
            </Link>
          </div>

          {/* Rodapé Técnico */}
          <div className="mt-16 flex items-center gap-3 text-neutral-300">
            <span className="w-12 h-px bg-neutral-300"></span>
            <p className="text-[8px] font-black uppercase tracking-[0.5em] italic">
              Imobi Premium • Core Engine v2.0
            </p>
            <span className="w-12 h-px bg-neutral-300"></span>
          </div>

        </section>
      </InvestidorLayout>
    </>
  );
}

