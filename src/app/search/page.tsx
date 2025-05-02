'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import JobSearch from '@/components/JobSearch';
import JobFilters from '@/components/JobFilters';
import JobCard from '@/components/JobCard';
import SortMenu, { SortOption } from '@/components/SortMenu';
import { jobs } from '@/data/jobs';
import { ChefHat } from 'lucide-react';

type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
type Education = 'high-school' | 'bachelors' | 'masters' | 'phd' | 'none';

export default function SearchPage() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState<JobType[]>([]);
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 0 });
  const [education, setEducation] = useState<Education>('none');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check if there's a query parameter in the URL when component mounts
    const queryParam = searchParams.get('query');
    const locationParam = searchParams.get('location');
    const sortParam = searchParams.get('sort') as SortOption;
    
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    
    if (locationParam) {
      setSearchLocation(locationParam);
    }

    if (sortParam) {
      setSortBy(sortParam);
    }
    
    // Perform search with the query parameters
    if (queryParam || locationParam || sortParam) {
      handleSearch(queryParam || '', locationParam || '', sortParam || 'relevance');
    }
  }, [searchParams]);

  const handleSearch = (query: string, location: string, sort = sortBy) => {
    setSearchQuery(query);
    setSearchLocation(location);
    setSortBy(sort);
    
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (location) params.set('location', location);
    if (sort !== 'relevance') params.set('sort', sort);
    router.push(`/search?${params.toString()}`);
    
    let results = [...jobs];
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      results = results.filter(
        job => 
          job.title.toLowerCase().includes(lowercaseQuery) || 
          job.company.toLowerCase().includes(lowercaseQuery) ||
          job.description.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    if (location) {
      const lowercaseLocation = location.toLowerCase();
      results = results.filter(
        job => job.location.toLowerCase().includes(lowercaseLocation)
      );
    }
    
    if (selectedJobTypes.length > 0) {
      results = results.filter(job => 
        selectedJobTypes.some(type => job.jobType.includes(type))
      );
    }

    // Apply sorting
    results = sortJobs(results, sort);
    
    setFilteredJobs(results);
  };

  const sortJobs = (jobsToSort: typeof jobs, sortOption: SortOption): typeof jobs => {
    const sortedJobs = [...jobsToSort];
    
    switch (sortOption) {
      case 'date-newest':
        return sortedJobs.sort((a, b) => {
          const dateA = new Date(a.postedDate.split(' ')[0]);
          const dateB = new Date(b.postedDate.split(' ')[0]);
          return dateB.getTime() - dateA.getTime();
        });
      case 'date-oldest':
        return sortedJobs.sort((a, b) => {
          const dateA = new Date(a.postedDate.split(' ')[0]);
          const dateB = new Date(b.postedDate.split(' ')[0]);
          return dateA.getTime() - dateB.getTime();
        });
      case 'salary-high':
        return sortedJobs.sort((a, b) => {
          const salaryA = parseInt(a.salary.replace(/[^0-9]/g, '') || '0');
          const salaryB = parseInt(b.salary.replace(/[^0-9]/g, '') || '0');
          return salaryB - salaryA;
        });
      case 'salary-low':
        return sortedJobs.sort((a, b) => {
          const salaryA = parseInt(a.salary.replace(/[^0-9]/g, '') || '0');
          const salaryB = parseInt(b.salary.replace(/[^0-9]/g, '') || '0');
          return salaryA - salaryB;
        });
      case 'relevance':
      default:
        return sortedJobs;
    }
  };

  const handleJobTypeChange = (types: JobType[]) => {
    setSelectedJobTypes(types);
    handleSearch(searchQuery, searchLocation);
  };

  const handleSalaryChange = (min: number, max: number) => {
    const newRange = { 
      min: min || salaryRange.min, 
      max: max || salaryRange.max 
    };
    setSalaryRange(newRange);
    // In a real app, we would filter by salary here
    // For demo purposes, we're not implementing full salary filtering
  };

  const handleEducationChange = (edu: Education) => {
    setEducation(edu);
    // In a real app, we would filter by education here
  };

  const handleSortChange = (sortOption: SortOption) => {
    handleSearch(searchQuery, searchLocation, sortOption);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with search */}
      <section className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-text))] py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <ChefHat size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Find Your Culinary Dream Job
          </h1>
          <p className="text-opacity-90 text-center mb-8 max-w-2xl mx-auto">
            Search thousands of hospitality positions from top establishments
          </p>
          <JobSearch 
            onSearch={handleSearch} 
            initialQuery={searchQuery} 
            initialLocation={searchLocation} 
          />
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar with filters */}
          <div className="md:col-span-1">
            <JobFilters 
              onJobTypeChange={handleJobTypeChange}
              onSalaryChange={handleSalaryChange}
              onEducationChange={handleEducationChange}
              selectedTypes={selectedJobTypes}
            />
          </div>
          
          {/* Job listings */}
          <div className="md:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {filteredJobs.length} Jobs Found
              </h2>
              <SortMenu currentSort={sortBy} onSortChange={handleSortChange} />
            </div>
            
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No jobs found matching your criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 