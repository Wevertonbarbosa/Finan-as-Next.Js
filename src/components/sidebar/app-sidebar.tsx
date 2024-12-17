'use client';

import * as React from 'react';
import {
    Command,
    FileCheck,
    BookOpenCheck,
    ClipboardPenLine,
    ChartPie,
} from 'lucide-react';
import { NavUser } from '@/src/components/sidebar/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/src/components/ui/sidebar';

// This is sample data
const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Entradas',
            url: '#',
            icon: FileCheck,
            isActive: true,
        },
        {
            title: 'Simulação',
            url: '#',
            icon: ClipboardPenLine,
            isActive: false,
        },
        {
            title: 'Dashboard',
            url: '#',
            icon: ChartPie,
            isActive: false,
        },
        {
            title: 'Conhecer',
            url: '#',
            icon: BookOpenCheck,
            isActive: false,
        },
    ],
};

export function AppSidebar({
    onMenuTitle,
    ...props
}: React.ComponentProps<typeof Sidebar> & {
    onMenuTitle: (title: string) => void;
}) {
    const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
    const { setOpen } = useSidebar();

    return (
        <Sidebar
            collapsible="icon"
            className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
            {...props}
        >
            <Sidebar
                collapsible="none"
                className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r "
            >
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                size="lg"
                                asChild
                                className="md:h-8 md:p-0"
                            >
                                <a href="#">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Command className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            Acme Inc
                                        </span>
                                        <span className="truncate text-xs">
                                            Enterprise
                                        </span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className="px-1.5 md:px-0">
                            <SidebarMenu>
                                {data.navMain.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            tooltip={{
                                                children: item.title,
                                                hidden: false,
                                            }}
                                            onClick={() => {
                                                setActiveItem(item);
                                                setOpen(true);
                                                onMenuTitle(item.title);
                                            }}
                                            isActive={
                                                activeItem.title === item.title
                                            }
                                            className="px-2.5 md:px-2 text-green-600"
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <NavUser user={data.user} />
                </SidebarFooter>
            </Sidebar>
        </Sidebar>
    );
}
