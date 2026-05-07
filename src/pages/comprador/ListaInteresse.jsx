import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";

export default function ListaInteresse() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);

  // Simulação de imóveis favoritados/na lista de interesse
  const [interesses, setInteresses] = useState([
    {
      id: 1,
      title: "Penthouse de Luxo",
      location: "Talatona, Luanda",
      price: "250M Kz",
      status: "Disponível",
      date: "Adicionado em 04 Mai",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Edifício Corporativo",
      location: "Maianga, Luanda",
      price: "550M Kz",
      status: "Sob Consulta",
      date: "Adicionado em 02 Mai",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
  ]);

  const removeInteresse = (id) => {
    setInteresses(interesses.filter((item) => item.id !== id));
  };

  return (
    <>
      <title>Lista de Interesse | Imobi Premium</title>

      <CompradorLayout title="Minha Curadoria">
        <section className="space-y-6">
          {/* Cabeçalho da Lista */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-1">
                Ativos Monitorados
              </p>
              <h2 className="text-3xl font-black text-blue-950 tracking-tighter italic">
                {interesses.length} Imóveis na Lista
              </h2>
            </div>
            
            <button className="h-12 px-8 bg-neutral-50 border border-neutral-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-blue-950 hover:border-blue-950 transition-all cursor-pointer">
              Limpar Lista
            </button>
          </div>

          {/* Listagem de Interesse */}
          <div className="space-y-4">
            {interesses.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-neutral-100 p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-sky-700"
              >
                {/* Miniatura */}
                <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0 shadow-inner bg-neutral-100">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.title}
                  />
                </div>

                {/* Info Principal */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-black text-blue-950 text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 mt-1">
                    <i className="fa-solid fa-location-dot text-[10px] text-sky-700"></i>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
                  </div>
                </div>

                {/* Status e Preço */}
                <div className="px-6 border-x border-neutral-50 hidden lg:block">
                  <p className="text-[8px] font-black uppercase text-neutral-300 tracking-[0.2em] mb-1">Status</p>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.status}
                  </span>
                </div>

                <div className="text-center md:text-right px-4">
                  <p className="text-[8px] font-black uppercase text-neutral-300 tracking-[0.2em] mb-1">Valor</p>
                  <p className="text-xl font-black text-blue-950 italic tracking-tighter">
                    {item.price}
                  </p>
                </div>

                {/* Ações Rápidas */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <button 
                    onClick={() => { setSelected(item); setOpenModal(true); }}
                    className="flex-1 md:flex-none h-12 px-6 bg-blue-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-700 transition-all cursor-pointer"
                  >
                    Ver Ficha
                  </button>
                  
                  <button 
                    onClick={() => removeInteresse(item.id)}
                    className="w-12 h-12 border border-neutral-100 text-neutral-300 rounded-xl hover:border-red-200 hover:text-red-500 transition-all cursor-pointer group/trash"
                    title="Remover da lista"
                  >
                    <i className="fa-solid fa-trash-can group-hover/trash:shake"></i>
                  </button>
                </div>
              </div>
            ))}

            {interesses.length === 0 && (
              <div className="py-32 bg-neutral-50 rounded-[2.5rem] border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <i className="fa-solid fa-heart-crack text-3xl text-neutral-200"></i>
                </div>
                <h3 className="text-blue-950 font-black text-xl">Sua lista está vazia</h3>
                <p className="text-neutral-400 text-sm mt-2 max-w-xs">
                  Explore o catálogo e adicione os imóveis que despertarem seu interesse para monitorá-los.
                </p>
              </div>
            )}
          </div>

          {/* MODAL DE DETALHES RÁPIDOS */}
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title={selected?.title}
            icon="fa-solid fa-star"
          >
            {selected && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <img src={selected.image} className="w-full h-80 object-cover rounded-3xl" alt="" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-sky-700 uppercase tracking-widest">{selected.location}</p>
                    <h3 className="text-4xl font-black text-blue-950 tracking-tighter mt-1 italic">{selected.price}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">{selected.date}</p>
                    <span className="text-[10px] font-black text-white bg-blue-950 px-4 py-2 rounded-lg uppercase tracking-widest">{selected.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <button className="h-16 bg-blue-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-sky-700 transition-all cursor-pointer">
                    Agendar Visita
                  </button>
                  <button className="h-16 border-2 border-neutral-100 text-blue-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:border-sky-700 transition-all cursor-pointer">
                    Baixar Ficha PDF
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </section>
      </CompradorLayout>
    </>
  );
}
