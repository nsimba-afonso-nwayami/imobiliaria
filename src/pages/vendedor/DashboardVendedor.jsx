import { useState } from "react";
import VendedorLayout from "./components/VendedorLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { propertySchema } from "../../validations/propertyValidation";

import { createProperty } from "../../services/propertyService";

export default function DashboardVendedor() {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); // Estado para o modal de novo anúncio
  const [openSponsorModal, setOpenSponsorModal] = useState(false); // Estado para o modal de patrocínio
  const [selectedImovel, setSelectedImovel] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [videoName, setVideoName] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(propertySchema),
  });

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setValue("images", files, {
      shouldValidate: true,
    });

    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages(previews);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    setValue("video", file, {
      shouldValidate: true,
    });

    if (file) {
      setVideoName(file.name);
    } else {
      setVideoName("");
    }
  };

  const onSubmitProperty = async (data) => {
    try {
      const formData = new FormData();

      // CAMPOS
      formData.append("title", data.title);
      formData.append("property_type", data.property_type);
      formData.append("purpose", data.purpose);
      formData.append("province", data.province);
      formData.append("city", data.city);
      formData.append("district", data.district);
      formData.append("address", data.address);
      formData.append("price", data.price);
      formData.append("bedrooms", data.bedrooms || "");
      formData.append("bathrooms", data.bathrooms || "");
      formData.append("garages", data.garages || "");
      formData.append("furnished", data.furnished);
      formData.append("area", data.area);
      formData.append("description", data.description);
      

      // IMAGENS
      data.images.forEach((image) => {
        formData.append("images[]", image);
      });

      // VÍDEO
      if (data.video) {
        formData.append("video", data.video);
      }

      console.log("DADOS ENVIADOS:");

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await createProperty(formData);

      console.log("RESPOSTA SUCESSO:");
      console.log(response);

      toast.success("Imóvel cadastrado com sucesso!");

      reset();

      setPreviewImages([]);
      setVideoName("");

      setOpenAddModal(false);

    } catch (error) {
      console.log(error);

      if (error.response?.data) {
        const errors = error.response.data;

        Object.keys(errors).forEach((key) => {
          if (Array.isArray(errors[key])) {
            toast.error(errors[key][0]);
          } else {
            toast.error(errors[key]);
          }
        });
      } else {
        toast.error("Erro ao cadastrar imóvel");
      }
    }
  };

  const stats = [
    {
      label: "Meus Anúncios",
      value: "02 Imóveis",
      sub: "Ativos na plataforma",
      icon: "fa-house",
      trend: "neutral",
    },
    {
      label: "Propostas Recebidas",
      value: "05",
      sub: "Interessados em comprar",
      icon: "fa-comments-dollar",
      trend: "up",
    },
    {
      label: "Visitas Agendadas",
      value: "12 Visitas",
      sub: "Este mês",
      icon: "fa-calendar-days",
      trend: "up",
    },
  ];

  const meusImoveis = [
    {
      id: 1,
      title: "Vivenda V3 em Talatona (Condomínio)",
      propostas: "3 propostas",
      status: "Anunciado",
      value: "250M Kz",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228",
      details:
        "O seu imóvel recebeu 3 propostas de compra. A proposta mais alta atual é de 240M Kz à vista. Existem também 4 visitas agendadas para este sábado.",
    },
    {
      id: 2,
      title: "Apartamento T2 no Kilamba",
      propostas: "2 propostas",
      status: "Proposta Aceite",
      value: "45M Kz",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      details:
        "Você aceitou a proposta de 45M Kz. O comprador está em fase de transferência bancária. O anúncio ficará pausado até a confirmação.",
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-300 pb-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-700 mb-2">
                Visão Geral
              </p>
              <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter uppercase">
                Painel de Controlo
              </h2>
            </div>
            <button
              onClick={() => setOpenAddModal(true)}
              className="h-14 px-8 bg-sky-700 text-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer flex items-center gap-3 shrink-0"
            >
              <i className="fas fa-plus"></i> Adicionar Propriedade
            </button>
          </div>

          {/* MÉTRICAS DO PROPRIETÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl border border-slate-300 p-8 shadow-sm relative overflow-hidden group hover:border-sky-700 transition-all duration-500"
              >
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-2">
                    {stat.label}
                  </p>
                  <h2 className="text-4xl font-black text-blue-950 italic tracking-tighter">
                    {stat.value}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-blue-900 text-slate-50">
                      {stat.sub}
                    </span>
                  </div>
                </div>
                <i
                  className={`fas ${stat.icon} absolute -right-4 -bottom-4 text-7xl text-slate-300 opacity-30 group-hover:text-sky-700 group-hover:opacity-20 transition-colors duration-500`}
                ></i>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LISTA DE IMÓVEIS DO DONO */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-950"></span>
                  <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">
                    Meus Imóveis à Venda
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {meusImoveis.map((imovel) => (
                  <div
                    key={imovel.id}
                    className="bg-slate-50 border border-slate-300 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-sky-700"
                  >
                    <div className="w-full md:w-32 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-300">
                      <img
                        src={imovel.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={imovel.title}
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-black text-blue-950 text-lg tracking-tight">
                        {imovel.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                        Preço Definido: {imovel.value}
                      </p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-1">
                      <span className="text-[9px] font-black text-blue-950 border border-blue-950 px-3 py-1 rounded-full uppercase italic">
                        {imovel.propostas}
                      </span>
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
                <h2 className="text-xl font-black text-blue-950 uppercase tracking-tighter">
                  O que fazer agora
                </h2>
              </div>

              {/* CARD DE INTERESSADOS */}
              <div className="bg-blue-950 rounded-4xl p-8 text-slate-50 relative overflow-hidden shadow-2xl group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black leading-tight mb-4 italic">
                    Ver
                    <br />
                    Mensagens
                  </h3>
                  <p className="text-slate-300 text-xs mb-8 leading-relaxed uppercase tracking-tighter font-bold">
                    Há compradores interessados em negociar o preço das suas
                    propriedades.
                  </p>
                  <Link
                    to="/dashboard/vendedor/clientes"
                    className="inline-block bg-sky-700 text-slate-50 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 active:scale-95"
                  >
                    Ver Compradores
                  </Link>
                </div>
                <i className="fas fa-comments absolute -right-8 -bottom-8 text-9xl text-slate-50/5 rotate-12 group-hover:text-sky-700/20 transition-colors duration-700"></i>
              </div>

              {/* ANUNCIAR MAIS UM - TRIGGER DO MODAL */}
              <div
                onClick={() => setOpenSponsorModal(true)}
                className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-4xl p-8 flex flex-col items-center text-center group hover:border-sky-700 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-sky-700 transition-colors">
                  <i className="fas fa-plus text-slate-50"></i>
                </div>
                <p className="font-black text-blue-950 text-xs uppercase tracking-widest">
                  Anunciar outra propriedade
                </p>
                <p className="text-[9px] text-slate-500 mt-2 font-bold uppercase tracking-widest">
                  Criar anúncio grátis
                </p>
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
                  <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1">
                    Estado do Anúncio
                  </p>
                  <p className="font-black text-blue-950 italic text-xl uppercase tracking-tighter">
                    {selectedImovel.status}
                  </p>
                </div>
                <div className="bg-blue-900 p-6 rounded-3xl border border-blue-950 text-slate-50">
                  <p className="text-[9px] uppercase font-black text-slate-300 tracking-widest mb-1">
                    Interesse
                  </p>
                  <p className="font-black text-xl italic tracking-tighter">
                    {selectedImovel.propostas}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-blue-950 rounded-3xl text-slate-50 relative overflow-hidden">
                <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-4 text-sky-700">
                  Resumo da Atividade
                </h4>
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

        {/* MODAL 2: CRIAR NOVA PROPRIEDADE */}
        <Modal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
          title="Adicionar Propriedade"
          icon="fas fa-bullhorn"
        >
          <form
            onSubmit={handleSubmit(onSubmitProperty)}
            className="space-y-6 animate-in fade-in zoom-in-95 duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* TÍTULO */}
              <div className="col-span-full">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Título do Anúncio
                </label>

                <input
                  type="text"
                  placeholder="Ex: Vivenda V3 no Projeto Nova Vida"
                  {...register("title")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />

                {errors.title && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* TIPO */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Tipo de Imóvel
                </label>

                <select
                  {...register("property_type")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer uppercase"
                >
                  <option value="">Selecionar</option>
                  <option value="VIVENDA">Vivenda</option>
                  <option value="APARTAMENTO">Apartamento</option>
                  <option value="TERRENO">Terreno</option>
                  <option value="LOJA">Loja</option>
                  <option value="ESCRITORIO">Escritório</option>
                </select>

                {errors.property_type && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.property_type.message}
                  </p>
                )}
              </div>

              {/* FINALIDADE */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Finalidade
                </label>

                <select
                  {...register("purpose")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer uppercase"
                >
                  <option value="">Selecionar</option>
                  <option value="VENDA">Venda</option>
                  <option value="ARRENDAMENTO">Arrendamento</option>
                </select>

                {errors.purpose && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.purpose.message}
                  </p>
                )}
              </div>

              {/* PROVÍNCIA */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Província
                </label>

                <select
                  {...register("province")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer uppercase"
                >
                  <option value="">Selecionar</option>

                  <option value="BENGO">Bengo</option>
                  <option value="BENGUELA">Benguela</option>
                  <option value="BIE">Bié</option>
                  <option value="CABINDA">Cabinda</option>
                  <option value="CUANDO">Cuando</option>
                  <option value="CUBANGO">Cubango</option>
                  <option value="CUANZA NORTE">Cuanza Norte</option>
                  <option value="CUANZA SUL">Cuanza Sul</option>
                  <option value="CUNENE">Cunene</option>
                  <option value="HUAMBO">Huambo</option>
                  <option value="HUILA">Huíla</option>
                  <option value="ICOLO E BENGO">Icolo e Bengo</option>
                  <option value="LUANDA">Luanda</option>
                  <option value="LUNDA NORTE">Lunda Norte</option>
                  <option value="LUNDA SUL">Lunda Sul</option>
                  <option value="MALANJE">Malanje</option>
                  <option value="MOXICO">Moxico</option>
                  <option value="MOXICO LESTE">Moxico Leste</option>
                  <option value="NAMIBE">Namibe</option>
                  <option value="UIJE">Uíge</option>
                  <option value="ZAIRE">Zaire</option>
                </select>

                {errors.province && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.province.message}
                  </p>
                )}
              </div>

              {/* CIDADE */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Cidade
                </label>

                <input
                  type="text"
                  placeholder="Ex: Talatona"
                  {...register("city")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />

                {errors.city && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* BAIRRO */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Bairro / Distrito
                </label>

                <input
                  type="text"
                  placeholder="Ex: Benfica"
                  {...register("district")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />

                {errors.district && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.district.message}
                  </p>
                )}
              </div>

              {/* ENDEREÇO */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Endereço
                </label>

                <input
                  type="text"
                  placeholder="Rua principal, casa nº 12"
                  {...register("address")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase"
                />

                {errors.address && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* PREÇO */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Preço (Kz)
                </label>

                <input
                  type="number"
                  placeholder="25000000"
                  {...register("price")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />

                {errors.price && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* ÁREA */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Área (m²)
                </label>

                <input
                  type="number"
                  placeholder="120"
                  {...register("area")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />

                {errors.area && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.area.message}
                  </p>
                )}
              </div>

              {/* QUARTOS */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Quartos
                </label>

                <input
                  type="number"
                  placeholder="3"
                  {...register("bedrooms")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
                {errors.bedrooms && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.bedrooms.message}
                  </p>
                )}
              </div>

              {/* BANHEIROS */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Banheiros
                </label>

                <input
                  type="number"
                  placeholder="2"
                  {...register("bathrooms")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
                {errors.bathrooms && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>

              {/* GARAGEM */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Garagem
                </label>

                <input
                  type="number"
                  placeholder="2"
                  {...register("garages")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
                {errors.garages && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.garages.message}
                  </p>
                )}
              </div>

              {/* MOBILADO */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Mobilado
                </label>

                <select
                  {...register("furnished")}
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer uppercase"
                >
                  <option value="">Selecionar</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
                {errors.furnished && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.furnished.message}
                  </p>
                )}
              </div>

              {/* DESCRIÇÃO */}
              <div className="col-span-full">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Descrição
                </label>

                <textarea
                  rows={6}
                  placeholder="Descreva o imóvel..."
                  {...register("description")}
                  className="w-full bg-slate-100 border border-slate-300 rounded-2xl p-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all uppercase resize-none"
                />

                {errors.description && (
                  <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            {/* IMAGENS */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Fotos do Imóvel
              </label>

              <label className="border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-slate-50 group hover:border-sky-700 transition-all cursor-pointer">
                <i className="fas fa-camera text-2xl text-slate-400 group-hover:text-sky-700 mb-2"></i>

                <p className="text-[9px] font-black text-slate-500 uppercase">
                  Clique para carregar fotos
                </p>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImagesChange}
                  className="hidden"
                />
              </label>

              {errors.images && (
                <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                  {errors.images.message}
                </p>
              )}

              {previewImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previewImages.map((image, index) => (
                    <div
                      key={index}
                      className="h-28 rounded-2xl overflow-hidden border border-slate-300"
                    >
                      <img
                        src={image}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* VÍDEO */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Vídeo do Imóvel
              </label>

              <label className="border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center bg-slate-50 group hover:border-sky-700 transition-all cursor-pointer">
                <i className="fas fa-video text-2xl text-slate-400 group-hover:text-sky-700 mb-2"></i>

                <p className="text-[9px] font-black text-slate-500 uppercase">
                  Clique para carregar vídeo
                </p>

                {videoName && (
                  <span className="mt-3 text-[10px] font-black text-sky-700 uppercase">
                    {videoName}
                  </span>
                )}

                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>

              {errors.video && (
                <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">
                  {errors.video.message}
                </p>
              )}
            </div>

            {/* BOTÕES */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting
                  ? "PUBLICANDO ANÚNCIO..."
                  : "PUBLICAR ANÚNCIO AGORA"}
              </button>

              <button
                type="button"
                onClick={() => setOpenAddModal(false)}
                className="w-full h-10 mt-2 text-slate-400 font-black uppercase text-[8px] hover:text-blue-950 transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        </Modal>

        {/* MODAL 3: PATROCINAR PROPRIEDADE */}
        <Modal
          isOpen={openSponsorModal}
          onClose={() => setOpenSponsorModal(false)}
          title="Patrocinar Propriedade"
          icon="fas fa-crown"
        >
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ID do Imóvel */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  ID do Imóvel
                </label>
                <input
                  type="text"
                  placeholder="Ex: #IMO-123"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
              </div>

              {/* ID do Patrocinador */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  ID do Patrocinador
                </label>
                <input
                  type="text"
                  placeholder="Ex: #PAT-890"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
              </div>

              {/* Tipo de Patrocínio */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Tipo de Patrocínio
                </label>
                <select className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer">
                  <option>---------</option>
                  <option>Básico</option>
                  <option>Premium</option>
                  <option>Ultimate</option>
                  <option>Destaque</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Status
                </label>
                <select className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all appearance-none cursor-pointer">
                  <option>Pendente</option>
                  <option>Ativo</option>
                  <option>Expirado</option>
                  <option>Cancelado</option>
                  <option>Suspenso</option>
                </select>
              </div>

              {/* Data de Início */}
              <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Data de Início (Data)
                  </label>
                  <input
                    type="date"
                    className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Data de Início (Hora)
                  </label>
                  <input
                    type="time"
                    className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                  />
                </div>
              </div>

              {/* Data de Término */}
              <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Data de Término (Data)
                  </label>
                  <input
                    type="date"
                    className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Data de Término (Hora)
                  </label>
                  <input
                    type="time"
                    className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                  />
                </div>
              </div>

              {/* Preço */}
              <div className="col-span-full">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                  Preço (Kz)
                </label>
                <input
                  type="text"
                  placeholder="Ex: 50.000 Kz"
                  className="w-full h-14 bg-slate-100 border border-slate-300 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-sky-700 transition-all"
                />
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="pt-4">
              <button className="w-full h-16 bg-sky-700 text-slate-50 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-700/20 cursor-pointer">
                Confirmar Patrocínio
              </button>
              <button
                onClick={() => setOpenSponsorModal(false)}
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
