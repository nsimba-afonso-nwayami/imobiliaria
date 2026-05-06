import Sobre from "../../assets/img/sobre.jpg";

export default function BannerSobre() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden flex items-center">
      
      {/* Imagem de Fundo com Zoom Suave */}
      <div className="absolute inset-0">
        <img
          src={Sobre}
          alt="Sobre a ImobiPremium"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        {/* Camadas de Overlay para Legibilidade Premium */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-transparent to-blue-950/30"></div>
      </div>

      {/* Conteúdo Estruturado */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          
          {/* Badge Industrial com Glassmorphism */}
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl mb-10 translate-y-4 animate-fade-in-up">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </div>
            <p className="text-white font-black uppercase tracking-[0.5em] text-[10px]">
              Nossa História & Essência
            </p>
          </div>

          {/* Título de Alto Impacto: Mantendo seu Texto Original */}
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 animate-fade-in-up delay-100">
            Construindo confiança no <br />
            <span className="text-sky-500 italic select-none">mercado imobiliário</span>
          </h1>

          {/* Subtítulo com Barra de Destaque */}
          <div className="flex gap-6 animate-fade-in-up delay-200">
            <div className="w-1.5 h-auto bg-sky-700 rounded-full hidden md:block"></div>
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium italic">
              A ImobiPremium nasceu para redefinir o padrão de investimento imobiliário em Angola, unindo segurança, transparência e exclusividade.
            </p>
          </div>

        </div>
      </div>

      {/* Detalhe de Rodapé do Banner (Conexão Industrial) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-blue-950 to-transparent z-20"></div>
      
      {/* Elemento Decorativo: Coordenadas ou Grid Sutil */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:block">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[1em] rotate-90 origin-right">
          Luanda • Angola • 2026
        </p>
      </div>

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
