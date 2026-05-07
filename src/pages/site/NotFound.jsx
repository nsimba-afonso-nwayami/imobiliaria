import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Imobi Premium</title>

      <section className="min-h-screen bg-neutral-100 px-6 flex items-center justify-center relative overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-950/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white border border-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex items-center justify-center">
              <i className="fa-solid fa-building-circle-xmark text-4xl text-sky-700"></i>
            </div>
          </div>

          {/* Error Code */}
          <p className="text-sky-700 font-black uppercase tracking-[0.5em] text-xs mb-4">
            erro 404
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tight leading-none mb-6">
            Página não <span className="text-sky-700">encontrada</span>
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            A página que procura não existe, foi removida ou o endereço digitado está incorreto.
            Continue a explorar os melhores imóveis com a Imobi Premium.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/"
              className="h-14 px-8 bg-blue-950 hover:bg-sky-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center transition-all duration-300"
            >
              Voltar ao início
            </Link>

            <Link
              to="/imoveis"
              className="h-14 px-8 border border-neutral-200 hover:border-sky-700 text-blue-950 hover:text-sky-700 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center transition-all duration-300"
            >
              Explorar imóveis
            </Link>

          </div>

          {/* Footer Small */}
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black mt-10">
            Imobi Premium • Plataforma imobiliária premium
          </p>

        </div>
      </section>
    </>
  );
}
