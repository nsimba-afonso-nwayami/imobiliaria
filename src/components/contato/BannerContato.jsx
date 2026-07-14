import Contato from "../../assets/img/contato.jpg";

export default function BannerContato() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden flex items-center">

      {/* Imagem de Fundo com Zoom Suave */}
      <div className="absolute inset-0">
        <img
          src={Contato}
          alt="Contacte a ImobiPremium"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />

        {/* Overlays para contraste premium */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/85 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-transparent to-blue-950/40"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">

          {/* Título */}
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 animate-fade-in-up delay-100">
            Estamos prontos <br />
            <span className="text-sky-500 italic">para te atender</span>
          </h1>

          {/* Subtítulo */}
          <div className="flex gap-6 animate-fade-in-up delay-200">
            <div className="w-1.5 h-auto bg-sky-700 rounded-full hidden md:block"></div>

            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium italic">
              Fale com um consultor especializado e receba apoio personalizado para encontrar o imóvel ideal ou investir com segurança em Angola.
            </p>
          </div>

        </div>
      </div>

      {/* Rodapé do banner */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-blue-950 to-transparent z-20"></div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:block">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[1em] rotate-90 origin-right">
          Suporte • Consultoria • Angola
        </p>
      </div>

      {/* Animações */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}} />

    </section>
  );
}
