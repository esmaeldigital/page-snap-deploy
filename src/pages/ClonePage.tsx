
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search } from 'lucide-react';
import { toast } from "sonner";

const ClonePage = () => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPreviewMode(true);
      toast.success("Página carregada com sucesso!", {
        description: "Agora você pode visualizar e personalizar a página"
      });
    }, 2000);
  };

  const handleClone = () => {
    setIsProcessing(true);
    
    // Simulando o processo de clonagem
    setTimeout(() => {
      toast.success("Página clonada com sucesso!", {
        description: "Redirecionando para o editor..."
      });
      
      // Redirecionar para o editor após a clonagem
      setTimeout(() => {
        navigate('/pages');
      }, 1500);
    }, 1000);
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Clone a Landing Page</CardTitle>
          <CardDescription>
            Entre com a URL da landing page que deseja clonar e personalizar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Digite a URL da página (ex: https://exemplo.com/landing)"
                  className="pl-9"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <Button type="submit" disabled={isProcessing || !url}>
                {isProcessing ? "Processando..." : "Clonar Página"}
              </Button>
            </div>
          </form>
          
          <Alert className="mt-4 bg-muted">
            <AlertDescription className="text-sm">
              <strong>Nota:</strong> Certifique-se de ter direitos legais para usar o conteúdo que está clonando.
              PageSnap é projetado para clonar suas próprias páginas ou páginas que você tem permissão para usar.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      {previewMode && (
        <Card>
          <CardHeader>
            <CardTitle>Visualizar e Editar</CardTitle>
            <CardDescription>
              Revise sua página clonada e faça as edições necessárias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Visualizar</TabsTrigger>
                <TabsTrigger value="edit">Editar Links</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="space-y-4">
                <div className="border rounded-md p-4 bg-muted h-96 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Visualização da Página</h3>
                    <p className="text-sm text-muted-foreground mb-4">Visualização de {url}</p>
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                      <div className="rounded-lg overflow-hidden h-[140px] md:h-[262px] bg-white">
                        <div className="flex items-center justify-center h-full text-sm text-gray-400">
                          Visualização da landing page apareceria aqui
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="edit" className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Editar Links e Botões</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Texto Original do Botão</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded">
                          Comece Agora
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Novo Texto do Botão</p>
                        <Input defaultValue="Comece Agora" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">URL Original do Botão</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded truncate">
                          https://exemplo.com/cadastro
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Nova URL do Botão</p>
                        <Input defaultValue="https://meu-dominio.com/cadastro" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Link Original</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded truncate">
                          https://exemplo.com/produto
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Novo Link</p>
                        <Input defaultValue="https://meu-dominio.com/produto" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Configurações da Página</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Nome da Página</p>
                      <Input defaultValue="Minha Página Clonada" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Slug da URL</p>
                      <Input defaultValue="minha-pagina-clonada" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Selecione o Domínio</p>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="default">pagespan.app/sua-pagina</option>
                        <option value="custom1">seudominio.com</option>
                        <option value="custom2">dominio-cliente.com</option>
                      </select>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setPreviewMode(false)}>
              Voltar
            </Button>
            <Button onClick={handleClone}>
              Clonar
            </Button>
          </CardFooter>
        </Card>
      )}
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Templates Populares</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Página de Vendas", thumbnail: "https://placehold.co/400x225/eef/aac" },
            { name: "Captura de Leads", thumbnail: "https://placehold.co/400x225/fee/caa" },
            { name: "Registro de Webinar", thumbnail: "https://placehold.co/400x225/efe/aca" }
          ].map((template, index) => (
            <div key={index} className="border rounded-md overflow-hidden hover:border-primary transition-colors">
              <img src={template.thumbnail} alt={template.name} className="w-full aspect-[16/9] object-cover" />
              <div className="p-3">
                <p className="font-medium">{template.name}</p>
                <Button variant="link" className="p-0 h-auto text-sm">
                  Usar este template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClonePage;

