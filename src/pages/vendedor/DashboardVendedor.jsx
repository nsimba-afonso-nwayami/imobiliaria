import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function DashboardVendedor() {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); // Estado para o modal de novo anúncio
  const [selectedImovel, setSelectedImovel] = useState(null);

  const stats = [
    { label: "Meus Anúncios", value: "02 Imóveis", sub: "Ativos na plataforma", icon: "fa-house", trend: "neutral" },
    { label: "Propostas Recebidas", value: "05", sub: "Interessados em comprar", icon: "fa-comments-dollar", trend: "up" },
    { label: "Visitas Agendadas", value: "12 Visitas", sub: "Este mês", icon: "fa-calendar-days", trend: "up" },
  ];

  const meusImoveis = [
    { 
        id: 1, 
        title: "Vivenda V3 em Talatona (Condomínio)", 
        propostas: "3 propostas", 
        status: "Anunciado", 
        value: "250M Kz",
        image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
        details: "O seu imóvel recebeu 3 propostas de compra. A proposta mais alta atual é de 240M Kz à vista. Existem também 4 visitas agendadas para este sábado."
    },
    { 
        id: 2, 
        title: "Apartamento T2 no Kilamba", 
        propostas: "2 propostas", 
        status: "Proposta Aceite", 
        value: "45M Kz",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        details: "Você aceitou a proposta de 45M Kz. O comprador está em fase de transferência bancária. O anúncio ficará pausado até a confirmação."
    },
  ];

  const handleOpenDetails = (imovel) => {
    setSelectedImovel(imovel);
    setOpenModal(true);
  };

  return (
    <>
      <title>Painel do Vendedor | Imobi Premium</title>

      <VendedorLayout title="Minhas Vendas">
        <section className="space-y-10">
          
          {/* MÉTRICAS DO PROPRIETÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl border border-slate-300 p-8 shadow-sm relative overflow-hidden group hover:border-sky-700 transition-all duration-500">
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-2">{stat.label}</p>
                  <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter">{stat.value}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-blue-900 text-slate-50">
                       {stat.sub}
                    </span>
                  </div>
                </div>
                <i className={`fas ${stat.icon} absolute -right-4 -bottom-4 text-7xl text-slate-300 opacity-30 group-hover:text-sky-700 group-hover:opacity-20 transition-colors duration-500`}></i>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LISTA DE IMÓVEIS DO DONO */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-950"></span>
                  <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">Meus Imóveis à Venda</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {meusImoveis.map((imovel) => (
                  <div key={imovel.id} className="bg-slate-50 border border-slate-300 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-sky-700">
                    <div className="w-full md:w-32 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-300">
                        <img src={imovel.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={imovel.title} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-black text-blue-950 text-lg tracking-tight">{imovel.title}</h3>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Preço Definido: {imovel.value}</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-1">
                      <span className="text-[9px] font-black text-blue-950 border border-blue-950 px-3 py-1 rounded-full uppercase italic">{imovel.propostas}</span>
                      <button 
                        onClick={() => handleOpenDetails(imovel)}
                        className="w-12 h-12 bg-sky-700 text-slate-50 rounded-xl hover:bg-sky-600 transition-all cursor-pointer flex items-center justify-center shadow-lg shadow-sky-700/20 mt-2"
                      >
                        <i className="fas fa-arrow-right text-xs"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AÇÕES DIRETA AO PONTO */}
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <span className="w-8 h-1 bg-sky-700"></span>
                  <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">O que fazer agora</h2>
                </div>
                
                {/* CARD DE INTERESSADOS */}
                <div className="bg-blue-950 rounded-4xl p-8 text-slate-50 relative overflow-hidden shadow-2xl group">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black leading-tight mb-4 italic">Ver<br/>Mensagens</h3>
                        <p className="text-slate-300 text-xs mb-8 leading-relaxed uppercase tracking-tighter font-bold">Há compradores interessados em negociar o preço das suas propriedades.</p>
                        <Link to="/dashboard/vendedor/clientes" className="inline-block bg-sky-700 text-slate-50 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 active:scale-95">
                            Ver Compradores
                        </Link>
                    </div>
                    <i className="fas fa-comments absolute -right-8 -bottom-8 text-9xl text-slate-50/5 rotate-12 group-hover:text-sky-700/20 transition-colors duration-700"></i>
                </div>

                {/* ANUNCIAR MAIS UM - TRIGGER DO MODAL */}
                <div 
                  onClick={() => setOpenAddModal(true)}
                  className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-4xl p-8 flex flex-col items-center text-center group hover:border-sky-700 transition-all duration-500 cursor-pointer"
                >
                    <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-sky-700 transition-colors">
                        <i className="fas fa-plus text-slate-50"></i>
                    </div>
                    <p className="font-black text-blue-950 text-xs uppercase tracking-widest">Anunciar outra propriedade</p>
                    <p className="text-[9px] text-slate-500 mt-2 font-bold uppercase tracking-widest">Criar anúncio grátis</p>
                </div>
            </div>

          </div>
        </section>

        {/* MODAL 1: DETALHES DO ANÚNCIO EXISTENTE */}
        <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Estado do meu Anúncio"
            icon="fas fa-house-user"
        >
            {selectedImovel && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-300">
                            <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1">Estado do Anúncio</p>
                            <p className="font-black text-blue-950 italic text-xl uppercase tracking-tighter">{selectedImovel.status}</p>
                        </div>
                        <div className="bg-blue-900 p-6 rounded-3xl border border-blue-950 text-slate-50">
                            <p className="text-[9px] uppercase font-black text-slate-300 tracking-widest mb-1">Interesse</p>
                            <p className="font-black text-xl italic tracking-tighter">{selectedImovel.propostas}</p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-950 rounded-3xl text-slate-50 relative overflow-hidden">
                        <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-4 text-sky-700">Resumo da Atividade</h4>
                        <p className="text-slate-300 leading-relaxed italic text-sm relative z-10">
                            "{selectedImovel.details}"
                        </p>
                        <i className="fas fa-info-circle absolute top-4 right-4 text-4xl text-slate-50/5"></i>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-4">
                        <button className="h-16 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer">
                            Editar Dados do Anúncio
                        </button>
                        <button className="h-16 border border-slate-300 text-blue-950 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-slate-300 hover:text-blue-950 transition-all cursor-pointer">
                            Ver Propostas de Compra
                        </button>
                    </div>
                </div>
            )}
        </Modal>

        {/* MODAL 2: CRIAR NOVO ANÚNCIO (FORMULÁRIO) */}
        <Modal
            isOpen={openAddModal}
            onClose={() => setOpenAddModal(false)}
            title="Anunciar Propriedade"
            icon="fas fa-bullhorn"
        >
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nome do Anúncio */}
                    <div className="col-span-full">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Título do Anúncio</label>
                        <input 
                            type="text" 
                            placeholder="Ex: Vivenda V3 no Projeto Nova Vida"
                            className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                        />
                    </div>

                    {/* Tipo de Imóvel */}
                    <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de Imóvel</label>
                        <select className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer">
                            <option>VIVENDA</option>
                            <option>APARTAMENTO</option>
                            <option>TERRENO</option>
                            <option>LOJA / ESCRITÓRIO</option>
                        </select>
                    </div>

                    {/* Localização */}
                    <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Localização (Bairro/Zona)</label>
                        <input 
                            type="text" 
                            placeholder="Ex: Talatona, Luanda"
                            className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                        />
                    </div>

                    {/* Preço */}
                    <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Preço de Venda (Kz)</label>
                        <input 
                            type="text" 
                            placeholder="Valor em Kwanzas"
                            className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                        />
                    </div>

                    {/* Quartos (se aplicável) */}
                    <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Quartos</label>
                        <input 
                            type="number" 
                            placeholder="0"
                            className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                        />
                    </div>

                    {/* Descrição */}
                    <div className="col-span-full">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Descrição Detalhada</label>
                        <textarea 
                            placeholder="Descreva o estado do imóvel, pontos de referência, etc..."
                            className="w-full h-32 bg-slate-100 border border-slate-300 rounded-2xl p-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase resize-none"
                        ></textarea>
                    </div>
                </div>

                {/* Upload de Fotos Simulado */}
                <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-slate-50 group hover:border-sky-700 transition-all cursor-pointer">
                    <i className="fas fa-camera text-2xl text-slate-400 group-hover:text-sky-700 mb-2"></i>
                    <p className="text-[9px] font-black text-slate-500 uppercase">Clique para carregar fotos do imóvel</p>
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