import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

export default function Slide1() {
    return (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 mb-8"
            >
                <Wallet size={80} />
            </motion.div>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 text-center mb-4"
            >
                Finanças Fácil
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-green-600 text-center"
            >
                Simplifique sua vida financeira
            </motion.p>
        </div>
    );
}
