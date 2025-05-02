'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChefHat, Coffee, Hotel } from "lucide-react";
import { jobs } from '@/data/jobs';
import Link from 'next/link';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Get a limited set of jobs for SEO links
  const featuredJobs = jobs.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-text))] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <ChefHat size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Dream Culinary Career
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-opacity-90">
            Browse thousands of hospitality and culinary positions from top restaurants, hotels, and catering services
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Chef, kitchen manager, sommelier..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <Button type="submit" className="ml-2">Search Jobs</Button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Button 
              variant="outline" 
              className="bg-primary/10 hover:bg-primary/20 border-primary/40"
              onClick={() => router.push('/search')}
            >
              Browse All Jobs
            </Button>
            <Button 
              variant="outline" 
              className="bg-primary/10 hover:bg-primary/20 border-primary/40"
              onClick={() => router.push('/search?query=chef')}
            >
              Chef Positions
            </Button>
            <Button 
              variant="outline" 
              className="bg-primary/10 hover:bg-primary/20 border-primary/40"
              onClick={() => router.push('/search?query=management')}
            >
              Management Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Job Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Culinary',
                icon: <ChefHat className="h-10 w-10 mb-4 text-primary" />,
                description: 'Chef, Sous Chef, Line Cook positions'
              },
              {
                title: 'Service',
                icon: <ChefHat className="h-10 w-10 mb-4 text-primary" />,
                description: 'Servers, Bartenders, Hosts'
              },
              {
                title: 'Beverage',
                icon: <Coffee className="h-10 w-10 mb-4 text-primary" />,
                description: 'Baristas, Sommeliers, Mixologists'
              },
              {
                title: 'Hospitality',
                icon: <Hotel className="h-10 w-10 mb-4 text-primary" />,
                description: 'Hotel, Resort, Event Management'
              }
            ].map((category) => (
              <div 
                key={category.title}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Link 
                  href={`/search?query=${category.title.toLowerCase()}`}
                  className="text-primary hover:underline font-medium inline-flex items-center"
                >
                  View Jobs
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs - Important for SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Link 
                href={`/job/${job.id}`} 
                key={job.id}
                className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{job.title}</h3>
                <p className="text-card-foreground mb-2">{job.company}</p>
                <p className="text-muted-foreground mb-3">{job.location}</p>
                <div className="text-sm text-muted-foreground flex items-center justify-between">
                  <span>{job.jobType}</span>
                  <span>{job.postedDate}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button onClick={() => router.push('/search')} size="lg">
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Search', description: 'Browse through quality culinary and hospitality jobs, filtered by location, position, and experience level' },
              { step: '2', title: 'Apply', description: 'Send your application directly to top restaurants, hotels, and catering services' },
              { step: '3', title: 'Get Hired', description: 'Interview for positions that match your skills and advance your culinary career' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
