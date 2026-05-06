import { useState } from "react";

export default function PropertySearch() {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    price: "",
    rooms: "",
  });

  const propertyTypes = ["Apartamento", "Moradia", "Escritório", "Terreno", "Penthouse"];
  const locations = ["Luanda", "Talatona", "Kilamba", "Benfica", "Viana", "Maianga"];
  const priceRanges = ["Até 50M Kz", "50M - 150M Kz", "150M - 300M Kz", "300M+ Kz"];
  const roomOptions = ["1 Quarto", "2 Quartos", "3 Quartos", "4+ Quartos"];

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
  };

  return (
    <section className="relative -mt-16 md:-mt-24 z-30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(2,6,23,0.15)] border border-slate-100 overflow-hidden">
          
          {/* Header da Busca */}
          <div className="bg-blue-950 px-10 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-sky-700 rounded-full"></div>
              <p className="text-sky-700 font-bold uppercase tracking-[0.3em] text-[10px]">
                Filtros de Precisão
              </p>
            </div>
            <span className="text-slate-400 text-[10px] uppercase tracking-widest hidden sm:block">
              Encontre sua próxima conquista
            </span>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              
              {/* Tipo */}
              <div className="group flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-house-chimney text-sky-700 text-xs"></i>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-sky-700 transition-colors">
                    O que procura?
                  </label>
                </div>
                <select
                  value={filters.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  className="w-full bg-transparent text-blue-950 font-bold text-sm outline-none border-b-2 border-slate-100 focus:border-sky-700 pb-3 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Todos os Tipos</option>
                  {propertyTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              {/* Localização */}
              <div className="group flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-sky-700 text-xs"></i>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-sky-700 transition-colors">
                    Onde em Angola?
                  </label>
                </div>
                <select
                  value={filters.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full bg-transparent text-blue-950 font-bold text-sm outline-none border-b-2 border-slate-100 focus:border-sky-700 pb-3 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Qualquer Local</option>
                  {locations.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              {/* Preço */}
              <div className="group flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-money-bill-transfer text-sky-700 text-xs"></i>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-sky-700 transition-colors">
                    Investimento
                  </label>
                </div>
                <select
                  value={filters.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  className="w-full bg-transparent text-blue-950 font-bold text-sm outline-none border-b-2 border-slate-100 focus:border-sky-700 pb-3 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Faixa de Preço</option>
                  {priceRanges.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              {/* Quartos */}
              <div className="group flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bed text-sky-700 text-xs"></i>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-sky-700 transition-colors">
                    Dormitórios
                  </label>
                </div>
                <select
                  value={filters.rooms}
                  onChange={(e) => handleChange("rooms", e.target.value)}
                  className="w-full bg-transparent text-blue-950 font-bold text-sm outline-none border-b-2 border-slate-100 focus:border-sky-700 pb-3 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Quantidade</option>
                  {roomOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-blue-900/10"></div>
                     </div>
                   ))}
                </div>
                <p className="text-slate-500 text-[11px] font-medium italic">
                  Junte-se a mais de <span className="text-blue-950 font-bold">1,200 investidores</span> este mês.
                </p>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer sm:w-auto bg-sky-700 hover:bg-blue-950 text-slate-50 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-[0_10px_30px_rgba(3,105,161,0.2)] hover:shadow-blue-950/30 flex items-center justify-center gap-4 group"
              >
                <span>Refinar Busca</span>
                <i className="fa-solid fa-magnifying-glass transition-transform group-hover:scale-110"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
