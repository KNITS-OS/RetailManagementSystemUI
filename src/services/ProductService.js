import { axiosConfig } from "../http-common";

export const getProducts =  async () => {
   return await axiosConfig.get("/products");
};

export const createProduct = async (data) => {
  return (await axiosConfig.post("/products", data)).data;
};

export const updateProduct = async (id, data) => {
  return (await axiosConfig.put(`/products/${id}`, data)).data;
};

export const removeProduct = async (id) => {
  return (await axiosConfig.delete(`/products/${id}`)).data;
};

export const getProduct = async (id) => {
  return (await axiosConfig.get(`/products/${id}`)).data;
};

export const searchById = async (searchId) => {
  return (await axiosConfig.get(`/products?id=${searchId}`)).data;
}