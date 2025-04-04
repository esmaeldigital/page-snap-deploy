
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Check, ExternalLink } from 'lucide-react';

// Dados simulados
const domains = [
  { 
    id: '1',
    name: "minhaempresa.com",
    status: "verified",
    addedDate: "15/02/2025",
    pages: 3
  },
  { 
    id: '2',
    name: "dominio-cliente.com",
    status: "verified",
    addedDate: "01/03/2025",
    pages: 1
  },
  { 
    id: '3',
    name: "site-marketing.com",
    status: "pending",
    addedDate: "01/04/2025",
    pages: 0
  }
];

const DomainsManagement = () => {
  const [isAddingDomain, setIsAddingDomain] = React.useState(false);
  const [newDomain, setNewDomain] = React.useState('');

  const handleAddDomain = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingDomain(false);
    setNewDomain('');
    // Aqui iria a lógica de adição do domínio
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Gerenciamento de Domínios</h1>
          <p className="text-muted-foreground">Conecte domínios personalizados para hospedar suas landing pages</p>
        </div>
        <Button onClick={() => setIsAddingDomain(true)}>
          <Plus size={16} className="mr-2" />
          Adicionar Domínio
        </Button>
      </div>

      {isAddingDomain && (
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Novo Domínio</CardTitle>
            <CardDescription>
              Digite o domínio que deseja conectar à sua conta PageSnap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddDomain} className="space-y-4">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium mb-1">
                  Nome do Domínio
                </label>
                <Input 
                  id="domain"
                  placeholder="exemplo.com" 
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="max-w-md"
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" disabled={!newDomain}>Adicionar Domínio</Button>
                <Button type="button" variant="outline" onClick={() => setIsAddingDomain(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Seus Domínios</CardTitle>
          <CardDescription>
            Gerencie todos os domínios conectados à sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted text-left text-sm">
                  <th className="px-4 py-3 font-medium">Domínio</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Data de Adição</th>
                  <th className="px-4 py-3 font-medium">Páginas</th>
                  <th className="px-4 py-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {domains.map((domain) => (
                  <tr key={domain.id} className="text-sm">
                    <td className="px-4 py-3 font-medium">{domain.name}</td>
                    <td className="px-4 py-3">
                      {domain.status === "verified" ? (
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Verificado</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                          <span>Pendente</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{domain.addedDate}</td>
                    <td className="px-4 py-3">{domain.pages}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Verificar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Configurações DNS
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guia de Configuração DNS</CardTitle>
          <CardDescription>
            Siga estas etapas para configurar as definições DNS do seu domínio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Passo 1: Adicionar Registros DNS</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Adicione os seguintes registros DNS às configurações DNS do seu domínio:
              </p>
              
              <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
                <table className="text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="pr-8 pb-2">Tipo</th>
                      <th className="pr-8 pb-2">Nome</th>
                      <th className="pr-8 pb-2">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pr-8 py-1">CNAME</td>
                      <td className="pr-8 py-1">www</td>
                      <td className="pr-8 py-1">cname.pagespan.app</td>
                    </tr>
                    <tr>
                      <td className="pr-8 py-1">A</td>
                      <td className="pr-8 py-1">@</td>
                      <td className="pr-8 py-1">76.76.21.21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="font-medium mb-2">Passo 2: Verificar Seu Domínio</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Após adicionar os registros DNS, clique no botão "Verificar" ao lado do seu domínio. 
                Alterações de DNS podem levar até 48 horas para se propagarem.
              </p>
              
              <h3 className="font-medium mb-2">Passo 3: Começar a Usar Seu Domínio</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Depois de verificado, seu domínio estará pronto para uso com qualquer página em sua conta.
              </p>
              
              <div className="flex items-center mt-4">
                <a 
                  href="#" 
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  Ver guia detalhado
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainsManagement;
