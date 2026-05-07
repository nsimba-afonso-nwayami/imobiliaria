import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import imagem1 from "../../assets/img/Imovel1.jpg";
import imagem2 from "../../assets/img/Imovel2.jpg";
import imagem3 from "../../assets/img/Imovel3.jpg";

import VudeoDetalhe from "../../assets/videos/detalhes.mp4";

export default function DetalhesImovel() {
  const imagens = [imagem1, imagem2, imagem3];

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
              Penthouse de <span className="text-sky-700">Luxo</span>
            </h1>

            <div className="flex items-center gap-3 text-neutral-500">
              <i className="fa-solid fa-location-dot text-sky-700"></i>
              <span className="font-bold uppercase tracking-widest text-xs">
                Talatona, Luanda
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
                  {imagens.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Ambiente ${index + 1}`}
                        className="w-full h-137.5 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Vídeo de Apresentação */}
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.05)] border border-neutral-100 bg-black">
                <video
                  controls
                  className="w-full h-105 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                >
                  <source src={VudeoDetalhe} type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>

            {/* Coluna da Direita: Informações Fixas no Scroll */}
            <div className="lg:sticky lg:top-32">

              {/* Preço e Status */}
              <div className="mb-10 p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-neutral-400 uppercase text-[10px] font-black tracking-widest">
                  Valor de Avaliação
                </span>

                <h2 className="text-blue-950 text-5xl font-black tracking-tight mt-2">
                  250M Kz
                </h2>
                
                <div className="mt-4 inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                   <span className="text-[10px] font-black uppercase tracking-widest">Disponível para Aquisição</span>
                </div>
              </div>

              {/* Descrição Narrativa */}
              <div className="border-y border-neutral-100 py-10 space-y-6">
                <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
                  Esta penthouse exclusiva oferece um padrão elevado de conforto,
                  sofisticação e valorização patrimonial.
                </p>

                <p className="text-neutral-500 leading-relaxed">
                  Localizada em uma das zonas mais nobres de Luanda, reúne arquitetura contemporânea,
                  acabamentos premium e excelente potencial de investimento. Com ampla sala panorâmica, 
                  suítes espaçosas e varanda gourmet.
                </p>
              </div>

              {/* Especificações Técnicas Grid */}
              <div className="grid grid-cols-2 gap-8 py-10">
                <div className="group">
                  <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest group-hover:text-sky-700 transition-colors">
                    Dormitórios
                  </span>
                  <p className="text-blue-950 text-2xl font-black">04 Quartos</p>
                </div>

                <div className="group">
                  <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest group-hover:text-sky-700 transition-colors">
                    Banheiros
                  </span>
                  <p className="text-blue-950 text-2xl font-black">05 Suítes</p>
                </div>

                <div className="group">
                  <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest group-hover:text-sky-700 transition-colors">
                    Área Útil
                  </span>
                  <p className="text-blue-950 text-2xl font-black">420m²</p>
                </div>

                <div className="group">
                  <span className="text-neutral-400 text-[10px] uppercase font-black tracking-widest group-hover:text-sky-700 transition-colors">
                    Tipologia
                  </span>
                  <p className="text-blue-950 text-2xl font-black">Penthouse</p>
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
