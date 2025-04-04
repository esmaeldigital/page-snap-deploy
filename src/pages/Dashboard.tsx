
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Plus } from 'lucide-react';

// Dados simulados
const stats = [
  { title: "Páginas Ativas", value: "12" },
  { title: "Visualizações Totais", value: "4.320" },
  { title: "Domínios", value: "3" },
  { title: "Taxa de Conversão", value: "3,2%" }
];

const recentPages = [
  { name: "Lançamento de Produto", url: "product-launch", views: 842, date: "28/03/2025", thumbnail: "https://placehold.co/400x225" },
  { name: "Registro de Webinar", url: "webinar-reg", views: 326, date: "25/03/2025", thumbnail: "https://placehold.co/400x225/eee/aaa" },
  { name: "Download de E-book", url: "ebook-landing", views: 194, date: "22/03/2025", thumbnail: "https://placehold.co/400x225/f0f0ff/aaaacc" }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Seção de boas-vindas */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h1>
          <p className="text-muted-foreground">Aqui está o que está acontecendo com suas landing pages.</p>
        </div>
        <Button asChild>
          <Link to="/clone" className="flex items-center gap-2">
            <Plus size={16} />
            Clonar Nova Página
          </Link>
        </Button>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progresso de uso */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Uso do Plano</CardTitle>
          <CardDescription>Plano gratuito - 5/10 páginas utilizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={50} className="h-2" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-muted-foreground">Restam 5 landing pages no seu plano</p>
          <Button variant="outline" size="sm">
            Atualizar
          </Button>
        </CardFooter>
      </Card>

      {/* Páginas Recentes */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Páginas Recentes</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/pages" className="flex items-center gap-1">
              Ver todas <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {recentPages.map((page, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <img src={page.thumbnail} alt={page.name} className="w-full aspect-[16/9] object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{page.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">Criada em: {page.date}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{page.views} visualizações</span>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
