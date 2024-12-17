import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/src/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/src/components/ui/table';
import { Button } from '@/src/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const ResultComponent = ({userName, salary, otherIncome, onBack}: any) => {
    
  const totalIncome = parseFloat(salary) + parseFloat(otherIncome);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
        >
            <Card className="shadow-lg">
                <CardHeader>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 200,
                        }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-4">
                            <span className="text-4xl text-white font-bold">
                                Logo
                            </span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-green-700">
                            {userName}
                        </CardTitle>
                    </motion.div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-semibold text-green-800">
                            Renda Mensal Total
                        </h3>
                        <p className="text-3xl font-bold text-green-600">
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(totalIncome)}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tipo de Renda</TableHead>
                                    <TableHead className="text-right">
                                        Valor
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Salário</TableCell>
                                    <TableCell className="text-right">
                                        {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(parseFloat(salary))}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Outras Rendas</TableCell>
                                    <TableCell className="text-right">
                                        {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(parseFloat(otherIncome))}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button
                            onClick={onBack}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar ao Formulário
                        </Button>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
