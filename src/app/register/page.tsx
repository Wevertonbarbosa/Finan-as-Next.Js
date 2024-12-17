'use client';
import { Label } from '@/src/components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/src/schemas/useRegisterSchema';
import { useRegisterHook } from '@/src/hooks/useRegisterHook';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });
    const { handleRegister, isLoading, error } = useRegisterHook();

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="bg-green-800 text-white md:w-1/2 p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">
                    Bem-vindo à Finanças Fácil
                </h1>
                <p className="text-green-200 text-lg mb-8">
                    Junte-se a nós e descubra um mundo de possibilidades.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>Recursos exclusivos</span>
                    </div>
                    <div className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>Controle das finanças</span>
                    </div>
                    <div className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>Atualizações constantes</span>
                    </div>
                </div>
            </div>
            <div className="bg-white md:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">
                        Criar uma conta
                    </h2>
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className="space-y-4"
                    >
                        <div>
                            <Label htmlFor="name" className="text-green-700">
                                Nome completo
                            </Label>
                            <Input
                                id="name"
                                placeholder="Digite seu nome completo"
                                className="mt-1 border-green-300 focus:ring-green-500 focus:border-green-500"
                                {...register('nome')}
                            />

                            {errors.nome && (
                                <p className="text-red-500 text-sm">
                                    {errors.nome.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="email" className="text-green-700">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                className="mt-1 border-green-300 focus:ring-green-500 focus:border-green-500"
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label
                                htmlFor="password"
                                className="text-green-700"
                            >
                                Senha
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="mt-1 border-green-300 focus:ring-green-500 focus:border-green-500"
                                {...register('senha')}
                            />

                            {errors.senha && (
                                <p className="text-red-500 text-sm">
                                    {errors.senha.message}
                                </p>
                            )}
                        </div>

                        <Button
                            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition duration-300"
                            disabled={isLoading}
                        >
                            Cadastrar
                        </Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Já tem uma conta?{' '}
                        <a
                            href="/"
                            className="font-medium text-green-600 hover:text-green-500"
                        >
                            Faça login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
