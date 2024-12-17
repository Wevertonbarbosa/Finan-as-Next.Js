'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { loginSchema } from '../../schemas/useLoginSchema';
import { useLoginHook } from '../../hooks/useLoginHook';


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const { handleLogin, isLoading, error } = useLoginHook();

   

    return (
        <div className="flex min-h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 xl:px-24">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-green-800">
                        Login
                    </h1>
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-1 text-green-700"
                            >
                                Email
                            </label>
                            <Input
                                className="border-green-300 focus:ring-green-500 focus:border-green-500"
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium mb-1 text-green-700"
                            >
                                Senha
                            </label>
                            <Input
                                className="border-green-300 focus:ring-green-500 focus:border-green-500"
                                id="senha"
                                type="password"
                                placeholder="Senha"
                                {...register('senha')}
                            />
                            {errors.senha && (
                                <p className="text-red-500 text-sm">
                                    {errors.senha.message}
                                </p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            variant="default"
                            disabled={isLoading}
                            className="w-full bg-green-700 hover:bg-green-800 text-white rounded-md transition duration-300 px-4"
                        >
                            Entrar
                        </Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Não tem uma conta?{' '}
                        <a
                            href="/register"
                            className="font-medium text-green-600 hover:text-green-500"
                        >
                            Cadastre-se
                        </a>
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image
                    src="/assets/loginIMG.jpeg"
                    className="imgLogin"
                    alt="img login"
                    fill
                    sizes="100%"
                    priority
                />
            </div>
        </div>
    );
}
