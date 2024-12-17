import { motion } from "framer-motion";
import { Info } from "lucide-react";

export const InfoBox = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-green-800 p-4 rounded-lg shadow-md"
    >
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex items-start space-x-3"
        >
            <Info className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-semibold text-orange-100 mb-2">
                    Dica para "Outras Rendas"
                </h4>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-orange-100"
                >
                    Coloque em "Outras rendas" o total de todas as suas rendas
                    extras mensais juntas.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-orange-100 mt-2"
                >
                    <strong>Exemplo:</strong>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-orange-100"
                >
                    Todo mês você ganha R$ 50,00 de uma renda, mais R$ 40,00 de
                    outra renda, fazendo a soma dará R$ 90,00. Este é o valor
                    que você deve colocar em "outras rendas".
                </motion.p>
            </div>
        </motion.div>
    </motion.div>
);
