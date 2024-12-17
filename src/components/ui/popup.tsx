'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setIsOpen(true), 500);
    //     return () => clearTimeout(timer);
    // }, []);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => setIsOpen(true), 500);
            localStorage.setItem('hasSeenPopup', 'true');
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(0,255,0,0.3) 0%, rgba(0,128,0,0.3) 100%)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        transition={{
                            type: 'spring',
                            damping: 15,
                            stiffness: 300,
                        }}
                        className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-md w-full backdrop-blur-md border border-white border-opacity-30"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <motion.h2
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-bold text-white"
                            >
                                Bem-vindo!
                            </motion.h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white hover:bg-opacity-20"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-opacity-90 mb-4"
                        >
                            Estamos felizes em tê-lo aqui. Esperamos que você
                            aproveite sua experiência!
                        </motion.p>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-white bg-opacity-30 hover:bg-opacity-40 text-white border border-white border-opacity-50"
                            >
                                Começar
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
