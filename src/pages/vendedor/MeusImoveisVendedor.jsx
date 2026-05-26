import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";

export default function MeusImoveisVendedor() {
  const [openManageModal, setOpenManageModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const meusImoveis = [
    {
      id: 1,
      title: "Vivenda V3 em Talatona (Condomínio)",
      propostas: "3 Propostas",
      status: "Ativo",
      views: "1.2K vistas",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
      address: "Via AL 15, Talatona, Luanda",
      value: "250M Kz",
    },
    {
      id: 2,
      title: "Apartamento T2 no Kilamba",
      propostas: "2 Propostas",
      status: "Proposta Aceite",
      views: "450 vistas",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      address: "Quarteirão X, Centralidade do Kilamba",
      value: "45M Kz",
    },
  ];

  return (
    <>
      <title>Meus Anúncios | Imobi Premium</title>

      <VendedorLayout title="Meus Imóveis Anunciados">
        <section className="space-y-8">
          {/* HEADER OPERACIONAL */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">
                Gestão de Propriedades
              </p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">
                Meus Anúncios
              </h2>
            </div>
            <button
              onClick={() => setOpenAddModal(true)}
              className="h-14 px-8 bg-sky-700 text-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer flex items-center gap-3"
            >
              <i className="fas fa-plus"></i> Adicionar Propriedade
            </button>
          </div>

          {/* BARRA DE PESQUISA E FILTROS */}
          <div className="flex flex-col lg:flex-row gap-4 bg-slate-50 p-4 rounded-4xl border border-slate-300 shadow-sm">
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
              <input
                type="text"
                placeholder="BUSCAR POR TÍTULO OU LOCALIZAÇÃO DO SEU IMÓVEL..."
                className="w-full h-14 bg-slate-50 rounded-xl pl-12 pr-6 text-[10px] font-black uppercase tracking-widest outline-none border border-slate-300 focus:border-sky-700 transition-all placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Todos", "Ativos", "Proposta Aceite", "Vendidos"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`h-14 px-6 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                      filter === item
                        ? "bg-blue-950 text-slate-50 shadow-md"
                        : "bg-slate-50 text-slate-500 border border-slate-300 hover:text-blue-950"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* GRID DE CARDS DOS ANÚNCIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meusImoveis.map((imovel) => (
              <div
                key={imovel.id}
                className="bg-slate-50 rounded-[2.5rem] border border-slate-300 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-500 group"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Imagem e Visualizações */}
                  <div className="relative shrink-0">
                    <img
                      src={imovel.image}
                      className="w-full sm:w-32 h-32 object-cover rounded-3xl"
                      alt=""
                    />
                    <div className="absolute -top-2 -right-2 bg-slate-50 shadow-md rounded-lg px-2 py-1 flex items-center gap-1 border border-slate-300">
                      <i className="fas fa-eye text-sky-700 text-[10px]"></i>
                      <span className="text-[9px] font-black text-blue-950 uppercase">
                        {imovel.views}
                      </span>
                    </div>
                  </div>

                  {/* Informações de Venda Direta */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-black text-blue-950 uppercase tracking-tighter italic">
                        {imovel.title}
                      </h3>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                        {imovel.address}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-y border-slate-300 py-4">
                      <div>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
                          Interessados
                        </p>
                        <p className="text-[10px] font-black text-blue-950 uppercase">
                          {imovel.propostas}
                        </p>
                      </div>
                      <div>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
                          Preço de Venda
                        </p>
                        <p className="text-[10px] font-black text-sky-700 italic">
                          {imovel.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                          imovel.status === "Ativo"
                            ? "bg-sky-700 text-slate-50"
                            : "bg-blue-900 text-slate-50"
                        }`}
                      >
                        {imovel.status}
                      </span>
                      <button
                        onClick={() => {
                          setSelected(imovel);
                          setOpenManageModal(true);
                        }}
                        className="flex-1 bg-blue-950 text-slate-50 hover:bg-sky-700 h-10 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer text-center"
                      >
                        Gerenciar Anúncio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL: ANUNCIAR OUTRA PROPRIEDADE */}
        <Modal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
          title="Adicionar Propriedade"
          icon="fas fa-house-medical"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Título do Anúncio
                </label>
                <input
                  type="text"
                  placeholder="EX: VIVENDA V4 NO NOVA VIDA"
                  className="w-full h-14 bg-slate-50 border border-slate-300 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:border-sky-700 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Localização Direta
                </label>
                <input
                  type="text"
                  placeholder="BAIRRO, ZONA (EX: BENFICA, LUANDA)"
                  className="w-full h-14 bg-slate-50 border border-slate-300 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:border-sky-700 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Preço Pretendido (Kz)
                  </label>
                  <input
                    type="text"
                    placeholder="Valor em Kwanzas"
                    className="w-full h-14 bg-slate-50 border border-slate-300 rounded-2xl px-6 text-[11px] font-bold outline-none focus:border-sky-700 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Tipo de Propriedade
                  </label>
                  <select className="w-full h-14 bg-slate-50 border border-slate-300 rounded-2xl px-6 text-[11px] font-bold uppercase outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer">
                    <option>VIVENDA</option>
                    <option>APARTAMENTO</option>
                    <option>TERRENO</option>
                    <option>FALDA / QUINTA</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-sky-700 transition-colors cursor-pointer bg-slate-50">
              <i className="fas fa-camera text-2xl text-slate-500 group-hover:text-sky-700 mb-2"></i>
              <p className="text-[10px] font-black text-slate-500 uppercase">
                Carregar Fotografias da Propriedade
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-300">
              <button
                type="button"
                onClick={() => setOpenAddModal(false)}
                className="h-14 border border-slate-300 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-300 hover:text-blue-950 transition-all"
              >
                Cancelar
              </button>
              <button className="h-14 bg-sky-700 text-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-sky-700/20 hover:bg-sky-600 transition-all">
                Publicar Anúncio
              </button>
            </div>
          </form>
        </Modal>

        {/* MODAL: CONTROLE E VISIBILIDADE DO ANÚNCIO */}
        <Modal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
          title="Adicionar Propriedade"
          icon="fas fa-bullhorn"
        >
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome do Anúncio */}
              <div className="col-span-full">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Título do Anúncio
                </label>
                <input
                  type="text"
                  placeholder="Ex: Vivenda V3 no Projeto Nova Vida"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />
              </div>

              {/* Tipo de Imóvel */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Tipo de Imóvel
                </label>
                <select className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer">
                  <option>VIVENDA</option>
                  <option>APARTAMENTO</option>
                  <option>TERRENO</option>
                  <option>LOJA / ESCRITÓRIO</option>
                </select>
              </div>

              {/* Localização */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Localização (Bairro/Zona)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Talatona, Luanda"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />
              </div>

              {/* Preço */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Preço de Venda (Kz)
                </label>
                <input
                  type="text"
                  placeholder="Valor em Kwanzas"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
              </div>

              {/* Quartos (se aplicável) */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Quartos
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
              </div>

              {/* Descrição */}
              <div className="col-span-full">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Descrição Detalhada
                </label>
                <textarea
                  placeholder="Descreva o estado do imóvel, pontos de referência, etc..."
                  className="w-full h-32 bg-slate-100 border border-slate-300 rounded-2xl p-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase resize-none"
                ></textarea>
              </div>
            </div>

            {/* Upload de Fotos Simulado */}
            <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-slate-50 group hover:border-sky-700 transition-all cursor-pointer">
              <i className="fas fa-camera text-2xl text-slate-400 group-hover:text-sky-700 mb-2"></i>
              <p className="text-[9px] font-black text-slate-500 uppercase">
                Clique para carregar fotos do imóvel
              </p>
            </div>

            {/* Botão de Finalizar */}
            <div className="pt-4">
              <button className="w-full h-16 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer">
                Publicar Anúncio Agora
              </button>
              <button
                onClick={() => setOpenAddModal(false)}
                className="w-full h-10 mt-2 text-slate-400 font-black uppercase text-[8px] hover:text-blue-950 transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      </VendedorLayout>
    </>
  );
}
