import { useState } from "react";
import { Link } from "react-router-dom";

import imovel1 from "../../assets/img/Imovel1.jpg";
import imovel2 from "../../assets/img/Imovel2.jpg";

export default function Carrinho() {
  const [itens, setItens] = useState([
    {
      id: 1,
      title: "Penthouse de Luxo",
      price: "250M Kz",
      location: "Talatona, Luanda",
      image: imovel1,
      qty: 1,
    },
    {
      id: 2,
      title: "Moradia Executiva",
      price: "320M Kz",
      location: "Kilamba, Luanda",
      image: imovel2,
      qty: 1,
    },
  ]);

  const aumentarQtd = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const diminuirQtd = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removerItem = (id) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  return (
    <>
      <title>Carrinho | Imobiliária</title>

      <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-16">
            <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              Carrinho de Interesse
            </p>

            <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Os seus <span className="text-sky-700">imóveis selecionados</span>
            </h1>

            <p className="text-neutral-600 text-lg italic border-l-4 border-sky-700 pl-6">
              Revise os ativos escolhidos e finalize o pedido de contacto com um consultor.
            </p>

            {/* botão limpar carrinho */}
            {itens.length > 0 && (
              <button
                onClick={limparCarrinho}
                className="cursor-pointer mt-6 text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-700 transition"
              >
                Limpar carrinho
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Lista */}
            <div className="lg:col-span-2 space-y-8">

              {itens.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 h-60 md:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-1 p-8 flex flex-col justify-between">

                    <div>
                      <h3 className="text-blue-950 text-2xl font-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-neutral-500 text-sm flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-sky-700"></i>
                        {item.location}
                      </p>
                    </div>

                    {/* QUANTIDADE */}
                    <div className="flex items-center gap-4 mt-6">

                      <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => diminuirQtd(item.id)}
                          className="cursor-pointer px-4 py-2 hover:bg-neutral-100"
                        >
                          <i className="fa-solid fa-minus text-xs"></i>
                        </button>

                        <span className="px-4 font-black text-blue-950">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => aumentarQtd(item.id)}
                          className="cursor-pointer px-4 py-2 hover:bg-neutral-100"
                        >
                          <i className="fa-solid fa-plus text-xs"></i>
                        </button>
                      </div>

                    </div>

                    <div className="flex items-center justify-between mt-6">

                      <span className="text-2xl font-black text-blue-950">
                        {item.price}
                      </span>

                      {/* remover com ícone */}
                      <button
                        onClick={() => removerItem(item.id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 transition"
                      >
                        <i className="fa-solid fa-trash text-sm"></i>
                      </button>

                    </div>

                  </div>
                </div>
              ))}

              {itens.length === 0 && (
                <div className="bg-white p-16 rounded-3xl text-center border border-neutral-100">
                  <p className="text-neutral-500 font-medium">
                    O seu carrinho está vazio.
                  </p>

                  <Link
                    to="/imoveis"
                    className="inline-flex mt-6 bg-blue-950 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-sky-700 transition"
                  >
                    Explorar Imóveis
                  </Link>
                </div>
              )}

            </div>

            {/* Resumo (inalterado) */}
            <div className="lg:sticky lg:top-32 h-fit">

              <div className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

                <h2 className="text-blue-950 text-2xl font-black mb-8">
                  Resumo do Pedido
                </h2>

                <div className="space-y-4 border-b border-neutral-100 pb-6 mb-6">

                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Imóveis selecionados</span>
                    <span className="font-black text-blue-950">{itens.length}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Taxa de consultoria</span>
                    <span className="font-black text-blue-950">0%</span>
                  </div>

                </div>

                <div className="flex justify-between mb-10">
                  <span className="text-neutral-500">Total estimado</span>
                  <span className="text-3xl font-black text-blue-950">
                    Consultar
                  </span>
                </div>

                <button className="w-full cursor-pointer h-16 bg-blue-950 hover:bg-sky-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 mb-4">
                  Finalizar Pedido
                </button>

                <Link
                  to="/imoveis"
                  className="w-full h-16 flex items-center justify-center border border-neutral-200 rounded-2xl font-black uppercase tracking-[0.2em] text-xs text-blue-950 hover:border-sky-700 hover:text-sky-700 transition"
                >
                  Continuar a explorar
                </Link>

                <p className="text-[10px] text-neutral-400 text-center mt-6 uppercase tracking-widest">
                  Atendimento personalizado em até 24h
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
