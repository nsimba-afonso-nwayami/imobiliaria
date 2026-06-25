import { api } from "./api";


// =============================
// LISTAR TODOS IMÓVEIS
// =============================
export const getProperties = async (params = {}) => {
  const response = await api.get("listings/", {
    params,
  });

  return response.data;
};


// =============================
// DETALHES DO IMÓVEL
// =============================
export const getPropertyById = async (id) => {
  const response = await api.get(`listings/${id}/`);

  return response.data;
};


// =============================
// CRIAR IMÓVEL
// =============================
export const createProperty = async (data) => {
  const response = await api.post(
    "listings/create/",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 60000,
    }
  );

  return response.data;
};


// =============================
// ATUALIZAR IMÓVEL
// =============================
export const updateProperty = async (id, data) => {
  const response = await api.put(
    `listings/${id}/update/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};


// =============================
// REMOVER IMÓVEL
// =============================
export const deleteProperty = async (id) => {
  const response = await api.delete(
    `listings/${id}/delete/`
  );

  return response.data;
};


// =============================
// PUBLICAR IMÓVEL
// =============================
export const publishProperty = async (id) => {
  const response = await api.post(
    `listings/${id}/publish/`
  );

  return response.data;
};


// =============================
// DESATIVAR IMÓVEL
// =============================
export const deactivateProperty = async (id) => {
  const response = await api.post(
    `listings/${id}/deactivate/`
  );

  return response.data;
};


// =============================
// MEUS IMÓVEIS
// =============================
export const getMyProperties = async () => {
  const response = await api.get(
    "listings/my-properties/"
  );

  return response.data;
};


// =============================
// CONTACTAR IMÓVEL
// =============================
export const contactProperty = async (id, data) => {
  const response = await api.post(
    `listings/${id}/contact/`,
    data
  );

  return response.data;
};


// =============================
// IMAGENS
// =============================
export const uploadPropertyImages = async (
  propertyId,
  data
) => {
  const response = await api.post(
    `listings/${propertyId}/images/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};


// =============================
// VÍDEOS
// =============================
export const uploadPropertyVideos = async (
  propertyId,
  data
) => {
  const response = await api.post(
    `listings/${propertyId}/videos/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};


// =============================
// DOCUMENTOS
// =============================
export const uploadPropertyDocuments = async (
  propertyId,
  data
) => {
  const response = await api.post(
    `listings/${propertyId}/documents/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};


// =============================
// ESTATÍSTICAS
// =============================
export const getPropertyStats = async () => {
  const response = await api.get(
    "listings/stats/"
  );

  return response.data;
};
