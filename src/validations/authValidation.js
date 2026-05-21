import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Digite um email válido"),

  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(9, "Telefone inválido"),

  profile: yup
    .string()
    .required("Selecione um perfil"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "A password deve ter letras e números"
    ),

  password_confirmation: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
