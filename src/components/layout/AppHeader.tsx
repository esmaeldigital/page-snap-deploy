
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const pageHeaders: Record<string, string> = {
  '/dashboard': 'Painel',
  '/clone': 'Clonar Nova Página',
  '/pages': 'Minhas Páginas',
  '/domains': 'Gerenciamento de Domínios',
  '/help': 'Central de Ajuda',
  '/': 'Bem-vindo ao PageSnap',
};

const AppHeader = () => {
  const location = useLocation();
  const pageTitle = pageHeaders[location.pathname] || 'PageSnap';

  return (
    <header className="border-b bg-background p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Atualizar Plano</Button>
        <Button size="sm">Novo Clone</Button>
      </div>
    </header>
  );
};

export default AppHeader;
