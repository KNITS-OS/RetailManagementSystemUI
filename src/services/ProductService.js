import { axiosConfig } from "../http-common";
import { generateID } from 'utils/mocksHelper.js';

export const getProducts =  async () => {
   return (await axiosConfig.get("/products")).data;
};

export const getProductsWithCategories =  async () => {
  const categories = await getCategories();
  return (await axiosConfig.get("/products"))
    .data
    .map(product => {
      const productCategoryName = categories.find(category => category.id === product['product_category']);
      return {
        ...product,
       'product_category': productCategoryName.title
      }
    });
};

export const createProduct = async (data) => {
  const generatedID = generateID();
  return (await axiosConfig.post("/products", {...data, id: generatedID})).data;
};

export const updateProduct = async (id, data) => {
  return (await axiosConfig.patch(`/products/${id}`, data));
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

export const searchByParams = async (stringParams) => {
  return (await axiosConfig.get(`/products?${stringParams}`)).data;
}

export const searchByParamsWithCategories = async (stringParams) => {
  const categories = await getCategories();
  return (await axiosConfig.get(`/products?${stringParams}`))
    .data
    .map(product => {
      const productCategoryName = categories.find(category => category.id === product['product_category']);
      return {
        ...product,
       'product_category': productCategoryName.title
      }
    });
}

export const getCategories = async () => {
  return (await axiosConfig.get("/categories")).data;
};

export const getBrands = async () => {
  return await axiosConfig.get("/brands");
};