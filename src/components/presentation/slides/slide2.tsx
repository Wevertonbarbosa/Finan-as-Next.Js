import { motion } from 'framer-motion';
import { PieChart, BarChart, LineChart } from 'lucide-react';

export default function Slide2() {
    const features = [
        { icon: PieChart, text: 'Análise de gastos' },
        { icon: BarChart, text: 'Orçamento inteligente' },
        { icon: LineChart, text: 'Projeções financeiras' },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center"
            >
                Recursos Poderosos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <feature.icon
                            size={48}
                            className="text-green-600 mb-4"
                        />
                        <p className="text-lg text-green-700 text-center">
                            {feature.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
