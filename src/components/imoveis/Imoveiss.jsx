import { useState } from "react";
import { Link } from "react-router-dom";

// Imports das imagens
import imovel1 from "../../assets/img/Imovel1.jpg";
import imovel2 from "../../assets/img/Imovel2.jpg";
import imovel3 from "../../assets/img/Imovel3.jpg";
import imovel4 from "../../assets/img/Imovel4.jpg";
import imovel5 from "../../assets/img/Imovel5.jpg";
import imovel6 from "../../assets/img/Imovel6.jpg";

export default function Imoveiss() {
  const [imoveis] = useState([
    { id: 1, type: "Residencial", image: imovel1, title: "Penthouse de Luxo", price: "250M Kz", location: "Talatona, Luanda", bedrooms: 4, bathrooms: 5, area: "420m²" },
    { id: 2, type: "Terreno", image: imovel2, title: "Terreno Residencial Premium", price: "85M Kz", location: "Benfica, Luanda", area: "1.200m²" },
    { id: 3, type: "Terreno", image: imovel3, title: "Terreno Comercial Estratégico", price: "120M Kz", location: "Maianga, Luanda", area: "950m²" },
    { id: 4, type: "Residencial", image: imovel4, title: "Moradia Executiva", price: "320M Kz", location: "Kilamba, Luanda", bedrooms: 6, bathrooms: 6, area: "550m²" },
    { id: 5, type: "Residencial", image: imovel5, title: "Cobertura Exclusiva", price: "410M Kz", location: "Ilha de Luanda", bedrooms: 4, bathrooms: 5, area: "470m²" },
    { id: 6, type: "Terreno", image: imovel6, title: "Terreno para Investimento", price: "150M Kz", location: "Viana, Luanda", area: "2.500m²" },
  ]);

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
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Tipo de imóvel
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700">
                <option>Todos</option>
                <option>Residencial</option>
                <option>Terreno</option>
                <option>Comercial</option>
                <option>Luxo</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Localização
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700">
                <option>Todas</option>
                <option>Talatona</option>
                <option>Benfica</option>
                <option>Maianga</option>
                <option>Kilamba</option>
                <option>Viana</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-blue-950 font-black uppercase tracking-widest text-[10px]">
                Faixa de preço
              </label>
              <select className="h-16 px-5 rounded-2xl border border-neutral-100 bg-neutral-50 focus:outline-none focus:border-sky-700">
                <option>Qualquer valor</option>
                <option>Até 100M Kz</option>
                <option>100M - 250M Kz</option>
                <option>250M - 500M Kz</option>
                <option>Acima de 500M Kz</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-16 cursor-pointer bg-blue-950 hover:bg-sky-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500"
              >
                Buscar Imóveis
              </button>
            </div>

          </form>
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

                <div className="absolute top-6 left-6 flex flex-col gap-2">
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

                <div className="grid grid-cols-3 gap-2 py-6 border-y border-neutral-100 mt-auto">
                  {imovel.bedrooms > 0 && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400">
                        Quartos
                      </span>
                      <span className="text-sm font-black text-blue-950">
                        {imovel.bedrooms}
                      </span>
                    </div>
                  )}

                  {imovel.bathrooms > 0 && (
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
  );
}
