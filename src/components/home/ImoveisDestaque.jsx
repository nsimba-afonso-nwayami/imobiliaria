import { useState } from "react";
import { Link } from "react-router-dom";

// Imports das imagens (mantidos conforme sua estrutura)
import imovel1 from "../../assets/img/imovel1.jpg";
import imovel2 from "../../assets/img/imovel2.jpg";
import imovel3 from "../../assets/img/imovel3.jpg";
import imovel4 from "../../assets/img/imovel4.jpg";
import imovel5 from "../../assets/img/imovel5.jpg";
import imovel6 from "../../assets/img/imovel6.jpg";

export default function ImoveisDestaque() {
  const [imoveis] = useState([
    { id: 1, type: "Residencial", image: imovel1, title: "Penthouse de Luxo", price: "250M Kz", location: "Talatona, Luanda", bedrooms: 4, bathrooms: 5, area: "420m²" },
    { id: 2, type: "Terreno", image: imovel2, title: "Terreno Residencial Premium", price: "85M Kz", location: "Benfica, Luanda", area: "1.200m²" },
    { id: 3, type: "Terreno", image: imovel3, title: "Terreno Comercial Estratégico", price: "120M Kz", location: "Maianga, Luanda", area: "950m²" },
    { id: 4, type: "Residencial", image: imovel4, title: "Moradia Executiva", price: "320M Kz", location: "Kilamba, Luanda", bedrooms: 6, bathrooms: 6, area: "550m²" },
    { id: 5, type: "Residencial", image: imovel5, title: "Cobertura Exclusiva", price: "410M Kz", location: "Ilha de Luanda", bedrooms: 4, bathrooms: 5, area: "470m²" },
    { id: 6, type: "Terreno", image: imovel6, title: "Terreno para Investimento", price: "150M Kz", location: "Viana, Luanda", area: "2.500m²" },
  ]);

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
                  src={imovel.image}
                  alt={imovel.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Badges Flutuantes */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-sky-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {imovel.type}
                  </span>
                  {imovel.price.includes("410M") && (
                    <span className="bg-blue-950 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                      Exclusivo
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-blue-950/90 to-transparent">
                  <span className="text-white text-2xl font-black">{imovel.price}</span>
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
                    <span className="text-xs font-bold uppercase tracking-wider">{imovel.location}</span>
                  </div>
                </div>

                {/* Specs Inteligentes (Oculta se for Terreno) */}
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-neutral-100 mt-auto">
                  {imovel.bedrooms > 0 && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-black text-neutral-400 tracking-tighter">Quartos</span>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bed text-blue-950 text-xs"></i>
                        <span className="text-sm font-black text-blue-950">{imovel.bedrooms}</span>
                      </div>
                    </div>
                  )}
                  
                  {imovel.bathrooms > 0 && (
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
                      <span className="text-sm font-black text-blue-950">{imovel.area}</span>
                    </div>
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
      </div>
    </section>
  );
}
