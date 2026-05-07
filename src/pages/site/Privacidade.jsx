import { Link } from "react-router-dom";

export default function Privacidade() {
  return (
    <>
      <title>Privacidade | Imobiliária</title>

      <section className="py-32 px-6 bg-neutral-100 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="mb-16">
            <p className="text-sky-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              Legal
            </p>

            <h1 className="text-blue-950 text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Política de <span className="text-sky-700">Privacidade</span>
            </h1>

            <p className="text-neutral-600 text-lg italic border-l-4 border-sky-700 pl-6">
              Compromisso com a proteção dos seus dados pessoais e transparência no uso da plataforma.
            </p>
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.08)] border border-neutral-100 p-10 space-y-10 leading-relaxed text-neutral-600">

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                1. Introdução
              </h2>
              <p>
                Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos os seus dados
                pessoais ao utilizar a nossa plataforma imobiliária.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                2. Dados que recolhemos
              </h2>
              <p>
                Podemos recolher informações como nome, email, telefone, localização e preferências de imóveis
                quando utiliza os nossos formulários ou serviços.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                3. Utilização dos dados
              </h2>
              <p>
                Os dados são utilizados exclusivamente para melhorar a experiência do utilizador, facilitar
                o contacto com consultores e personalizar recomendações de imóveis.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                4. Proteção de dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados
                contra acesso não autorizado, alteração ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                5. Partilha de informações
              </h2>
              <p>
                Não vendemos nem partilhamos os seus dados pessoais com terceiros, exceto quando necessário
                para prestação de serviços ou exigências legais.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                6. Direitos do utilizador
              </h2>
              <p>
                O utilizador pode solicitar acesso, alteração ou eliminação dos seus dados pessoais a qualquer momento.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                7. Contacto
              </h2>
              <p>
                Para qualquer questão relacionada com privacidade, entre em contacto através da nossa página de suporte.
              </p>
            </div>

          </div>

          {/* BOTÃO VOLTAR */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              className="bg-blue-950 text-white px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-950/20 hover:bg-sky-700 transition"
            >
              Voltar ao início
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
