import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-sm w-full">
                <Loader2 className="h-12 w-12 sm:h-16 sm:w-16 animate-spin text-green-600 mx-auto" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-800">
                    Carregando suas finanças
                </h1>
                <p className="text-sm sm:text-base text-green-600">
                    Estamos preparando seus dados financeiros...
                </p>
                <div className="w-full bg-green-200 rounded-full h-2.5 mt-4">
                    <div
                        className="bg-green-600 h-2.5 rounded-full animate-pulse"
                        style={{ width: '70%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
