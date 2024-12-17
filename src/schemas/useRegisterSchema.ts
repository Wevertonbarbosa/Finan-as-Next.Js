import * as yup from 'yup';

export const registerSchema = yup.object({
    nome: yup
        .string()
        .required('Nome completo é obrigatório')
        .min(2, 'Nome precisar ter no minímo mais de 2 caracteres'),
    email: yup
        .string()
        .email('Por favor, insira um email válido')
        .required('Email é obrigatório'),
    senha: yup
        .string()
        .required('Senha é obrigatório')
        .min(3, 'Senha precisar ter no minímo mais de 3 caracteres '),
});
