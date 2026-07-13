import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../../assets/img/review1.jpeg";
import review2 from "../../assets/img/review2.jpg";
import review3 from "../../assets/img/review3.jpeg";

export default function Depoimentos() {
  const depoimentos = [
    {
      name: "Carlos Mendes",
      role: "Investidor Imobiliário",
      image: review1,
      text:
        "A ImobiPremium mudou completamente a forma como invisto em imóveis. Segurança total e acompanhamento impecável do início ao fim.",
    },
    {
      name: "Ana João",
      role: "Empresária",
      image: review2,
      text:
        "Atendimento extremamente profissional. Consegui encontrar um imóvel perfeito para a minha empresa com total transparência.",
    },
    {
      name: "Miguel Santos",
      role: "Engenheiro Civil",
      image: review3,
      text:
        "Nunca tive tanta confiança numa imobiliária. O nível de detalhe e suporte é realmente acima da média em Angola.",
    },
    {
      name: "João Pedro",
      role: "Empresário",
      image: review1,
      text:
        "Processo rápido, claro e sem complicações. Senti-me acompanhado em cada etapa da compra do imóvel.",
    },
    {
      name: "Sofia Almeida",
      role: "Gestora Financeira",
      image: review2,
      text:
        "Excelente curadoria de imóveis. Só me foram apresentados ativos realmente alinhados com o meu perfil de investimento.",
    },
    {
      name: "Rui Domingos",
      role: "Investidor Privado",
      image: review3,
      text:
        "A confiança que a equipa transmite é diferenciada. Hoje já tenho mais de um imóvel adquirido com eles.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-blue-950 relative overflow-hidden">
      
      {/* Glow de Profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-sky-700/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header: Seu Conteúdo Original */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            O que os nossos clientes dizem
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-relaxed italic">
            Confiança construída através de resultados reais e experiências premium.
          </p>
        </div>

        {/* Swiper Customizado */}
        <div className="pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="overflow-visible!"
          >
            {depoimentos.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-blue-900/30 border border-white/5 backdrop-blur-sm rounded-4xl p-10 h-full flex flex-col justify-between group hover:bg-blue-900/50 hover:border-sky-700/30 transition-all duration-700">
                  
                  <div>
                    {/* Estrelas e Aspas */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1 text-sky-500 text-[10px]">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="text-sky-700/30 text-4xl group-hover:text-sky-700 transition-colors duration-500">
                        <i className="fa-solid fa-quote-right"></i>
                      </div>
                    </div>

                    {/* Texto: Seu Conteúdo Original */}
                    <p className="text-slate-200 text-lg leading-relaxed mb-10 font-medium">
                      "{item.text}"
                    </p>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-sky-700 transition-all duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-700 rounded-full flex items-center justify-center text-[8px] text-white">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-black tracking-tight text-base">
                        {item.name}
                      </h4>
                      <span className="text-sky-700 text-[10px] uppercase font-black tracking-widest">
                        {item.role}
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Bullets Customizadas para Dark Mode */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.1) !important;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-pagination-bullet-active {
          background: #0369a1 !important;
          width: 32px;
          border-radius: 4px;
        }
        .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
          transform: translateX(-50%);
          white-space: nowrap;
        }
      `}} />
    </section>
  );
}
