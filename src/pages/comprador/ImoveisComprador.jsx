import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

// Exemplo de dados (Pode ser substituído por uma API futuramente)
const imoveisData = [
  { id: 1, type: "Residencial", title: "Penthouse de Luxo", location: "Talatona", price: "250M Kz", area: "420m²", rooms: 4, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", desc: "Acabamentos premium com vista para a cidade." },
  { id: 2, type: "Terreno", title: "Terreno Industrial", location: "Viana", price: "85M Kz", area: "2.500m²", rooms: 0, image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228", desc: "Zonamento industrial, ideal para galpões ou logística." },
  { id: 3, type: "Residencial", title: "Moradia T5 Moderna", location: "Kilamba", price: "180M Kz", area: "350m²", rooms: 5, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", desc: "Condomínio fechado com segurança 24h." },
  { id: 4, type: "Comercial", title: "Edifício Corporativo", location: "Maianga", price: "550M Kz", area: "1.200m²", rooms: 12, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", desc: "Escritórios prontos a entrar no centro de Luanda." },
];

export default function ImoveisComprador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const filteredImoveis = imoveisData.filter(imovel => 
    (selectedType === "Todos" || imovel.type === selectedType) &&
    (imovel.title.toLowerCase().includes(searchTerm.toLowerCase()) || imovel.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
        <title>Imóveis | Imobi Premium</title>
        <CompradorLayout title="Catálogo de Ativos">
        
        {/* HEADER DE FILTROS */}
        <div className="bg-white rounded-3xl border border-neutral-100 p-6 mb-10 shadow-sm flex flex-col lg:flex-row items-center gap-6">
            
            {/* Barra de Busca */}
            <div className="relative flex-1 w-full">
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"></i>
            <input 
                type="text" 
                placeholder="Buscar por nome ou localização..."
                className="w-full h-14 pl-14 pr-6 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:border-sky-700 font-bold text-blue-950 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>

            {/* Filtros de Tipo */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {["Todos", "Residencial", "Terreno", "Comercial"].map((type) => (
                <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap ${
                    selectedType === type 
                    ? "bg-blue-950 text-white shadow-lg shadow-blue-950/20" 
                    : "bg-neutral-50 text-neutral-400 border border-neutral-100 hover:border-sky-700 hover:text-sky-700"
                }`}
                >
                {type}
                </button>
            ))}
            </div>
        </div>

        {/* GRID DE LISTAGEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredImoveis.map((imovel) => (
            <div 
                key={imovel.id}
                className="group bg-white rounded-4xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(2,6,23,0.1)] transition-all duration-700"
            >
                {/* Foto com Badge de Tipo */}
                <div className="relative h-64 overflow-hidden">
                <img 
                    src={imovel.image} 
                    alt={imovel.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-blue-950 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                    {imovel.type}
                    </span>
                </div>
                </div>

                {/* Conteúdo Informativo */}
                <div className="p-8">
                <div className="mb-6">
                    <h3 className="text-blue-950 text-xl font-black tracking-tight mb-2 group-hover:text-sky-700 transition-colors">
                    {imovel.title}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-400">
                    <i className="fa-solid fa-location-dot text-[10px] text-sky-700"></i>
                    <span className="text-[10px] font-bold uppercase tracking-wider">{imovel.location}, Angola</span>
                    </div>
                </div>

                {/* Mini Specs */}
                <div className="flex items-center gap-6 py-4 border-y border-neutral-50 mb-8">
                    <div className="flex flex-col">
                    <span className="text-[8px] uppercase font-black text-neutral-300 tracking-widest">Área</span>
                    <span className="text-xs font-black text-blue-950">{imovel.area}</span>
                    </div>
                    {imovel.rooms > 0 && (
                    <div className="flex flex-col border-l border-neutral-50 pl-6">
                        <span className="text-[8px] uppercase font-black text-neutral-300 tracking-widest">Compos.</span>
                        <span className="text-xs font-black text-blue-950">{imovel.rooms} Divisões</span>
                    </div>
                    )}
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                    <span className="text-[8px] uppercase font-black text-sky-700 tracking-[0.2em]">Preço</span>
                    <p className="text-xl font-black text-blue-950 italic tracking-tighter">{imovel.price}</p>
                    </div>
                    
                    <button 
                    onClick={() => { setSelected(imovel); setOpenModal(true); }}
                    className="cursor-pointer h-12 px-6 bg-neutral-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all duration-500 active:scale-95 shadow-lg shadow-black/10"
                    >
                    Ver Ativo
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* Caso não existam resultados */}
        {filteredImoveis.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-folder-open text-5xl text-neutral-100 mb-6"></i>
            <h3 className="text-blue-950 font-black text-xl">Nenhum imóvel encontrado</h3>
            <p className="text-neutral-400 text-sm mt-2">Tente ajustar os seus filtros ou termo de pesquisa.</p>
            </div>
        )}

        {/* MODAL DE DETALHES RÁPIDOS */}
        <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title={selected?.title}
            icon="fa-solid fa-building-circle-check"
        >
            {selected && (
            <div className="space-y-8">
                <img src={selected.image} className="w-full h-80 object-cover rounded-2xl shadow-xl" alt="" />
                
                <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <p className="text-[9px] uppercase font-black text-neutral-400 tracking-widest mb-1">Localização Exata</p>
                    <p className="font-black text-blue-950 tracking-tight">{selected.location}, Luanda</p>
                </div>
                <div className="p-5 bg-sky-50 rounded-2xl border border-sky-100">
                    <p className="text-[9px] uppercase font-black text-sky-700 tracking-widest mb-1">Valor do Ativo</p>
                    <p className="font-black text-sky-800 tracking-tight">{selected.price}</p>
                </div>
                </div>

                <p className="text-neutral-500 leading-relaxed italic border-l-4 border-sky-700 pl-6 py-2">
                {selected.desc}
                </p>

                <div className="flex gap-4 pt-6 border-t border-neutral-100">
                <button className="flex-2 h-14 bg-blue-950 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-sky-700 transition-all duration-500 shadow-xl shadow-blue-950/20 cursor-pointer">
                    Solicitar Visita Técnica
                </button>
                <button className="flex-1 h-14 border border-neutral-200 rounded-xl flex items-center justify-center text-blue-950 hover:bg-neutral-50 transition-all cursor-pointer">
                    <i className="fa-solid fa-share-nodes"></i>
                </button>
                </div>
            </div>
            )}
        </Modal>

        </CompradorLayout>
    </>
  );
}
