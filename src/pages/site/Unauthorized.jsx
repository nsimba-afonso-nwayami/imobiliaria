import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <>
      <title>403 | Não autorizado</title>

      <section className="min-h-screen bg-neutral-100 flex items-center justify-center px-6 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="relative z-10 max-w-xl w-full bg-white border border-neutral-100 rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.08)] p-10 text-center">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-3xl bg-red-100 flex items-center justify-center text-red-600 text-4xl shadow-inner">
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>

          {/* ERROR */}
          <h1 className="text-7xl font-black text-blue-950 tracking-tight">
            403
          </h1>

          <h2 className="mt-4 text-2xl font-black text-blue-950">
            Acesso não autorizado
          </h2>

          <p className="mt-4 text-neutral-500 leading-relaxed font-medium">
            Você não possui permissão para acessar esta página.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/"
              className="px-6 py-4 rounded-xl bg-blue-950 text-white font-black uppercase tracking-widest text-xs hover:bg-sky-700 transition-all duration-300"
            >
              Voltar ao início
            </Link>

            <Link
              to="/login"
              className="px-6 py-4 rounded-xl border border-neutral-200 bg-white text-blue-950 font-black uppercase tracking-widest text-xs hover:bg-neutral-50 transition-all duration-300"
            >
              Fazer login
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
