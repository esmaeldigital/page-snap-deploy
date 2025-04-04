
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados simulados
const pages = [
  { 
    id: '1',
    name: "Lançamento de Produto",
    url: "product-launch",
    domain: "minhaempresa.com",
    views: 842,
    date: "28/03/2025",
    thumbnail: "https://placehold.co/400x225",
    status: "active"
  },
  { 
    id: '2',
    name: "Registro de Webinar",
    url: "webinar-reg",
    domain: "pagespan.app",
    views: 326,
    date: "25/03/2025",
    thumbnail: "https://placehold.co/400x225/eee/aaa",
    status: "active"
  },
  { 
    id: '3',
    name: "Download de E-book",
    url: "ebook-landing",
    domain: "dominio-cliente.com",
    views: 194,
    date: "22/03/2025",
    thumbnail: "https://placehold.co/400x225/f0f0ff/aaaacc",
    status: "active"
  },
  { 
    id: '4',
    name: "Página de Curso",
    url: "course-promo",
    domain: "minhaempresa.com",
    views: 0,
    date: "01/04/2025",
    thumbnail: "https://placehold.co/400x225/fff0f0/ccaaaa",
    status: "draft"
  },
  { 
    id: '5',
    name: "Solicitação de Demo",
    url: "request-demo",
    domain: "pagespan.app",
    views: 129,
    date: "15/03/2025",
    thumbnail: "https://placehold.co/400x225/f0fff0/aaccaa",
    status: "active"
  },
  { 
    id: '6',
    name: "Promoção de Afiliados",
    url: "affiliate-offer",
    domain: "pagespan.app",
    views: 78,
    date: "10/03/2025",
    thumbnail: "https://placehold.co/400x225/ffffee/ccccaa",
    status: "archived"
  }
];

const PagesLibrary = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <h1 className="text-2xl font-bold">Minhas Páginas</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Buscar páginas..." />
          </div>
          <Button asChild>
            <Link to="/clone" className="flex items-center gap-2">
              <Plus size={16} />
              Nova Página
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Todas as Páginas</TabsTrigger>
          <TabsTrigger value="active">Ativas</TabsTrigger>
          <TabsTrigger value="draft">Rascunhos</TabsTrigger>
          <TabsTrigger value="archived">Arquivadas</TabsTrigger>
        </TabsList>
        
        {["all", "active", "draft", "archived"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages
                .filter(page => tab === "all" || page.status === tab)
                .map((page) => (
                  <Card key={page.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={page.thumbnail} 
                        alt={page.name} 
                        className="w-full aspect-[16/9] object-cover"
                      />
                      {page.status === "draft" && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-md font-medium">
                            Rascunho
                          </span>
                        </div>
                      )}
                      {page.status === "archived" && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-md font-medium">
                            Arquivada
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h2 className="font-semibold mb-1">{page.name}</h2>
                      <p className="text-xs text-muted-foreground mb-3 truncate">
                        {page.domain}/{page.url}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">{page.views}</span> 
                          <span className="text-muted-foreground"> visualizações</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Editar</Button>
                          <Button size="sm">Visualizar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PagesLibrary;
