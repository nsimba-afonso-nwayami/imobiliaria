import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { loginSchema } from "../../validations/loginValidation";
import { loginUser } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const btnPrimary =
    "w-full bg-blue-950 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-950/20 hover:bg-sky-700 transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("DADOS LOGIN:");
      console.log(data);

      const response = await loginUser(data);

      console.log("LOGIN SUCESSO:");
      console.log(response);

      toast.success("Login realizado com sucesso!");

      // REDIRECIONAMENTO
      if (response.user?.user_type === "vendor") {
        navigate("/dashboard/vendedor/");
      } else if (response.user?.user_type === "admin") {
        navigate("/dashboard/admin/");
      } else {
        navigate("/dashboard/comprador/");
      }

    } catch (error) {
      console.error(error);

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
        toast.error("Email ou senha inválidos");
      }
    }
  };

  return (
    <>
      <title>Entrar | Imobiliária</title>

      <section className="py-24 bg-neutral-100 px-6 flex justify-center items-center relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-size-[34px_34px]"></div>
        </div>

        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.08)] p-10 relative border border-neutral-100 z-10">

          {/* LOGO */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-950 text-white p-3 rounded-xl text-xl shadow-lg shadow-blue-950/20">
              <i className="fa-solid fa-building"></i>
            </div>
          </div>

          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-3xl font-black text-blue-950 tracking-tight">
              Bem-vindo de volta
            </h1>

            <p className="mt-2 text-neutral-500 text-sm font-medium">
              Entre na sua conta para aceder ao seu painel
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">

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

            {/* SENHA */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-black text-blue-950 uppercase tracking-widest">
                  Senha
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-black text-sky-700 hover:text-blue-950 transition"
                >
                  Esqueci a senha
                </Link>
              </div>

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

            {/* BOTÃO */}
            <div className="pt-2">
              <button type="submit" disabled={isSubmitting} className={btnPrimary}>
                <i className="fa-solid fa-right-to-bracket"></i>
                {isSubmitting ? "Entrando..." : "Entrar"}
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

          {/* REGISTO */}
          <p className="text-center text-sm text-neutral-500 font-medium">
            Ainda não tens conta?{" "}
            <Link
              to="/register"
              className="text-sky-700 font-black hover:text-blue-950 transition"
            >
              Criar conta
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}
