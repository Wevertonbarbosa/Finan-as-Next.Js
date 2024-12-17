import React from 'react';
import localFont from 'next/font/local';
import '@/src/global/styles/globals.css';
import { cn } from '../lib/utils';
import { Toaster } from '@/src/components/ui/toaster';

const geistSans = localFont({
    src: '../global/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: '../global/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    geistSans.variable,
                    geistMono.variable
                )}
            >
                <main>{children}</main>
                <Toaster />
            </body>
        </html>
    );
}
