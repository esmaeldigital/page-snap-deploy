
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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
              <a href="#features" className="text-sm hover:text-primary">Features</a>
              <a href="#how-it-works" className="text-sm hover:text-primary">How it works</a>
              <a href="#pricing" className="text-sm hover:text-primary">Pricing</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign up free</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Clone any Landing Page in Seconds
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Modify, customize and deploy landing pages to your own domain without coding skills.
              Perfect for marketers, agencies, and business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">
                  See how it works
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Features</span> that make page cloning easy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Click Cloning",
                description: "Simply enter the URL and let our system clone the entire page for you in seconds."
              },
              {
                title: "Easy Customization",
                description: "Modify texts, links, and buttons without needing any coding experience."
              },
              {
                title: "Custom Domain",
                description: "Deploy your cloned pages to your own custom domains with ease."
              },
              {
                title: "Analytics",
                description: "Track visitor stats, conversions, and engagement for all your landing pages."
              },
              {
                title: "Multiple Templates",
                description: "Choose from our growing library of high-converting templates."
              },
              {
                title: "Mobile Responsive",
                description: "All cloned pages automatically adapt to desktop, tablet, and mobile devices."
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

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">How it works</span> in 3 simple steps
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Paste URL",
                  description: "Enter the URL of any landing page you want to clone"
                },
                {
                  step: "02",
                  title: "Edit Content",
                  description: "Customize texts, buttons, links, and colors to match your needs"
                },
                {
                  step: "03",
                  title: "Publish",
                  description: "Deploy to your own domain and start driving traffic"
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-brand-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start cloning landing pages?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of marketers and entrepreneurs who use PageSnap to create and deploy high-converting landing pages in minutes.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/register" className="flex items-center gap-2">
              Start For Free
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
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
                Clone, customize and deploy landing pages in seconds without coding. Perfect for marketers and business owners.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Copyright Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
            <p>© {new Date().getFullYear()} PageSnap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
