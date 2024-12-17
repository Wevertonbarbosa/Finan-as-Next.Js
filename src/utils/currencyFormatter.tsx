import { NumericFormat } from 'react-number-format';
import { Label } from '@/src/components/ui/label';

export const CurrencyInput = ({ id, label, value, onChange }: any) => (
    <div className="space-y-2">
        <Label htmlFor={id} className="text-green-700">
            {label}
        </Label>
        <NumericFormat
            id={id}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            placeholder="R$ 0,00"
            className="flex h-10 w-full rounded-md border border-green-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={value}
            onValueChange={(values) => onChange(values.value)}
        />
    </div>
);
