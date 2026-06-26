// TIPOS DE IMÓVEIS

export const propertyTypes = {
  house: "Vivenda / Casa",
  apartment: "Apartamento",
  land: "Terreno",
  office: "Escritório",
};

// TIPOS DE TRANSAÇÃO

export const transactionTypes = {
  sale: "Venda",
  rent: "Arrendamento",
  short_term_rent: "Curta Duração",
};

// FORMATAÇÕES

export const formatPrice = (price) => {
  if (!price) return "Sob consulta";

  return `${new Intl.NumberFormat("pt-AO", {
    maximumFractionDigits: 0,
  }).format(Number(price))} Kz`;
};

export const formatArea = (area) => {
  if (!area) return "--";

  return `${area} m²`;
};

// IMAGEM PRINCIPAL

export const getPropertyImage = (property) => {
  if (!property?.images?.length) {
    return "/placeholder-property.jpg";
  }

  return (
    property.images.find((img) => img.is_main)?.image ||
    property.images[0].image
  );
};

// VÍDEO

export const getPropertyVideo = (property) => {
  if (!property?.videos?.length) {
    return null;
  }

  return property.videos[0].video;
};

export const hasPropertyVideo = (property) => {
  return property?.videos?.length > 0;
};

// LOCALIZAÇÃO

export const getPropertyLocation = (property) => {
  return [
    property.neighborhood,
    property.municipality,
    property.province,
  ]
    .filter(Boolean)
    .join(", ");
};

export const provinces = [
  "BENGO",
  "BENGUELA",
  "BIÉ",
  "CABINDA",
  "CUANDO",
  "CUBANGO",
  "CUANZA NORTE",
  "CUANZA SUL",
  "CUNENE",
  "HUAMBO",
  "HUÍLA",
  "ICOLO E BENGO",
  "LUANDA",
  "LUNDA NORTE",
  "LUNDA SUL",
  "MALANJE",
  "MOXICO",
  "MOXICO LESTE",
  "NAMIBE",
  "UÍGE",
  "ZAIRE",
];

export function createSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// REGRAS DE EXIBIÇÃO

export const showBedrooms = (type) => {
  return ["house", "apartment"].includes(type);
};

export const showBathrooms = (type) => {
  return ["house", "apartment", "office"].includes(type);
};

export const showParking = (type) => {
  return ["house", "apartment", "office"].includes(type);
};

export const showArea = () => true;
