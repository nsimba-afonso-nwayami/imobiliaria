import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProperties } from "../../services/propertyService";
import {
  propertyTypes,
  transactionTypes,
  formatPrice,
  getPropertyImage,
  getPropertyLocation,
  formatArea,
  showBedrooms,
  showBathrooms,
  createSlug,
} from "../../utils/propertyUtils";

export default function Categoria() {
  const { tipo } = useParams();
  const [loading, setLoading] = useState(true);
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const response = await getProperties();

        const dados = response.results || response;

        const filtrados = dados.filter(
          (item) => item.property_type === tipo
        );

        setImoveis(filtrados);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    carregar();
  }, [tipo]);

  useEffect(() => {
    document.title =
        `${propertyTypes[tipo]} | Imobiliária`;
  }, [tipo]);

  if (loading) {
    return (
      <section className="py-32 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20">
          <i className="fa-solid fa-spinner animate-spin text-5xl text-sky-700 mb-6"></i>

          <h3 className="text-2xl font-black text-blue-950 mb-2">
            Carregando imóveis...
          </h3>

          <p className="text-neutral-500 max-w-md">
            Estamos a procurar os imóveis desta categoria.
            Aguarde alguns instantes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <title>Categoria | Imobiliária</title>

      <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <p className="text-sky-700 font-bold uppercase tracking-[0.4em] text-[10px]">
                  Categoria Selecionada
                </p>
              </div>

              <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                Imóveis <span className="text-sky-700">{propertyTypes[tipo]}</span>
              </h1>

              <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
                Explore todos os imóveis da categoria{" "}
                <strong>{propertyTypes[tipo]}</strong>, cuidadosamente selecionados para
                oferecer excelentes oportunidades de investimento e habitação.
              </p>
            </div>

            <Link
              to="/imoveis"
              className="group flex items-center gap-4 bg-white px-8 py-4 rounded-xl border border-neutral-200 shadow-sm hover:border-sky-700 transition-all duration-500"
            >
              <span className="text-blue-950 font-black uppercase tracking-widest text-xs">
                Voltar aos imóveis
              </span>

              <div className="w-10 h-10 rounded-full bg-blue-950 group-hover:bg-sky-700 flex items-center justify-center text-white transition-colors">
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
            </Link>
          </div>

          {/* Barra informativa */}
          <div className="bg-white rounded-4xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-neutral-100 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  Categoria
                </p>
                <h3 className="text-blue-950 text-xl font-black">
                  {propertyTypes[tipo]}
                </h3>
              </div>

              <div>
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  Quantidade
                </p>
                <h3 className="text-blue-950 text-xl font-black">
                  {imoveis.length} imóveis disponíveis
                </h3>
              </div>

              <div>
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  Perfil
                </p>
                <h3 className="text-blue-950 text-xl font-black">
                  Investimento & Habitação
                </h3>
              </div>
            </div>
          </div>

          {imoveis.length === 0 ? (
            <div className="bg-white rounded-4xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] py-24 px-8 flex flex-col items-center justify-center text-center">

              <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                <i className="fa-regular fa-building text-5xl text-sky-700"></i>
              </div>

              <h3 className="text-3xl font-black text-blue-950 mb-3">
                Nenhum imóvel encontrado
              </h3>

              <p className="text-neutral-500 max-w-lg leading-relaxed">
                Não existem imóveis cadastrados na categoria{" "}
                <strong>{propertyTypes[tipo]}</strong>.
                Volte mais tarde ou explore outras categorias.
              </p>

              <Link
                to="/imoveis"
                className="mt-8 inline-flex items-center gap-3 bg-blue-950 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300"
              >
                Ver todos os imóveis
              </Link>

            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {imoveis.map((imovel) => (
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

                      <div className="absolute top-6 left-6">
                        <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {propertyTypes[imovel.property_type] || imovel.property_type}
                        </span>
                        <span className="bg-white text-blue-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow">
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

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-2 py-6 border-y border-neutral-100 mt-auto">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-black text-neutral-400">
                            Quartos
                          </span>
                          <span className="text-sm font-black text-blue-950">
                            {showBedrooms(imovel.property_type)
                              ? imovel.bedrooms
                              : "--"}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase font-black text-neutral-400">
                            Banheiros
                          </span>
                          <span className="text-sm font-black text-blue-950">
                            {showBathrooms(imovel.property_type)
                              ? imovel.bathrooms
                              : "--"}
                          </span>
                        </div>

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

              {/* Botão Final - Ver Mais */}
              <div className="mt-20 flex justify-center">
                  <button
                      type="button"
                      className="group relative inline-flex items-center gap-4 cursor-pointer bg-blue-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-sky-700 hover:-translate-y-1 shadow-2xl shadow-blue-950/20 overflow-hidden"
                  >
                      <span className="relative z-10">Ver Mais Imóveis</span>

                      <i className="fa-solid fa-arrow-down relative z-10 text-[11px] group-hover:translate-y-1 transition-transform duration-500"></i>

                      {/* Shine Effect */}
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
                  </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
