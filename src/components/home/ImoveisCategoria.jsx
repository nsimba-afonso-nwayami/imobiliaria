import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import cat1 from "../../assets/img/imovel1.jpg";
import cat2 from "../../assets/img/imovel2.jpg";
import cat3 from "../../assets/img/imovel3.jpg";
import cat4 from "../../assets/img/imovel4.jpg";
import cat5 from "../../assets/img/imovel5.jpg";
import cat6 from "../../assets/img/imovel6.jpg";

export default function ImoveisCategoria() {
  const categorias = [
    { name: "Apartamentos", image: cat1, path: "/imoveis/categoria/" },
    { name: "Vivendas", image: cat2, path: "/imoveis/categoria/" },
    { name: "Escritórios", image: cat3, path: "/imoveis/categoria/" },
    { name: "Terrenos", image: cat4, path: "/imoveis/categoria/" },
    { name: "Comerciais", image: cat5, path: "/imoveis/categoria/" },
    { name: "Luxo", image: cat6, path: "/imoveis/categoria/" },
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header: Mantendo seu Texto Original */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px]">
                Explorar por categoria
              </p>
            </div>

            <h2 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none">
              Tipos de imóveis
            </h2>
          </div>

          {/* Navegação Customizada (CSS abaixo) */}
          <div className="flex gap-3 pb-2">
            <button className="swiper-prev-btn cursor-pointer w-14 h-14 rounded-xl border border-neutral-200 flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-500 shadow-sm">
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button className="swiper-next-btn cursor-pointer w-14 h-14 rounded-xl border border-neutral-200 flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-500 shadow-sm">
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>

        {/* Swiper Customizado */}
        <div className="relative group/swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev-btn",
              nextEl: ".swiper-next-btn",
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20!" // Espaço para as bullets
          >
            {categorias.map((cat, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={cat.path}
                  className="group relative block rounded-[2.5rem] overflow-hidden h-112.5 transition-all duration-700"
                >
                  {/* Image com Zoom Industrial */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />

                  {/* Overlay Gradiente Profundo */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Detalhe de Borda Interna no Hover */}
                  <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 rounded-[1.8rem] transition-all duration-700 pointer-events-none"></div>

                  {/* Content: Mantendo seu Texto Original */}
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <div className="overflow-hidden mb-2">
                      <h3 className="text-white text-3xl font-black tracking-tight translate-y-0 transition-transform duration-500">
                        {cat.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="text-sky-400 text-xs font-black uppercase tracking-[0.2em] -translate-x-full group-hover:translate-x-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        Explorar
                      </span>
                      <div className="w-0 h-px bg-sky-400 group-hover:w-8 transition-all duration-700 delay-100"></div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Estilos Adicionais para as Bullets do Swiper */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          width: 12px;
          height: 6px;
          border-radius: 4px;
          background: #020617 !important;
          transition: all 0.3s;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          opacity: 1 !important;
          background: #0369a1 !important;
        }
      `}} />
    </section>
  );
}
