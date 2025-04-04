
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Plus, 
  Database, 
  Link as LinkIcon, 
  User,
  Search
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: "Painel",
    path: "/dashboard",
    icon: Home
  },
  {
    title: "Clonar Página",
    path: "/clone",
    icon: Plus
  },
  {
    title: "Minhas Páginas",
    path: "/pages",
    icon: Database
  },
  {
    title: "Domínios",
    path: "/domains",
    icon: LinkIcon
  },
  {
    title: "Ajuda",
    path: "/help",
    icon: Search
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex items-center px-4 border-b">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg">
            P
          </div>
          <span className="font-semibold text-lg">PageSnap</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <User size={16} />
          <span>Perfil</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
