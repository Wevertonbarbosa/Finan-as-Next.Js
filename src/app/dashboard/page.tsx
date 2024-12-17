'use client';
import { AppSidebar } from '@/src/components/sidebar/app-sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/src/components/ui/breadcrumb';
import { Separator } from '@/src/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/src/components/ui/sidebar';

import './style.css';
import { useState } from 'react';
import FormEntry from '@/src/components/form-entry/form-entry';

export default function Dashboard() {
    const [title, setTitle] = useState('Entradas');

    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '47px',
                } as React.CSSProperties
            }
        >
            <AppSidebar onMenuTitle={(dados) => setTitle(dados)} />
            <SidebarInset>
                <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4 ">
                    <SidebarTrigger className="-ml-1 triggerButton" />
                    <Separator orientation="vertical" className="mr-2 h-4 " />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">Menu</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex flex-1 flex-col">
                    {/* CONTEUDO PARA AS PÁGINAS */}
                    <FormEntry />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
