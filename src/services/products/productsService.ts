import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { Product } from './productsTypes';

// Todos os produtos
export const getAllProducts = async (): Promise<Product[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.PRODUCTS.GET_ALL);
    return response.data;
};

// Produto por ID
export const getProductById = async (id: number): Promise<Product> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.PRODUCTS.GET_BY_ID(id));
    return response.data;
};

// Produtos por nome
export const getProductByName = async (name: string): Promise<Product[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.PRODUCTS.FILTER.BY_NAME(name));
    return response.data;
};

// Produtos por faixa de preço
export const getProductByPriceRange = async (minPrice: number, maxPrice: number): Promise<Product[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.PRODUCTS.FILTER.BY_PRICE(minPrice, maxPrice));
    return response.data;
};

// Produtos por categoria
export const getProductByCategory = async (category: string): Promise<Product[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.PRODUCTS.FILTER.BY_CATEGORY(category));
    return response.data;
};

// Criar produto
export const createProduct = async (product: Product): Promise<Product> => {
    const response = await api.post(API_ENDPOINTS.WEB_STORE.PRODUCTS.CREATE, product);
    return response.data;
};

// Atualizar produto
export const updateProduct = async (id: number, product: Product): Promise<Product> => {
    const response = await api.put(API_ENDPOINTS.WEB_STORE.PRODUCTS.UPDATE(id), product);
    return response.data;
};

// Deletar produto
export const deleteProduct = async (id: number): Promise<void> => {
    await api.delete(API_ENDPOINTS.WEB_STORE.PRODUCTS.DELETE(id));
};