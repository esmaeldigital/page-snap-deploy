
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Check, ExternalLink } from 'lucide-react';

// Mock data
const domains = [
  { 
    id: '1',
    name: "mycompany.com",
    status: "verified",
    addedDate: "2025-02-15",
    pages: 3
  },
  { 
    id: '2',
    name: "client-domain.com",
    status: "verified",
    addedDate: "2025-03-01",
    pages: 1
  },
  { 
    id: '3',
    name: "marketing-site.com",
    status: "pending",
    addedDate: "2025-04-01",
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
    // Here would go the actual domain addition logic
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Domain Management</h1>
          <p className="text-muted-foreground">Connect custom domains to host your landing pages</p>
        </div>
        <Button onClick={() => setIsAddingDomain(true)}>
          <Plus size={16} className="mr-2" />
          Add Domain
        </Button>
      </div>

      {isAddingDomain && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Domain</CardTitle>
            <CardDescription>
              Enter the domain you want to connect to your PageSnap account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddDomain} className="space-y-4">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium mb-1">
                  Domain Name
                </label>
                <Input 
                  id="domain"
                  placeholder="example.com" 
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="max-w-md"
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" disabled={!newDomain}>Add Domain</Button>
                <Button type="button" variant="outline" onClick={() => setIsAddingDomain(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Your Domains</CardTitle>
          <CardDescription>
            Manage all domains connected to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted text-left text-sm">
                  <th className="px-4 py-3 font-medium">Domain</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Added Date</th>
                  <th className="px-4 py-3 font-medium">Pages</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
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
                          <span>Verified</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                          <span>Pending</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{domain.addedDate}</td>
                    <td className="px-4 py-3">{domain.pages}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Verify
                        </Button>
                        <Button variant="ghost" size="sm">
                          DNS Settings
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
          <CardTitle>DNS Configuration Guide</CardTitle>
          <CardDescription>
            Follow these steps to configure your domain's DNS settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Step 1: Add DNS Records</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Add the following DNS records to your domain's DNS settings:
              </p>
              
              <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
                <table className="text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="pr-8 pb-2">Type</th>
                      <th className="pr-8 pb-2">Name</th>
                      <th className="pr-8 pb-2">Value</th>
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
              
              <h3 className="font-medium mb-2">Step 2: Verify Your Domain</h3>
              <p className="text-sm text-muted-foreground mb-2">
                After adding the DNS records, click the "Verify" button next to your domain. 
                DNS changes can take up to 48 hours to propagate.
              </p>
              
              <h3 className="font-medium mb-2">Step 3: Start Using Your Domain</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Once verified, your domain is ready to use with any page in your account.
              </p>
              
              <div className="flex items-center mt-4">
                <a 
                  href="#" 
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  View detailed guide
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
