'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/components/ui/drawer';

import { Info } from 'lucide-react';
import { CurrencyInput } from '@/src/utils/currencyFormatter';
import { InfoBox } from '../infoRendas/info-box';
import { ResultComponent } from '../table-method/result-table';

export default function FinanceForm() {
    const [salary, setSalary] = useState('');
    const [otherIncome, setOtherIncome] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userName, setUserName] = useState('João Silva');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleBack = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="flex items-start justify-center min-h-full p-4">
            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl"
                    >
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-green-700">
                                    Informações Financeiras
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.5,
                                        }}
                                    >
                                        <CurrencyInput
                                            id="salary"
                                            label="Salário"
                                            value={salary}
                                            onChange={setSalary}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.4,
                                            duration: 0.5,
                                        }}
                                    >
                                        <CurrencyInput
                                            id="otherIncome"
                                            label="Outras Rendas"
                                            value={otherIncome}
                                            onChange={setOtherIncome}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 0.5,
                                        }}
                                        className="flex space-x-4"
                                    >
                                        <Button
                                            type="submit"
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            Enviar
                                        </Button>
                                        <Drawer
                                            open={isDrawerOpen}
                                            onOpenChange={setIsDrawerOpen}
                                        >
                                            <DrawerTrigger asChild>
                                                <Button
                                                    variant="default"
                                                    className=""
                                                >
                                                    <Info className=" h-4 w-4" />
                                                    Outras Rendas
                                                </Button>
                                            </DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader>
                                                    <DrawerTitle>
                                                        Informações Importantes
                                                    </DrawerTitle>
                                                    <DrawerDescription>
                                                        Dicas para preencher o
                                                        formulário corretamente.
                                                    </DrawerDescription>
                                                </DrawerHeader>
                                                <div className="p-4 pb-0">
                                                    <InfoBox />
                                                </div>
                                                <DrawerFooter>
                                                    <DrawerClose asChild>
                                                        <Button variant="outline">
                                                            Fechar
                                                        </Button>
                                                    </DrawerClose>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </Drawer>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : (
                    <ResultComponent
                        key="result"
                        userName={userName}
                        salary={salary}
                        otherIncome={otherIncome}
                        onBack={handleBack}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
