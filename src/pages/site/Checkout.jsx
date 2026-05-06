import { useState } from "react";
import { Link } from "react-router-dom";

import imovel1 from "../../assets/img/imovel1.jpg";

export default function Checkout() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    metodo: "transferencia",
  });

  const itens = [
    {
      id: 1,
      title: "Penthouse de Luxo",
      price: "250M Kz",
      location: "Talatona, Luanda",
      image: imovel1,
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <title>Checkout | Imobiliária</title>

      <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="mb-16">
            <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              Finalizar Compra
            </p>

            <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Checkout de <span className="text-sky-700">Compra</span>
            </h1>

            <p className="text-neutral-600 text-lg italic border-l-4 border-sky-700 pl-6">
              Preencha os seus dados para concluir a compra do imóvel selecionado.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FORMULÁRIO */}
            <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

              <h2 className="text-blue-950 text-2xl font-black mb-8">
                Dados do Comprador
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-sky-700"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-sky-700"
                />

                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  className="h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-sky-700"
                />

                <input
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  placeholder="Cidade"
                  className="h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-sky-700"
                />
              </div>

              {/* MÉTODO DE PAGAMENTO */}
              <div className="mt-10">
                <h3 className="text-blue-950 font-black mb-4">
                  Método de Pagamento
                </h3>

                <div className="space-y-3">

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="metodo"
                      value="transferencia"
                      checked={form.metodo === "transferencia"}
                      onChange={handleChange}
                    />
                    <span className="text-sm font-medium">
                      Transferência Bancária
                    </span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="metodo"
                      value="cash"
                      onChange={handleChange}
                    />
                    <span className="text-sm font-medium">
                      Pagamento à vista
                    </span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="metodo"
                      value="financiamento"
                      onChange={handleChange}
                    />
                    <span className="text-sm font-medium">
                      Financiamento bancário
                    </span>
                  </label>

                </div>
              </div>

              {/* botão */}
              <button className="cursor-pointer mt-10 w-full h-16 bg-blue-950 hover:bg-sky-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500">
                Confirmar Compra
              </button>

              <Link
                to="/carrinho"
                className="block mt-6 text-center text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-sky-700"
              >
                Voltar ao carrinho
              </Link>

            </div>

            {/* RESUMO */}
            <div className="lg:sticky lg:top-32 h-fit">

              <div className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

                <h2 className="text-blue-950 text-2xl font-black mb-8">
                  Resumo da Compra
                </h2>

                {itens.map((item) => (
                  <div key={item.id} className="flex gap-4 mb-6">
                    <img
                      src={item.image}
                      className="w-20 h-20 object-cover rounded-xl"
                      alt={item.title}
                    />

                    <div>
                      <p className="font-black text-blue-950 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {item.location}
                      </p>
                      <p className="text-sky-700 font-black text-sm mt-1">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-neutral-100 pt-6 mt-6">

                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-500">Itens</span>
                    <span className="font-black">{itens.length}</span>
                  </div>

                  <div className="flex justify-between text-sm mb-6">
                    <span className="text-neutral-500">Taxa administrativa</span>
                    <span className="font-black">Incluída</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-500">Total</span>
                    <span className="text-2xl font-black text-blue-950">
                      {itens[0].price}
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
