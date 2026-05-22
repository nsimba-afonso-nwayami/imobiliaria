import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Digite um email válido"),

  user_type: yup
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

  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
