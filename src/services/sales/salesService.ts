import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { Sale } from './salesTypes';

// Todas as vendas
export const getAllSales = async (): Promise<Sale[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.SALES.GET_ALL);
    return response.data;
};

// Vendas por ano
export const getSalesByYear = async (year: number): Promise<Sale[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.SALES.GET_BY_YEAR(year));
    return response.data;
};

// Vendas por ano e mês
export const getSalesByMonth = async (year: number, month: number): Promise<Sale[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.SALES.GET_BY_MONTH(year, month));
    return response.data;
};