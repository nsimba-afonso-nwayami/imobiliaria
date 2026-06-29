import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProperties } from "../../services/propertyService";
import {
  formatPrice,
  propertyTypes,
  transactionTypes,
  getPropertyImage,
  getPropertyLocation,
  createSlug,
  formatArea,
  showBedrooms,
  showBathrooms,
} from "../../utils/propertyUtils";

export default function ImoveisDestaque() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarImoveis = async () => {
      try {
        const response = await getProperties();

        // Caso a API devolva paginação
        const dados = response.results || response;

        setImoveis(dados.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    carregarImoveis();
  }, []);

  if (loading) {
    return (
      <section className="py-32 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20">
          <i className="fa-solid fa-spinner animate-spin text-5xl text-sky-700 mb-6"></i>

          <h3 className="text-2xl font-black text-blue-950 mb-2">
            Carregando imóveis...
          </h3>

          <p className="text-neutral-500 max-w-md">
            Estamos a procurar os melhores imóveis para si. Aguarde alguns
            instantes.
          </p>
        </div>
      </section>
    );
  }

  if (!imoveis.length) {
    return (
      <section className="py-32 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20">

          <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
            <i className="fa-regular fa-building text-5xl text-sky-700"></i>
          </div>

          <h3 className="text-3xl font-black text-blue-950 mb-3">
            Nenhum imóvel disponível
          </h3>

          <p className="text-neutral-500 max-w-lg leading-relaxed">
            Neste momento ainda não existem imóveis em destaque.
            Volte mais tarde para descobrir novas oportunidades de investimento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header com Design Assométrico */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <p className="text-sky-700 font-bold uppercase tracking-[0.4em] text-[10px]">
                Oportunidades de Investimento
              </p>
            </div>
            <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              Imóveis em <span className="text-sky-700">Destaque</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
              Curadoria rigorosa de ativos imobiliários que definem o novo padrão de luxo e rentabilidade em Luanda.
            </p>
          </div>
          
          <Link to="/imoveis" className="group flex items-center gap-4 bg-white px-8 py-4 rounded-xl border border-neutral-200 shadow-sm hover:border-sky-700 transition-all duration-500">
            <span className="text-blue-950 font-black uppercase tracking-widest text-xs">Explorar Tudo</span>
            <div className="w-10 h-10 rounded-full bg-blue-950 group-hover:bg-sky-700 flex items-center justify-center text-white transition-colors">
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
            </div>
          </Link>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {imoveis.map((imovel) => (
            <article
              key={imovel.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(2,6,23,0.12)] transition-all duration-700"
            >
              {/* Media Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={getPropertyImage(imovel)}
                  alt={imovel.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Badges Flutuantes */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {propertyTypes[imovel.property_type] || imovel.property_type}
                  </span>
                  <span className="bg-white text-blue-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow">
                    {transactionTypes[imovel.transaction_type]}
                  </span>
                  {imovel.is_sponsored && (
                    <span className="bg-blue-950 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                      Exclusivo
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-blue-950/90 to-transparent">
                  <span className="text-white text-2xl font-black"> {formatPrice(imovel.price)}</span>
                </div>
              </div>

              {/* Detalhes do Conteúdo */}
              <div className="p-8 flex flex-col grow">
                <div className="mb-6">
                  <h3 className="text-blue-950 text-2xl font-black tracking-tight group-hover:text-sky-700 transition-colors mb-2">
                    {imovel.title}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <i className="fa-solid fa-location-dot text-sky-700 text-xs"></i>
                    <span className="text-xs font-bold uppercase tracking-wider">{getPropertyLocation(imovel)}</span>
                  </div>
                </div>

                {/* Specs Inteligentes (Oculta se for Terreno) */}
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-neutral-100 mt-auto">
                  {showBedrooms(imovel.property_type) && Number(imovel.bedrooms) >  0 && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400 tracking-tighter">Quartos</span>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bed text-blue-950 text-xs"></i>
                        <span className="text-sm font-black text-blue-950">{imovel.bedrooms}</span>
                      </div>
                    </div>
                  )}
                  
                  {showBathrooms(imovel.property_type) && Number(imovel.bathrooms) > 0 && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400 tracking-tighter">Suítes</span>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bath text-blue-950 text-xs"></i>
                        <span className="text-sm font-black text-blue-950">{imovel.bathrooms}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-black text-neutral-400 tracking-tighter">Dimensão</span>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-vector-square text-blue-950 text-xs"></i>
                      <span className="text-sm font-black text-blue-950">{formatArea(imovel.area_m2)}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/imoveis/${createSlug(imovel.title)}`}
                  className="mt-8 flex items-center justify-between group/link"
                >
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-950 group-hover/link:text-sky-700 transition-colors">
                    Detalhes do Ativo
                  </span>
                  <div className="w-8 h-0.5 bg-neutral-200 group-hover/link:w-12 group-hover/link:bg-sky-700 transition-all duration-500"></div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
