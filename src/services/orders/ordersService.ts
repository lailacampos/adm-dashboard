import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { Order } from './ordersTypes';

// Todos os pedidos
export const getAllOrders = async (): Promise<Order[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.ORDERS.GET_ALL);
    return response.data;
};

// Pedido por ID
export const getOrderById = async (id: number): Promise<Order> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.ORDERS.GET_BY_ID(id));
    return response.data;
};

// Criar pedido
export const createOrder = async (order: Order): Promise<Order> => {
    const response = await api.post(API_ENDPOINTS.WEB_STORE.ORDERS.CREATE, order);
    return response.data;
};

// Atualizar pedido
export const updateOrder = async (id: number, order: Order): Promise<Order> => {
    const response = await api.put(API_ENDPOINTS.WEB_STORE.ORDERS.UPDATE(id), order);
    return response.data;
};

// Deletar pedido
export const deleteOrder = async (id: number): Promise<void> => {
    await api.delete(API_ENDPOINTS.WEB_STORE.ORDERS.DELETE(id));
};