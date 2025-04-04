
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const pageHeaders: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/clone': 'Clone New Page',
  '/pages': 'My Pages',
  '/domains': 'Domain Management',
  '/help': 'Help Center',
  '/': 'Welcome to PageSnap',
};

const AppHeader = () => {
  const location = useLocation();
  const pageTitle = pageHeaders[location.pathname] || 'PageSnap';

  return (
    <header className="border-b bg-background p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{pageTitle}</h1>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Upgrade Plan</Button>
        <Button size="sm">New Clone</Button>
      </div>
    </header>
  );
};

export default AppHeader;
