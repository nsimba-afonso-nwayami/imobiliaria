import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { registerSchema } from "../../validations/authValidation";
import { registerUser } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const btnPrimary =
    "w-full bg-blue-950 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-950/20 hover:bg-sky-700 transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2";

     const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
      try {
        const payload = {
          username: data.username,
          email: data.email,
          user_type: data.user_type,
          password: data.password,
          password_confirm: data.password_confirm,
        };

        console.log("DADOS ENVIADOS:");
        console.log(payload);

        const response = await registerUser(payload);

        console.log("RESPOSTA SUCESSO:");
        console.log(response.data);

        toast.success(response.message || "Conta criada com sucesso!");

        navigate("/login");
      } catch (error) {
        console.error("ERRO COMPLETO:");
        console.error(error);

        console.log("ERROR RESPONSE:");
        console.log(error.response);

        console.log("ERROR DATA:");
        console.log(error.response?.data);

        if (error.response?.data) {
          const errors = error.response.data;

          Object.keys(errors).forEach((key) => {
            if (Array.isArray(errors[key])) {
              toast.error(errors[key][0]);
            } else {
              toast.error(errors[key]);
            }
          });
        } else {
          toast.error("Erro ao criar conta");
        }
      }
    };

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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* NOME */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Nome completo
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  {...register("username")}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* TELEFONE */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Telefone
                </label>

                <input
                  type="tel"
                  placeholder="+244 9XX XXX XXX"
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* TIPO */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Perfil
                </label>

                <select {...register("user_type")} className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50 cursor-pointer">
                  <option>Selecionar perfil</option>
                  <option value="client">Cliente</option>
                  <option value="vendor">Vendedor</option>
                </select>
                {errors.user_type && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.user_type.message}
                  </p>
                )}
              </div>

              {/* SENHA */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* CONFIRMAR SENHA */}
              <div className="space-y-2">
                <label className="text-sm font-black text-blue-950 ml-1 uppercase tracking-widest">
                  Confirmar senha
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password_confirm")}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl outline-none transition-all focus:border-sky-700 bg-neutral-50"
                />
                {errors.password_confirm && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.password_confirm.message}
                  </p>
                )}
              </div>

            </div>

            {/* BOTÃO */}
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting} className={btnPrimary}>
                <i className="fa-solid fa-user-plus"></i>
                {isSubmitting ? "Criando conta..." : "Criar conta"}
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
