
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const faqData = {
  'general': [
    {
      question: "What is PageSnap?",
      answer: "PageSnap is a SaaS application that allows you to clone landing pages from the web, customize elements like links and buttons, and deploy them to your own domain without coding knowledge."
    },
    {
      question: "Is it legal to clone websites?",
      answer: "Cloning websites for personal use, learning, or with permission is generally acceptable. However, be aware of copyright and intellectual property laws. PageSnap is intended for cloning your own pages or pages you have permission to use. Always respect copyright notices and terms of service."
    },
    {
      question: "How much does PageSnap cost?",
      answer: "PageSnap offers multiple pricing tiers, including a free plan that allows up to 10 landing pages. Paid plans start at $19/month with additional features and higher page limits."
    }
  ],
  'cloning': [
    {
      question: "How do I clone a landing page?",
      answer: "To clone a landing page, navigate to the 'Clone Page' section, enter the URL of the page you want to clone, and click 'Clone Page'. After processing, you'll be able to preview and edit the cloned page before publishing it."
    },
    {
      question: "What elements can I edit after cloning?",
      answer: "After cloning a page, you can edit links, button text, form destinations, and basic text content. The free plan allows link editing, while paid plans offer more extensive editing capabilities."
    },
    {
      question: "Why is my cloned page missing some elements?",
      answer: "Some websites use advanced protection techniques that may limit what can be cloned. Dynamic content, JavaScript-heavy elements, or protected sections might not be fully replicated in the cloned version."
    }
  ],
  'domains': [
    {
      question: "How do I connect my own domain?",
      answer: "Go to the 'Domains' section, click 'Add Domain', and enter your domain name. Then follow the provided DNS configuration instructions to point your domain to our servers. Verification typically takes 24-48 hours."
    },
    {
      question: "Do I need to buy a domain through PageSnap?",
      answer: "No, you can use any domain you already own. We don't sell domains directly, but you can use domains purchased from any domain registrar like GoDaddy, Namecheap, or Google Domains."
    },
    {
      question: "Can I use subdomains for different landing pages?",
      answer: "Yes, you can create and use different subdomains for various landing pages. For example, promo.yourdomain.com, signup.yourdomain.com, etc. Each subdomain needs to be configured in your DNS settings."
    }
  ]
};

const articles = [
  {
    title: "Getting Started with PageSnap",
    description: "Learn the basics of cloning and customizing your first landing page",
    category: "Basics",
    timeToRead: "5 min read"
  },
  {
    title: "Advanced Link Editing Techniques",
    description: "Tips and tricks for efficiently modifying multiple links and buttons",
    category: "Cloning",
    timeToRead: "8 min read"
  },
  {
    title: "Setting Up DNS for Your Domain",
    description: "Step-by-step guide to connecting your custom domain",
    category: "Domains",
    timeToRead: "10 min read"
  },
  {
    title: "Best Practices for Landing Page Conversions",
    description: "Optimize your cloned pages for maximum conversion rates",
    category: "Marketing",
    timeToRead: "12 min read"
  }
];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground mb-6">
          Find answers to common questions or browse our guides to get the most out of PageSnap
        </p>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-9 h-12"
            placeholder="Search for help articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions about using PageSnap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general">
              <TabsList className="mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="cloning">Cloning</TabsTrigger>
                <TabsTrigger value="domains">Domains</TabsTrigger>
              </TabsList>
              
              {Object.entries(faqData).map(([category, questions]) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  {questions.map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Guides</CardTitle>
            <CardDescription>
              Detailed tutorials to help you get the most out of PageSnap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <a 
                  key={index} 
                  href="#"
                  className="block border-b pb-4 last:border-0 hover:bg-muted/30 p-2 -mx-2 rounded-md"
                >
                  <span className="text-xs font-medium text-primary mb-1 inline-block">
                    {article.category}
                  </span>
                  <h3 className="font-medium mb-1 flex items-center gap-1 group">
                    {article.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{article.description}</p>
                  <span className="text-xs text-muted-foreground">{article.timeToRead}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Video Tutorials</CardTitle>
          <CardDescription>
            Step-by-step video guides to using PageSnap's features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Getting Started", duration: "4:32", thumbnail: "https://placehold.co/480x270/eef/aac" },
              { title: "Domain Setup", duration: "7:15", thumbnail: "https://placehold.co/480x270/fee/caa" },
              { title: "Advanced Editing", duration: "9:48", thumbnail: "https://placehold.co/480x270/efe/aca" }
            ].map((video, index) => (
              <div key={index} className="border rounded-md overflow-hidden hover:border-primary transition-colors">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover" 
                  />
                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-80">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-muted rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-3">Still need help?</h2>
        <p className="mb-4 text-muted-foreground">
          Our support team is ready to assist you with any questions you may have.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="text-primary hover:underline flex items-center gap-1">
            Contact Support
            <ExternalLink size={14} />
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-primary hover:underline flex items-center gap-1">
            Join Community
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
