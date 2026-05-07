import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function DashboardComprador() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const imoveis = [
    {
      id: 1,
      title: "Penthouse de Luxo",
      location: "Talatona, Luanda",
      price: "250M Kz",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Penthouse moderna com acabamentos premium, vista panorâmica e localização exclusiva em Talatona.",
    },
    {
      id: 2,
      title: "Moradia Moderna",
      location: "Kilamba, Luanda",
      price: "320M Kz",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      description: "Moradia familiar com design contemporâneo, espaços amplos e excelente iluminação natural.",
    },
  ];

  const openDetails = (item) => {
    setSelected(item);
    setOpenModal(true);
  };

  return (
    <>
      <title>Dashboard Comprador | Imobi Premium</title>

      <CompradorLayout title="Painel de Controle">
        <section className="space-y-6">
          {/* HERO STATS - Grid com estética industrial limpa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Imóveis vistos", value: "12", sub: "últimos 7 dias", icon: "fa-eye" },
              { label: "Consultas feitas", value: "04", sub: "com consultores", icon: "fa-comments" },
              { label: "Favoritos salvos", value: "08", sub: "imóveis guardados", icon: "fa-bookmark" },
            ].map((stat, i) => (
              <div key={i} className="group bg-white rounded-3xl border border-neutral-100 p-8 hover:border-sky-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-sky-700 mb-2">
                    {stat.label}
                  </p>
                  <h2 className="text-4xl font-black text-blue-950 tracking-tighter italic">{stat.value}</h2>
                  <p className="text-[11px] font-bold text-neutral-400 mt-2 uppercase tracking-widest">{stat.sub}</p>
                </div>
                <i className={`fas ${stat.icon} absolute -right-4 -bottom-4 text-7xl text-neutral-50 group-hover:text-sky-50 transition-colors duration-500`}></i>
              </div>
            ))}
          </div>

          {/* AÇÕES RÁPIDAS - Cards interativos */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-1 bg-blue-950"></span>
              <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">
                Ações rápidas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/dashboard/comprador/imoveis"
                className="group bg-blue-950 p-8 rounded-3xl hover:bg-sky-700 transition-all duration-500 shadow-xl shadow-blue-950/20 relative overflow-hidden"
              >
                <i className="fas fa-search-plus text-2xl text-sky-400 mb-4 group-hover:scale-110 transition-transform"></i>
                <p className="font-black text-white text-lg tracking-tight">Explorar imóveis</p>
                <p className="text-[11px] text-sky-200/60 uppercase font-bold tracking-widest mt-1">Ver novos anúncios</p>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <i className="fas fa-house text-6xl"></i>
                </div>
              </Link>

              {[
                { to: "/dashboard/comprador/historico", icon: "fa-clock-rotate-left", title: "Histórico", desc: "atividades recentes" },
                { to: "/dashboard/comprador/configuracoes", icon: "fa-user-gear", title: "Perfil", desc: "gerir conta" }
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="group bg-white border border-neutral-100 p-8 rounded-3xl hover:border-sky-400 transition-all duration-500 shadow-sm hover:shadow-md"
                >
                  <i className={`fas ${link.icon} text-2xl text-sky-700 mb-4 group-hover:rotate-12 transition-transform`}></i>
                  <p className="font-black text-blue-950 text-lg tracking-tight">{link.title}</p>
                  <p className="text-[11px] text-neutral-400 uppercase font-bold tracking-widest mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* IMÓVEIS RECENTES - Grid Layout */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-6 h-1 bg-sky-700"></span>
                <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">
                  Imóveis de interesse
                </h2>
              </div>

              <Link
                to="/dashboard/comprador/imoveis"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-700 hover:text-blue-950 transition-colors py-2 border-b-2 border-transparent hover:border-blue-950"
              >
                ver catálogo completo
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {imoveis.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-4xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(2,6,23,0.1)] transition-all duration-700 flex flex-col sm:flex-row"
                >
                  <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={item.title}
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-black text-blue-950 text-xl tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-neutral-400 mb-4">
                        <i className="fa-solid fa-location-dot text-[10px] text-sky-700"></i>
                        <span className="text-[10px] font-bold uppercase tracking-wider">{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-50">
                      <span className="text-lg font-black text-sky-700 tracking-tight">
                        {item.price}
                      </span>

                      <button
                        onClick={() => openDetails(item)}
                        className="cursor-pointer text-[10px] font-black uppercase tracking-widest text-white bg-blue-950 px-6 py-3 rounded-xl hover:bg-sky-700 transition-all duration-500 shadow-lg shadow-blue-950/10"
                      >
                        Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODAL - Experiência de Luxo */}
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title={selected?.title}
            icon="fas fa-file-invoice"
          >
            {selected && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={selected.image}
                    className="w-full h-80 object-cover"
                    alt={selected.title}
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-blue-950 uppercase tracking-widest">Ativo Premium</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-neutral-400 font-bold uppercase tracking-[0.2em] text-[10px]">Preço de Mercado</p>
                    <h2 className="text-4xl font-black text-blue-950 tracking-tighter mt-1 italic">
                      {selected.price}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-sky-700 bg-sky-50 px-4 py-2 rounded-xl">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="text-xs font-black uppercase tracking-widest">{selected.location}</span>
                  </div>
                </div>

                <p className="text-neutral-600 leading-relaxed text-lg border-l-4 border-neutral-100 pl-6">
                  {selected.description}
                </p>

                <div className="flex gap-4 pt-6 border-t border-neutral-100">
                  <button className="flex-2 h-16 cursor-pointer bg-blue-950 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-700 transition-all duration-500 shadow-xl shadow-blue-950/20 active:scale-95">
                    Falar com Consultor Especialista
                  </button>

                  <button className="flex-1 h-16 cursor-pointer border border-neutral-200 rounded-2xl hover:border-sky-700 group transition-all duration-500 flex items-center justify-center gap-2">
                    <i className="fas fa-heart text-neutral-300 group-hover:text-red-500 transition-colors"></i>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-950">Favoritar</span>
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
