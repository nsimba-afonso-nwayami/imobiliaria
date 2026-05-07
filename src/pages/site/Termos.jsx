import { Link } from "react-router-dom";

export default function Termos() {
  return (
    <>
      <title>Termos | Imobiliária</title>

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
              Termos de <span className="text-sky-700">Uso</span>
            </h1>

            <p className="text-neutral-600 text-lg italic border-l-4 border-sky-700 pl-6">
              Regras e condições para utilização da plataforma imobiliária.
            </p>
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.08)] border border-neutral-100 p-10 space-y-10 leading-relaxed text-neutral-600">

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao aceder e utilizar esta plataforma, o utilizador concorda com os presentes termos de uso.
                Caso não concorde, deve interromper a utilização imediatamente.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                2. Utilização da Plataforma
              </h2>
              <p>
                A plataforma destina-se exclusivamente à consulta, pesquisa e intermediação de imóveis.
                Qualquer uso indevido poderá resultar em suspensão da conta.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                3. Responsabilidades do Utilizador
              </h2>
              <p>
                O utilizador compromete-se a fornecer informações verdadeiras, atualizadas e completas
                ao utilizar os nossos formulários e serviços.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                4. Propriedade dos Conteúdos
              </h2>
              <p>
                Todos os conteúdos, imagens e materiais disponíveis na plataforma são propriedade da empresa
                ou de terceiros licenciados.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                Não nos responsabilizamos por decisões de compra ou investimento tomadas com base nas informações
                disponibilizadas na plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                6. Alterações dos Termos
              </h2>
              <p>
                Reservamo-nos o direito de atualizar estes termos a qualquer momento, sendo as alterações
                publicadas nesta mesma página.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 font-black text-xl mb-3">
                7. Contacto
              </h2>
              <p>
                Para qualquer questão relacionada com os termos de uso, contacte a nossa equipa de suporte.
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
