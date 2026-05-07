import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Imagens (Estrutura mantida)
import imovel1 from "../../assets/img/Imovel1.jpg";
import imovel2 from "../../assets/img/Imovel2.jpg";
import imovel3 from "../../assets/img/Imovel3.jpg";
import imovel4 from "../../assets/img/Imovel4.jpg";
import imovel5 from "../../assets/img/Imovel5.jpg";
import imovel6 from "../../assets/img/Imovel6.jpg";

export default function OutrosImoveis() {
  const [imoveis] = useState([
    { id: 1, type: "Residencial", image: imovel1, title: "Penthouse de Luxo", price: "250M Kz", location: "Talatona, Luanda", bedrooms: 4, bathrooms: 5, area: "420m²" },
    { id: 2, type: "Terreno", image: imovel2, title: "Terreno Residencial Premium", price: "85M Kz", location: "Benfica, Luanda", area: "1.200m²" },
    { id: 3, type: "Terreno", image: imovel3, title: "Terreno Comercial Estratégico", price: "120M Kz", location: "Maianga, Luanda", area: "950m²" },
    { id: 4, type: "Residencial", image: imovel4, title: "Moradia Executiva", price: "320M Kz", location: "Kilamba, Luanda", bedrooms: 6, bathrooms: 6, area: "550m²" },
    { id: 5, type: "Residencial", image: imovel5, title: "Cobertura Exclusiva", price: "410M Kz", location: "Ilha de Luanda", bedrooms: 4, bathrooms: 5, area: "470m²" },
    { id: 6, type: "Terreno", image: imovel6, title: "Terreno para Investimento", price: "150M Kz", location: "Viana, Luanda", area: "2.500m²" },
  ]);

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header alinhado com o estilo Destaque */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px]">
                Mais oportunidades
              </p>
            </div>

            <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none">
              Outros imóveis
            </h2>
          </div>

          <Link
            to="/imoveis"
            className="group flex items-center gap-4 bg-neutral-50 px-8 py-4 rounded-xl border border-neutral-200 hover:border-sky-700 transition-all duration-500"
          >
            <span className="text-blue-950 font-black uppercase tracking-widest text-xs group-hover:text-sky-700">Explorar Tudo</span>
            <i className="fa-solid fa-arrow-right-long text-blue-950 group-hover:text-sky-700 group-hover:translate-x-1 transition-all"></i>
          </Link>
        </div>

        {/* Swiper com Cards Refinados */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20!"
          >
            {imoveis.map((imovel) => (
              <SwiperSlide key={imovel.id}>
                <article className="group bg-white rounded-4xl overflow-hidden border border-neutral-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(2,6,23,0.1)] transition-all duration-700 h-full flex flex-col">

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={imovel.image}
                      alt={imovel.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-blue-950 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/20">
                        {imovel.type}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-blue-950/80 to-transparent">
                      <span className="text-white font-black text-lg tracking-tight">
                        {imovel.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-blue-950 text-lg font-black leading-tight mb-3 group-hover:text-sky-700 transition-colors">
                      {imovel.title}
                    </h3>

                    <div className="flex items-center gap-2 text-neutral-400 mb-6">
                      <i className="fa-solid fa-location-dot text-sky-700 text-[10px]"></i>
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {imovel.location}
                      </span>
                    </div>

                    {/* Mini Specs Compactas */}
                    <div className="grid grid-cols-3 gap-1 pt-4 border-t border-neutral-50 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase font-bold text-neutral-400">Área</span>
                        <span className="text-[11px] font-black text-blue-950 truncate">{imovel.area}</span>
                      </div>
                      
                      {imovel.bedrooms && (
                        <div className="flex flex-col border-l border-neutral-50 pl-2">
                          <span className="text-[8px] uppercase font-bold text-neutral-400">Dorm.</span>
                          <span className="text-[11px] font-black text-blue-950">{imovel.bedrooms}</span>
                        </div>
                      )}

                      <div className="flex flex-col border-l border-neutral-50 pl-2">
                        <span className="text-[8px] uppercase font-bold text-neutral-400">Info</span>
                        <Link to="/imoveis/detalhes" className="text-sky-700 group/link">
                           <i className="fa-solid fa-plus text-[10px] group-hover/link:rotate-90 transition-transform"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bullets Style (Customizada para o tema claro) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          background: #020617 !important;
          opacity: 0.1;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #0369a1 !important;
          opacity: 1 !important;
          width: 20px;
          border-radius: 4px;
        }
      `}} />
    </section>
  );
}
