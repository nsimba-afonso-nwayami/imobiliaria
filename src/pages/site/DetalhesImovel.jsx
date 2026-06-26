import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { getProperties } from "../../services/propertyService";
import {
  propertyTypes,
  transactionTypes,
  formatPrice,
  getPropertyImage,
  getPropertyVideo,
  hasPropertyVideo,
  getPropertyLocation,
  createSlug,
  formatArea,
  showBedrooms,
  showBathrooms,
  showParking,
} from "../../utils/propertyUtils";

export default function DetalhesImovel() {
  const { slug } = useParams();
  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);

  const carregarImovel = async () => {
    const response = await getProperties();

    const dados = response.results || response;

    const imovel = dados.find((item) => createSlug(item.title) === slug);

    setImovel(imovel);
  };

  useEffect(() => {
    const carregarImovel = async () => {
      try {
        const response = await getProperties();

        const dados = response.results || response;

        const encontrado = dados.find(
          (item) => createSlug(item.title) === slug
        );

        setImovel(encontrado || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    carregarImovel();
  }, [slug]);

  useEffect(() => {
    if (imovel) {
        document.title = `${imovel.title} | Imobiliária`;
    }
  }, [imovel]);

  if (loading) {
    return (
      <section className="py-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <i className="fa-solid fa-spinner animate-spin text-5xl text-sky-700 mb-6"></i>

          <h2 className="text-3xl font-black text-blue-950">
            Carregando imóvel...
          </h2>
        </div>
      </section>
    );
  }

  if (!imovel) {
    return (
      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-house-circle-xmark text-5xl text-sky-700"></i>
          </div>

          <h2 className="text-4xl font-black text-blue-950 mb-4">
            Imóvel não encontrado
          </h2>

          <p className="text-neutral-500 mb-8">
            O imóvel que procura já não existe ou foi removido.
          </p>

          <Link
            to="/imoveis"
            className="inline-flex items-center gap-3 bg-blue-950 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-sky-700 transition"
          >
            Voltar aos imóveis
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <title>Detalhes | Imobiliária</title>
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Background Decorativo Industrial */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[36px_36px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Topo Informativo */}
          <div className="mb-16">
            <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              Detalhes do Imóvel
            </p>

            <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              {imovel.title}
            </h1>

            <div className="flex items-center gap-3 text-neutral-500">
              <i className="fa-solid fa-location-dot text-sky-700"></i>
              <span className="font-bold uppercase tracking-widest text-xs">
                {getPropertyLocation(imovel)}
              </span>
            </div>
          </div>

          {/* Layout Principal - Grid 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Coluna da Esquerda: Galeria e Média */}
            <div className="space-y-8">
              {/* Swiper de Imagens com Grab Cursor */}
              <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(2,6,23,0.1)] border border-neutral-100">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  grabCursor={true} // Adicionado conforme solicitado
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full"
                >
                  {imovel.images.map((img) => (
                    <SwiperSlide key={img.id}>
                        <img
                            src={img.image}
                            alt={imovel.title}
                            className="w-full h-137.5 object-cover"
                        />
                    </SwiperSlide>
                ))}
                </Swiper>
              </div>

              {/* Vídeo de Apresentação */}
              {hasPropertyVideo(imovel) && (
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.05)] border border-neutral-100 bg-black">

                    <video
                        controls
                        className="w-full h-105 object-cover"
                    >
                        <source
                            src={getPropertyVideo(imovel)}
                            type="video/mp4"
                        />
                    </video>

                </div>
              )}
            </div>

            {/* Coluna da Direita: Informações Fixas no Scroll */}
            <div className="lg:sticky lg:top-32">
              {/* Preço e Status */}
              <div className="mb-10 p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-neutral-400 uppercase text-[10px] font-black tracking-widest">
                  Valor de Avaliação
                </span>

                <h2 className="text-blue-950 text-5xl font-black tracking-tight mt-2">
                  {formatPrice(imovel.price)}
                </h2>

                <div className="mt-4 inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {transactionTypes[imovel.transaction_type]}
                  </span>
                </div>
              </div>

              {/* Descrição Narrativa */}
              <div className="border-y border-neutral-100 py-10 space-y-6">
                <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
                  {imovel.description}
                </p>
              </div>

              {/* Especificações Técnicas Grid */}
              <div className="grid grid-cols-2 gap-8 py-10">
                {showBedrooms(imovel.property_type) && (
                    <div>
                        <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                            Quartos
                        </span>

                        <p className="text-blue-950 text-2xl font-black">
                            {imovel.bedrooms || "--"}
                        </p>
                    </div>
                )}

                {showBathrooms(imovel.property_type) && (
                    <div>
                        <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                            Casas de banho
                        </span>

                        <p className="text-blue-950 text-2xl font-black">
                            {imovel.bathrooms || "--"}
                        </p>
                    </div>
                )}

                {showParking(imovel.property_type) && (
                    <div>
                        <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                            Garagem
                        </span>

                        <p className="text-blue-950 text-2xl font-black">
                            {imovel.parking_spaces || "--"}
                        </p>
                    </div>
                )}

                <div>
                    <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                        Área
                    </span>

                    <p className="text-blue-950 text-2xl font-black">
                        {formatArea(imovel.area_m2)}
                    </p>
                </div>

                <div>
                    <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                        Tipo
                    </span>

                    <p className="text-blue-950 text-2xl font-black">
                        {propertyTypes[imovel.property_type]}
                    </p>
                </div>

                <div>
                    <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest">
                        Negócio
                    </span>

                    <p className="text-blue-950 text-2xl font-black">
                        {transactionTypes[imovel.transaction_type]}
                    </p>
                </div>

            </div>

              {/* Ações de Conversão */}
              <div className="space-y-4 pt-6">
                <button
                  type="button"
                  className="w-full h-20 cursor-pointer bg-blue-950 hover:bg-sky-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl shadow-blue-950/20 active:scale-[0.98]"
                >
                  Manifestar Interesse
                </button>

                <Link
                  to="/contato"
                  className="w-full h-20 border-2 border-neutral-100 rounded-2xl flex items-center justify-center font-black uppercase tracking-[0.2em] text-xs text-blue-950 hover:border-sky-700 hover:text-sky-700 transition-all duration-500"
                >
                  Agendar Visita Privada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
