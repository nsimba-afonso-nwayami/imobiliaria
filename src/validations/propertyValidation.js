import * as yup from "yup";

const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const SUPPORTED_VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
  "video/ogg",
];

export const propertySchema = yup.object({
  title: yup
    .string()
    .required("O título é obrigatório")
    .min(10, "O título deve ter no mínimo 10 caracteres")
    .max(120, "O título deve ter no máximo 120 caracteres"),

  property_type: yup
    .string()
    .required("Selecione o tipo do imóvel"),

  purpose: yup
    .string()
    .required("Selecione a finalidade do imóvel"),

  province: yup
    .string()
    .required("A província é obrigatória"),

  city: yup
    .string()
    .required("A cidade é obrigatória"),

  district: yup
    .string()
    .required("O bairro/zona é obrigatório"),

  address: yup
    .string()
    .required("O endereço é obrigatório")
    .min(5, "Informe um endereço válido"),

  price: yup
    .number()
    .typeError("Preço inválido")
    .positive("O preço deve ser positivo")
    .required("O preço é obrigatório"),

  bedrooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("property_type", {
      is: (value) =>
        ["house", "apartment", "office"].includes(value),
      then: (schema) =>
        schema
          .required("Número de quartos é obrigatório")
          .typeError("Número de quartos inválido")
          .min(0)
          .max(100),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),

  bathrooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("property_type", {
      is: (value) =>
        ["house", "apartment", "office"].includes(value),
      then: (schema) =>
        schema
          .required("Número de banheiros é obrigatório")
          .typeError("Número de banheiros inválido")
          .min(0, "Número inválido")
          .max(100, "Número muito alto"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),

  garages: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("property_type", {
      is: (value) =>
        ["house", "office"].includes(value),
      then: (schema) =>
        schema
          .required("Número de garagens é obrigatório")
          .typeError("Número de garagens inválido")
          .min(0, "Número inválido")
          .max(100, "Número muito alto"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),

  area: yup
    .number()
    .typeError("Área inválida")
    .positive("Área inválida")
    .required("A área é obrigatória"),

  furnished: yup
    .string()
    .when("property_type", {
      is: (value) =>
        ["house", "apartment", "office"].includes(value),
      then: (schema) =>
        schema.required("Selecione se o imóvel é mobilado"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),

  description: yup
    .string()
    .required("A descrição é obrigatória")
    .min(30, "A descrição deve ter no mínimo 30 caracteres")
    .max(3000, "Descrição muito longa"),

  images: yup
    .mixed()
    .required("Adicione pelo menos uma imagem")
    .test(
      "required-images",
      "Adicione pelo menos uma imagem",
      (value) => value && value.length > 0
    )
    .test(
      "fileType",
      "Formato de imagem inválido",
      (value) => {
        if (!value) return true;

        return Array.from(value).every((file) =>
          SUPPORTED_IMAGE_TYPES.includes(file.type)
        );
      }
    )
    .test(
      "fileSize",
      "Cada imagem deve ter no máximo 5MB",
      (value) => {
        if (!value) return true;

        return Array.from(value).every(
          (file) => file.size <= 5 * 1024 * 1024
        );
      }
    ),

  video: yup
    .mixed()
    .nullable()
    .test(
      "videoType",
      "Formato de vídeo inválido",
      (value) => {
        if (!value) return true;

        return SUPPORTED_VIDEO_TYPES.includes(value.type);
      }
    )
    .test(
      "videoSize",
      "O vídeo deve ter no máximo 50MB",
      (value) => {
        if (!value) return true;

        return value.size <= 50 * 1024 * 1024;
      }
    ),
});
