import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Digite um email válido"),

  password: yup
    .string()
    .required("A senha é obrigatória"),
});
