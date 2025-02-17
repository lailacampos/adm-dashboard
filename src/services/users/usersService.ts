import api from '../api/webStore';
import API_ENDPOINTS from '../endpoints/apiEndpoints';
import { User } from './usersTypes';

// Todos os usuários
export const getAllUsers = async (): Promise<User[]> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.USERS.GET_ALL);
    return response.data;
}

// Usuário por ID
export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get(API_ENDPOINTS.WEB_STORE.USERS.GET_BY_ID(id));
    return response.data;
}

// Criar usuário
export const createUser = async (user: User): Promise<User> => {
    const response = await api.post(API_ENDPOINTS.WEB_STORE.USERS.CREATE, user);
    return response.data;
}

// Atualizar usuário
export const updateUser = async (id: number, user: User): Promise<User> => {
    const response = await api.put(API_ENDPOINTS.WEB_STORE.USERS.UPDATE(id), user);
    return response.data;
}

// Deletar usuário
export const deleteUser = async (id: number): Promise<void> => {
    await api.delete(API_ENDPOINTS.WEB_STORE.USERS.DELETE(id));
}