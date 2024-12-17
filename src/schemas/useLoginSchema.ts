import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Por favor, insira um email válido')
        .required('Email é obrigatório'),
    senha: yup.string().required('Senha é obrigatório'),
});
