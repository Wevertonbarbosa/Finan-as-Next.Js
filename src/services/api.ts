import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // URL do seu JSON Server
    timeout: 5000, // Timeout para a requisição
});

export default api;
