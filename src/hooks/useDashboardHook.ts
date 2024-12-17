import { useEffect, useState } from 'react';
import { useToast } from './use-toast';

export const useDahboardHook = () => {
    const { toast } = useToast();

    useEffect(() => {
        //TRAZER OS DADOS DO USUÁRIO AQUI PARA MENSAGEM DE BOAS VINDAS
        //PARA GARANTIR QUE APAREÇA APENAS UMA VEZ TOAST COLOCAR NO LOCAL/SESSION STORAGE         
        toast({
            variant: 'destructive',
            duration: 5000,
            title: 'Usuário ou senha inválida',
            description:
                'Por favor! Verifique se email ou senha estão corretos',
        });
    }, []);
};
