import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-sm w-full">
                <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-800">
                    Página não encontrada
                </h1>
                <p className="text-sm sm:text-base text-green-600">
                    Desculpe, não conseguimos encontrar a página que você está
                    procurando.
                </p>
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Voltar para a página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
}
