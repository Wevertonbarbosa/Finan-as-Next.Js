import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { login } from '../services/useLoginService';
import LoginData from '../types/useLoginInterface';
import { useToast } from '@/src/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useLoginHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();
    const router = useRouter();

    const handleLogin: SubmitHandler<LoginData> = async (
        loginData: LoginData
    ) => {
        setIsLoading(true);
        setError(null);
        try {
            const userData = await login();

            if (userData === true) {
                toast({
                    variant: 'destructive',
                    duration: 5000,
                    title: 'Servidor temporariamente fora do ar.',
                    description: 'Por favor! tente novamente mais tarde',
                });
            }

            const user = userData.find(
                (user: { email: string; senha: string }) => {
                    if (
                        user.email === loginData.email &&
                        user.senha === loginData.senha
                    ) {
                        return true;
                    }
                }
            );
            
            if (user) {
                Cookies.set('token', 'TOKEN');
                router.push('/welcome');
            } else {
                toast({
                    variant: 'destructive',
                    duration: 5000,
                    title: 'Usuário ou senha inválida',
                    description:
                        'Por favor! Verifique se email ou senha estão corretos',
                });
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, handleLogin };
};
