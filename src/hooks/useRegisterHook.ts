import { useToast } from '@/src/hooks/use-toast';
import { useState } from 'react';
import userData from '../types/useRegisterInterface';
import { registerUser } from '../services/useLoginService';
import { useRouter } from 'next/navigation';

export const useRegisterHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();
    const router = useRouter();

    const handleRegister = async (data: userData) => {
        setIsLoading(true);
        setError(null);

        try {
            const userData = await registerUser(data);
            if (userData === true) {
                toast({
                    variant: 'destructive',
                    duration: 5000,
                    title: 'Servidor temporariamente fora do ar',
                    description: 'Por favor! tente novamente mais tarde',
                });
            } else {
                toast({
                    variant: 'default',
                    style: {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                    duration: 5000,
                    title: 'Seja bem-vindo(a) ao Finanças Fácil',
                    description: 'Usuário cadastrado com sucesso!',
                });
                router.push('/');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, handleRegister };
};
