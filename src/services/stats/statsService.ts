import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { Statistics } from './statsTypes';

// Buscar estatísticas gerais
export const getStatistics = async (): Promise<Statistics> => {
    const totalProducts = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_PRODUCTS);
    const totalUsers = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_USERS);
    const totalVisits = await api.get(API_ENDPOINTS.WEB_STORE.STATISTICS.TOTAL_VISITS);

    return {
        totalProducts: totalProducts.data,
        totalUsers: totalUsers.data,
        totalVisits: totalVisits.data
    };
};