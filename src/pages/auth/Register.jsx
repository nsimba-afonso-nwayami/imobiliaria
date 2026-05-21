import { Link } from "react-router-dom";

export default function Register() {

  const btnPrimary =
    "w-full bg-blue-950 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-950/20 hover:bg-sky-700 transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2";

  return (
    <>
      <title>Criar conta | Imobiliária</title>

      <section className="min-h-screen py-24 bg-neutral-100 px-6 flex items-center justify-center relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.08)] p-10 relative border border-neutral-100 z-10">

          {/* LOGO */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-950 text-white p-3 rounded-xl text-xl shadow-lg shadow-blue-950/20">
              <i className="fa-solid fa-building"></i>
            </div>
          </div>

          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-3xl font-black text-blue-950 tracking-tight">
              Criar conta
            </h1>

            <p className="mt-2 text-neutral-500 text-sm font-medium">
              Junte-se ao nosso portfólio imobiliário
            </p>
          </div>

          {/* FORM */}
          <form className="mt-10 space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* NOME */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Nome completo
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
              </div>

              {/* TELEFONE */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Telefone
                </label>

                <input
                  type="tel"
                  placeholder="+244 9XX XXX XXX"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
              </div>

              {/* TIPO */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Perfil
                </label>

                <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50 cursor-pointer">
                  <option>Selecionar perfil</option>
                  <option>Comprador</option>
                  <option>Vendedor</option>
                </select>
              </div>

              {/* SENHA */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
              </div>

              {/* CONFIRMAR SENHA */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Confirmar senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
              </div>

            </div>

            {/* BOTÃO */}
            <div className="pt-4">
              <button type="button" className={btnPrimary}>
                <i className="fa-solid fa-user-plus"></i>
                Criar conta
              </button>
            </div>

          </form>

          {/* DIVISOR */}
          <div className="my-8 flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-100"></div>
            <span className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">
              ou
            </span>
            <div className="flex-1 h-px bg-neutral-100"></div>
          </div>

          {/* LOGIN */}
          <p className="text-center text-sm text-neutral-500 font-medium">
            Já tens conta?{" "}
            <Link
              to="/login"
              className="text-sky-700 font-black hover:text-blue-950 transition"
            >
              Fazer login
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}
