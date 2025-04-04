
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg">
              P
            </div>
            <span className="font-semibold text-lg">PageSnap</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm hover:text-primary">Recursos</a>
              <a href="#how-it-works" className="text-sm hover:text-primary">Como funciona</a>
              <a href="#pricing" className="text-sm hover:text-primary">Preços</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Cadastre-se grátis</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Clone qualquer Landing Page em Segundos
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Modifique, personalize e publique landing pages em seu próprio domínio sem conhecimento de programação.
              Perfeito para profissionais de marketing, agências e proprietários de negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Comece Gratuitamente
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">
                  Veja como funciona
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Recursos</span> que facilitam a clonagem de páginas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clonagem com Um Clique",
                description: "Simplesmente insira a URL e deixe nosso sistema clonar a página inteira para você em segundos."
              },
              {
                title: "Personalização Simples",
                description: "Modifique textos, links e botões sem precisar de experiência em programação."
              },
              {
                title: "Domínio Personalizado",
                description: "Publique suas páginas clonadas em seus próprios domínios com facilidade."
              },
              {
                title: "Análises",
                description: "Acompanhe estatísticas de visitantes, conversões e engajamento para todas as suas landing pages."
              },
              {
                title: "Múltiplos Modelos",
                description: "Escolha entre nossa biblioteca crescente de modelos de alta conversão."
              },
              {
                title: "Responsivo para Dispositivos Móveis",
                description: "Todas as páginas clonadas se adaptam automaticamente a computadores, tablets e dispositivos móveis."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-brand-primary transition-colors duration-200">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Como funciona</span> em 3 passos simples
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Cole a URL",
                  description: "Insira a URL de qualquer landing page que você deseja clonar"
                },
                {
                  step: "02",
                  title: "Edite o Conteúdo",
                  description: "Personalize textos, botões, links e cores para atender às suas necessidades"
                },
                {
                  step: "03",
                  title: "Publique",
                  description: "Implante em seu próprio domínio e comece a direcionar tráfego"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-semibold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-brand-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar a clonar landing pages?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a milhares de profissionais de marketing e empreendedores que usam o PageSnap para criar e publicar landing pages de alta conversão em minutos.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/register" className="flex items-center gap-2">
              Comece Gratuitamente
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-lg">
                  P
                </div>
                <span className="font-semibold text-lg text-white">PageSnap</span>
              </div>
              <p className="text-sm">
                Clone, personalize e publique landing pages em segundos sem programação. Perfeito para profissionais de marketing e proprietários de negócios.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Modelos</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Tutoriais</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Política de Direitos Autorais</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
            <p>© {new Date().getFullYear()} PageSnap. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
