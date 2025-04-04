
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Plus } from 'lucide-react';

// Mock data
const stats = [
  { title: "Active Pages", value: "12" },
  { title: "Total Views", value: "4,320" },
  { title: "Domains", value: "3" },
  { title: "Conversion Rate", value: "3.2%" }
];

const recentPages = [
  { name: "Product Launch", url: "product-launch", views: 842, date: "2025-03-28", thumbnail: "https://placehold.co/400x225" },
  { name: "Webinar Registration", url: "webinar-reg", views: 326, date: "2025-03-25", thumbnail: "https://placehold.co/400x225/eee/aaa" },
  { name: "Ebook Download", url: "ebook-landing", views: 194, date: "2025-03-22", thumbnail: "https://placehold.co/400x225/f0f0ff/aaaacc" }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here's what's happening with your landing pages.</p>
        </div>
        <Button asChild>
          <Link to="/clone" className="flex items-center gap-2">
            <Plus size={16} />
            Clone New Page
          </Link>
        </Button>
      </div>

      {/* Stats cards */}
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

      {/* Usage Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Plan Usage</CardTitle>
          <CardDescription>Free plan - 5/10 pages used</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={50} className="h-2" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-muted-foreground">5 landing pages remaining in your plan</p>
          <Button variant="outline" size="sm">
            Upgrade
          </Button>
        </CardFooter>
      </Card>

      {/* Recent Pages */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Pages</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/pages" className="flex items-center gap-1">
              View all <ArrowRight size={16} />
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
                  <p className="text-xs text-muted-foreground mb-3">Created: {page.date}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{page.views} views</span>
                    <Button variant="outline" size="sm">Edit</Button>
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
