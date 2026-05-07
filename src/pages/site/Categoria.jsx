import { useState } from "react";
import { Link } from "react-router-dom";

// Imports das imagens
import imovel1 from "../../assets/img/Imovel1.jpg";
import imovel2 from "../../assets/img/Imovel2.jpg";
import imovel3 from "../../assets/img/Imovel3.jpg";
import imovel4 from "../../assets/img/Imovel4.jpg";
import imovel5 from "../../assets/img/Imovel5.jpg";
import imovel6 from "../../assets/img/Imovel6.jpg";

export default function Categoria() {
  const [imoveis] = useState([
    {
      id: 1,
      type: "Residencial",
      image: imovel1,
      title: "Penthouse de Luxo",
      price: "250M Kz",
      location: "Talatona, Luanda",
      bedrooms: 4,
      bathrooms: 5,
      area: "420m²",
    },
    {
      id: 2,
      type: "Residencial",
      image: imovel4,
      title: "Moradia Executiva",
      price: "320M Kz",
      location: "Kilamba, Luanda",
      bedrooms: 6,
      bathrooms: 6,
      area: "550m²",
    },
    {
      id: 3,
      type: "Residencial",
      image: imovel5,
      title: "Cobertura Exclusiva",
      price: "410M Kz",
      location: "Ilha de Luanda",
      bedrooms: 4,
      bathrooms: 5,
      area: "470m²",
    },
    {
      id: 4,
      type: "Residencial",
      image: imovel2,
      title: "Apartamento Premium",
      price: "180M Kz",
      location: "Benfica, Luanda",
      bedrooms: 3,
      bathrooms: 4,
      area: "310m²",
    },
    {
      id: 5,
      type: "Residencial",
      image: imovel3,
      title: "Villa Contemporânea",
      price: "290M Kz",
      location: "Maianga, Luanda",
      bedrooms: 5,
      bathrooms: 5,
      area: "490m²",
    },
    {
      id: 6,
      type: "Residencial",
      image: imovel6,
      title: "Residência de Alto Padrão",
      price: "360M Kz",
      location: "Viana, Luanda",
      bedrooms: 5,
      bathrooms: 6,
      area: "600m²",
    },
  ]);

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
                Imóveis <span className="text-sky-700">Residenciais</span>
              </h1>

              <p className="text-neutral-600 text-lg leading-relaxed italic border-l-4 border-sky-700 pl-6">
                Seleção exclusiva de residências premium com localização
                estratégica, conforto superior e alto potencial de valorização.
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
                  Residencial Premium
                </h3>
              </div>

              <div>
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  Quantidade
                </p>
                <h3 className="text-blue-950 text-xl font-black">
                  06 Ativos Disponíveis
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
                    src={imovel.image}
                    alt={imovel.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6">
                    <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {imovel.type}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-blue-950/90 to-transparent">
                    <span className="text-white text-2xl font-black">
                      {imovel.price}
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
                        {imovel.location}
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
                        {imovel.bedrooms}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400">
                        Suítes
                      </span>
                      <span className="text-sm font-black text-blue-950">
                        {imovel.bathrooms}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400">
                        Dimensão
                      </span>
                      <span className="text-sm font-black text-blue-950">
                        {imovel.area}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/imoveis/detalhes"
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
        </div>
      </section>
    </>
  );
}
