import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { Statistics } from './statsTypes';

// Eestatísticas gerais
export const getAllStatistics = async (): Promise<Statistics> => {
    const totalProducts = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_PRODUCTS);
    const totalUsers = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_USERS);
    const totalVisits = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_VISITS);
    const totalSales = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_SALES);
    const totalOrders = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_ORDERS);

    return {
        totalProducts: totalProducts.data,
        totalUsers: totalUsers.data,
        totalVisits: totalVisits.data,
        totalSales: totalSales.data,
        totalOrders: totalOrders.data
    };
};

// Estatísticas de total de vendas
export const getSalesStatistics = async (): Promise<any> => {
    return await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_SALES);
};

// Estatísticas de total de produtos
export const getProductsStatistics = async (): Promise<any> => {
    return await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_PRODUCTS);
};

// Estatísticas de total de usuários
export const getUsersStatistics = async (): Promise<any> => {
    return await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_USERS);
};

// Estatísticas de total de visitas
export const getVisitsStatistics = async (): Promise<any> => {
    return await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_VISITS);
};

// Estatísticas de total de pedidos
export const getOrdersStatistics = async (): Promise<any> => {
    return await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_ORDERS);
};
