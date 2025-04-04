
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search } from 'lucide-react';

const ClonePage = () => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPreviewMode(true);
    }, 2000);
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Clone a Landing Page</CardTitle>
          <CardDescription>
            Enter the URL of any landing page you want to clone and customize
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter landing page URL (e.g., https://example.com/landing)"
                  className="pl-9"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <Button type="submit" disabled={isProcessing || !url}>
                {isProcessing ? "Processing..." : "Clone Page"}
              </Button>
            </div>
          </form>
          
          <Alert className="mt-4 bg-muted">
            <AlertDescription className="text-sm">
              <strong>Note:</strong> Please ensure you have the legal right to use the content you're cloning.
              PageSnap is designed for cloning your own pages or pages you have permission to use.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      {previewMode && (
        <Card>
          <CardHeader>
            <CardTitle>Preview and Edit</CardTitle>
            <CardDescription>
              Review your cloned page and make necessary edits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="edit">Edit Links</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="space-y-4">
                <div className="border rounded-md p-4 bg-muted h-96 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Page Preview</h3>
                    <p className="text-sm text-muted-foreground mb-4">Preview of {url}</p>
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                      <div className="rounded-lg overflow-hidden h-[140px] md:h-[262px] bg-white">
                        <div className="flex items-center justify-center h-full text-sm text-gray-400">
                          Landing page preview would appear here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="edit" className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Edit Links and Buttons</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Original Button Text</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded">
                          Get Started Today
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">New Button Text</p>
                        <Input defaultValue="Get Started Today" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Original Button URL</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded truncate">
                          https://example.com/signup
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">New Button URL</p>
                        <Input defaultValue="https://my-domain.com/signup" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Original Link</p>
                        <div className="text-sm text-muted-foreground p-2 bg-muted rounded truncate">
                          https://example.com/product
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">New Link</p>
                        <Input defaultValue="https://my-domain.com/product" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">Page Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Page Name</p>
                      <Input defaultValue="My Cloned Landing Page" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">URL Slug</p>
                      <Input defaultValue="my-cloned-landing-page" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Select Domain</p>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="default">pagespan.app/your-page</option>
                        <option value="custom1">yourdomain.com</option>
                        <option value="custom2">client-domain.com</option>
                      </select>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setPreviewMode(false)}>
              Go Back
            </Button>
            <Button>
              Publish Page
            </Button>
          </CardFooter>
        </Card>
      )}
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popular Templates</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Sales Page", thumbnail: "https://placehold.co/400x225/eef/aac" },
            { name: "Lead Capture", thumbnail: "https://placehold.co/400x225/fee/caa" },
            { name: "Webinar Registration", thumbnail: "https://placehold.co/400x225/efe/aca" }
          ].map((template, index) => (
            <div key={index} className="border rounded-md overflow-hidden hover:border-primary transition-colors">
              <img src={template.thumbnail} alt={template.name} className="w-full aspect-[16/9] object-cover" />
              <div className="p-3">
                <p className="font-medium">{template.name}</p>
                <Button variant="link" className="p-0 h-auto text-sm">
                  Use this template
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
