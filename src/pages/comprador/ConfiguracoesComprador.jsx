import { useState } from "react";
import CompradorLayout from "./components/CompradorLayout";

export default function ConfiguracoesComprador() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <title>Configurações de Conta | Imobi Premium</title>

      <CompradorLayout title="Painel de Controle">
        <section className="w-full space-y-8 pb-12">
          
          {/* Cabeçalho da Seção */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800 mb-1">
              Account Management
            </p>
            <h2 className="text-3xl font-black text-neutral-700 tracking-tighter italic">
              Configurações do Perfil
            </h2>
          </div>

          {/* SEÇÃO 0: GESTÃO DE IDENTIDADE (FOTO) */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-neutral-400 p-1 bg-white">
                  <img 
                    src="https://ui-avatars.com/api/?name=Claudio+Pinto&background=002855&color=fff&size=128" 
                    alt="Foto de Perfil" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-900 text-white rounded-xl border-4 border-neutral-50 flex items-center justify-center hover:bg-blue-800 transition-all cursor-pointer">
                  <i className="fa-solid fa-camera text-xs"></i>
                </button>
              </div>

              <div className="flex-1 text-center md:text-left space-y-2">
                <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Avatar do Cliente</h3>
                <p className="text-[10px] font-bold text-neutral-400 uppercase leading-relaxed max-w-sm">
                  Suba uma imagem profissional para identificação em contratos e visitas agendadas. Formatos suportados: JPG, PNG.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <button className="px-4 py-2 bg-neutral-100 border border-neutral-400 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer">
                    Alterar Foto
                  </button>
                  <button className="px-4 py-2 text-red-600 text-[9px] font-black uppercase tracking-widest hover:underline cursor-pointer">
                    Remover
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO 1: DADOS PESSOAIS (100% LARGURA) */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-user-gear text-blue-800 text-lg"></i>
              <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Informações Pessoais</h3>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="CLÁUDIO PINTO"
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Endereço de E-mail</label>
                <input 
                  type="email" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="CLAUDIO.PINTO@EMAIL.COM"
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Telefone de Contacto</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="+244 923 000 000"
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Localização Principal</label>
                <input 
                  type="text" 
                  className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 uppercase transition-all"
                  defaultValue="KILAMBA, LUANDA"
                />
              </div>

              <div className="lg:col-span-4 pt-4">
                <button className="h-14 px-10 bg-blue-900 text-neutral-50 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-lg cursor-pointer">
                  Salvar Alterações do Perfil
                </button>
              </div>
            </form>
          </div>

          {/* FORMULÁRIO 2: SEGURANÇA E SENHA (100% LARGURA) */}
          <div className="bg-neutral-50 border border-neutral-400 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <i className="fa-solid fa-shield-halved text-blue-800 text-lg"></i>
              <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest">Segurança da Conta</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Senha Atual</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Nova Senha</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest ml-1 italic">Confirmar Nova Senha</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-14 bg-neutral-100 border border-neutral-400 rounded-2xl px-5 text-[11px] font-black tracking-widest outline-none focus:border-blue-800 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
                <button className="w-full md:w-auto h-14 px-10 bg-neutral-700 text-neutral-50 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-lg cursor-pointer">
                  Atualizar Credenciais de Acesso
                </button>
                <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-tighter italic">
                  * A segurança da sua conta é nossa prioridade técnica.
                </p>
              </div>
            </form>
          </div>

          {/* SEÇÃO PERIGOSA */}
          <div className="p-8 border border-red-100 rounded-4xl bg-red-50/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">Zona Crítica</h4>
              <p className="text-[10px] font-bold text-neutral-500 uppercase italic">A exclusão da conta é um processo irreversível para o cliente.</p>
            </div>
            <button className="h-12 px-6 border border-red-200 text-red-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              Eliminar Registo
            </button>
          </div>

        </section>
      </CompradorLayout>
    </>
  );
}
