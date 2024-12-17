import { motion } from 'framer-motion';
import { Power } from 'lucide-react';

export default function Slide4() {
    return (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center"
            >
                Comece Agora Mesmo
            </motion.h2>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl text-green-600 text-center mb-8"
            >
                Transforme sua vida financeira com Finanças Fácil! 
            </motion.p>
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center"
            >
                <Power size={24} className="mr-2" />
                <a href="/dashboard">Inciar agora</a> 
            </motion.button>
        </div>
    );
}
