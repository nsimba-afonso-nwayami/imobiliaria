import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProperties } from "../../services/propertyService";

import {
  propertyTypes,
  transactionTypes,
  formatPrice,
  getPropertyImage,
  getPropertyLocation,
  provinces,
  createSlug,
  formatArea,
  showBedrooms,
  showBathrooms,
} from "../../utils/propertyUtils";

export default function Imoveiss() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    property_type: "",
    transaction_type: "",
    province: "",
  });

  useEffect(() => {
    const carregarImoveis = async () => {
      try {
        const response = await getProperties();

        const dados = response.results || response;

        setImoveis(dados);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    carregarImoveis();
  }, []);

  const filteredProperties = imoveis.filter((property) => {
    return (
      (!filters.property_type ||
          property.property_type === filters.property_type) &&

        (!filters.transaction_type ||
          property.transaction_type === filters.transaction_type) &&

        (!filters.province ||
          property.province === filters.province)
    );
  });

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
    <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <p className="text-sky-700 font-bold uppercase tracking-[0.4em] text-[10px]">
                Portfólio Imobiliário
              </p>
            </div>

            <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              Todos os <span className="text-sky-700">Imóveis</span>
            </h1>

            <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
              Explore oportunidades exclusivas com alto potencial de valorização e segurança patrimonial em Luanda.
            </p>
          </div>
        </div>

        {/* Form de Busca */}
        <div className="bg-white rounded-4xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-neutral-100 mb-20">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Tipo de imóvel
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700" 
                value={filters.property_type}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    property_type: e.target.value,
                  })
                }
                >
                <option value="">Todos</option>
                {Object.entries(propertyTypes).map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Localização
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700"
                value={filters.province}
                onChange={(e)=>
                  setFilters({
                    ...filters,
                    province:e.target.value
                  })
                }
              >
                <option value="">Todas</option>
                {provinces.map((province)=>(
                  <option
                    key={province}
                    value={province}
                  >
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Tipo de negócio
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700"
                value={filters.transaction_type}
                onChange={(e)=>
                    setFilters({
                        ...filters,
                        transaction_type:e.target.value
                    })
                }
              >
                <option value="">Todos</option>
                {Object.entries(transactionTypes).map(([value,label])=>(
                    <option
                        key={value}
                        value={value}
                    >
                        {label}
                    </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-neutral-600">
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1
              ? "imóvel encontrado"
              : "imóveis encontrados"}
          </p>

          {(filters.property_type ||
            filters.transaction_type ||
            filters.province) && (
            <button
              type="button"
              onClick={() =>
                setFilters({
                  property_type: "",
                  transaction_type: "",
                  province: "",
                })
              }
              className="text-sm font-black uppercase tracking-wider text-sky-700 hover:text-blue-950 transition-colors cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-4xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] py-24 px-8 flex flex-col items-center justify-center text-center">

            <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
              <i className="fa-solid fa-magnifying-glass text-5xl text-sky-700"></i>
            </div>

            <h3 className="text-3xl font-black text-blue-950 mb-3">
              Nenhum imóvel encontrado
            </h3>

            <p className="text-neutral-500 max-w-lg leading-relaxed">
              Não encontrámos imóveis que correspondam aos filtros selecionados.
              Experimente alterar o tipo de imóvel, a localização ou o tipo de negócio.
            </p>

          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProperties.map((imovel) => (
                <article
                  key={imovel.id}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(2,6,23,0.12)] transition-all duration-700"
                >
                  {/* Imagem */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={getPropertyImage(imovel)}
                      alt={imovel.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {propertyTypes[imovel.property_type]}
                      </span>
                      <span className="bg-white text-blue-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow">
                        {transactionTypes[imovel.transaction_type]}
                    </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-blue-950/90 to-transparent">
                      <span className="text-white text-2xl font-black">
                        {formatPrice(imovel.price)}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8 flex flex-col grow">
                    <div className="mb-6">
                      <h3 className="text-blue-950 text-2xl font-black tracking-tight group-hover:text-sky-700 transition-colors mb-2">
                        {imovel.title}
                      </h3>

                      <div className="flex items-center gap-2 text-neutral-500">
                        <i className="fa-solid fa-location-dot text-sky-700 text-xs"></i>
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {getPropertyLocation(imovel)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-6 border-y border-neutral-100 mt-auto">
                      {showBedrooms(imovel.property_type) &&
                        Number(imovel.bedrooms)  > 0 && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-black text-neutral-400">
                            Quartos
                          </span>
                          <span className="text-sm font-black text-blue-950">
                            {imovel.bedrooms}
                          </span>
                        </div>
                      )}

                      {showBathrooms(imovel.property_type) &&
                        Number(imovel.bathrooms) > 0 && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-black text-neutral-400">
                            Suítes
                          </span>
                          <span className="text-sm font-black text-blue-950">
                            {imovel.bathrooms}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-black text-neutral-400">
                          Dimensão
                        </span>
                        <span className="text-sm font-black text-blue-950">
                          {formatArea(imovel.area_m2)}
                        </span>
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

            {/* Botão Ver Mais */}
            <div className="mt-20 flex justify-center">
              <button
                type="button"
                className="group relative inline-flex items-center gap-4 cursor-pointer bg-blue-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-sky-700 hover:-translate-y-1 shadow-2xl shadow-blue-950/20 overflow-hidden"
              >
                <span className="relative z-10">Ver Mais Imóveis</span>

                <i className="fa-solid fa-arrow-down relative z-10 text-[11px] group-hover:translate-y-1 transition-transform duration-500"></i>

                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
