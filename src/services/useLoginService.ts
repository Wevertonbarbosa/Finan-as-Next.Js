import api from './api';
import userData from '../types/useRegisterInterface';

export const login = async () => {
    try {
        const response = await api.get('/user');
        const users = response.data;
        return users;
    } catch (error) {
        return true;
    }
};

export const registerUser = async (data: userData) => {
    try {
        const response = await api.post('/register', data);
        const dataLogin = { email: data.email, senha: data.senha };
        const responseLogin = await api.post('/user', dataLogin);
        const users = response.data;
        return users;
    } catch (error) {
        return true;
    }
};
