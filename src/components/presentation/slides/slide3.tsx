import { motion } from 'framer-motion';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

export default function Slide3() {
    return (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center"
            >
                Acesse de Qualquer Lugar
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <Smartphone size={64} className="text-green-600 mb-4" />
                    <p className="text-lg text-green-700">Celular</p>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <Laptop size={64} className="text-green-600 mb-4" />
                    <p className="text-lg text-green-700">Computador</p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <Tablet size={64} className="text-green-600 mb-4" />
                    <p className="text-lg text-green-700">Tablet</p>
                </motion.div>
            </div>
        </div>
    );
}
