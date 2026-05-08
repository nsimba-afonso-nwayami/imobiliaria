import { useState } from "react";
import InvestidorLayout from "./components/InvestidorLayout";

export default function ConfiguracoesInvestidor() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <title>Configurações de Investidor | Imobi Premium</title>

      <InvestidorLayout title="Painel de Controle">
        <section className="w-full space-y-8 pb-12">
          
          {/* Cabeçalho da Seção */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
              Investor Profile Settings
            </p>
            <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
              Configurações da Conta
            </h2>
          </div>

          {/* SEÇÃO 0: GESTÃO DE IDENTIDADE */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-neutral-400 p-1 bg-white">
                  <img 
                    src="https://ui-avatars.com/api/?name=Investidor+Premium&background=002855&color=fff&size=128" 
                    alt="Foto de Perfil" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-900 text-white rounded-xl border-4 border-neutral-50 flex items-center justify-center hover:bg-blue-800 transition-all cursor-pointer">
                  <i className="fa-solid fa-camera text-xs"></i>
                </button>
              </div>

              <div className="flex-1 text-center md:text-left space-y-2">
                <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Identidade Visual do Perfil</h3>
                <p className="text-[10px] font-bold text-neutral-400 uppercase leading-relaxed max-w-sm">
                  Esta imagem será utilizada em seus relatórios de performance e dossiês de reserva de ativos.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <button className="px-4 py-2 bg-neutral-100 border border-neutral-400 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer">
                    Trocar Avatar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO 1: DADOS FISCAIS E PESSOAIS */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-briefcase text-blue-800 text-lg"></i>
              <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Dados do Investidor (Contratual)</h3>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Titular da Conta / Razão Social</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="CLÁUDIO PINTO"
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">NIF (Número de Identificação Fiscal)</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="5001234567"
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">E-mail para Relatórios e Notas</label>
                <input 
                  type="email" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="INVESTIMENTOS@CLAUDIO.AO"
                />
              </div>

              <div className="space-y-2 lg:col-span-1">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Moeda Preferencial</label>
                <select className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all">
                  <option>KWANZA (AOA)</option>
                  <option>DÓLAR (USD)</option>
                </select>
              </div>

              <div className="space-y-2 lg:col-span-1">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Perfil de Risco</label>
                <input 
                  type="text" 
                  disabled
                  className="w-full h-14 bg-neutral-200 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none opacity-60 uppercase"
                  defaultValue="CONSERVADOR / IMOBILIÁRIO"
                />
              </div>

              <div className="lg:col-span-4 pt-4">
                <button className="h-14 px-10 bg-blue-900 text-neutral-50 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-lg cursor-pointer">
                  Atualizar Dados de Facturação
                </button>
              </div>
            </form>
          </div>

          {/* PREFERÊNCIAS DE INVESTIMENTO E NOTIFICAÇÕES */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-bell text-blue-800 text-lg"></i>
              <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Alertas de Mercado</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { label: "Novas Oportunidades em Leilão", desc: "Receber e-mail instantâneo sobre novos ativos recuperados." },
                 { label: "Relatório de Rendimentos Mensal", desc: "Notificar via WhatsApp quando o extrato estiver disponível." },
                 { label: "Alertas de Valorização de Zona", desc: "Relatórios de mercado sobre Luanda e arredores." },
                 { label: "Comunicações de Condomínio", desc: "Alertas de manutenção e assembleias das unidades." }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-4 p-4 border border-neutral-400 rounded-2xl bg-white hover:border-blue-800 transition-all">
                    <input type="checkbox" defaultChecked className="mt-1 accent-blue-900 w-4 h-4" />
                    <div>
                      <p className="text-[10px] font-black text-neutral-700 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-[9px] font-bold text-neutral-400 uppercase italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* FORMULÁRIO 2: SEGURANÇA */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-shield-halved text-blue-800 text-lg"></i>
              <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Segurança de Ativos</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Senha Autenticada</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Nova Senha de Acesso</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Chave de Segurança 2FA</label>
                  <div className="flex h-14 items-center bg-neutral-200 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black text-blue-800 tracking-widest">
                    ATIVADO (GOOGLE AUTH)
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
                <button className="w-full md:w-auto h-14 px-10 bg-neutral-700 text-neutral-50 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-lg cursor-pointer">
                  Salvar Novas Credenciais
                </button>
              </div>
            </form>
          </div>

          {/* SEÇÃO PERIGOSA */}
          <div className="p-8 border border-red-100 rounded-4xl bg-red-50/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">Encerrar Relação Comercial</h4>
              <p className="text-[10px] font-bold text-neutral-500 uppercase italic">Isso não encerrará seus contratos ativos, apenas o acesso ao painel digital.</p>
            </div>
            <button className="h-12 px-6 border border-red-200 text-red-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              Desativar Painel
            </button>
          </div>

        </section>
      </InvestidorLayout>
    </>
  );
}
