'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Building,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  DollarSign,
} from 'lucide-react';
import { getJobById } from '@/data/jobs';

export default function JobDetail() {
  const params = useParams();
  const router = useRouter();
  const job = getJobById(params.id as string);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-8">The job listing you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/">Back to Job Listings</Link>
        </Button>
      </div>
    );
  }

  // For the demo, let's create extended details for the job
  const fullDescription = `${job.description}

As a ${job.title}, you will be responsible for:

• Collaborating with cross-functional teams to define, design, and ship new features
• Building reusable components and libraries for future use
• Ensuring the technical feasibility of UI/UX designs
• Optimizing application for maximum speed and scalability
• Identifying and correcting bottlenecks and bugs

Requirements:
• 3+ years of experience in the field
• Strong understanding of relevant technologies
• Excellent communication skills
• Problem-solving attitude
• Bachelor's degree in Computer Science or related field (or equivalent experience)
`;

  const companyDescription = `${job.company} is an industry leader in innovative solutions for businesses. We pride ourselves on our inclusive work environment, competitive benefits, and opportunities for professional growth. Our team is passionate about what we do and committed to excellence.`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/" className="text-primary hover:text-primary/80 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to job listings
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2">
          <div className="bg-card rounded-lg shadow-sm border p-6 mb-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center text-muted-foreground">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Posted {job.postedDate}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{job.jobType}</Badge>
                {job.salary && (
                  <Badge variant="secondary">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {job.salary}
                  </Badge>
                )}
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto mb-6">
              Apply Now
            </Button>

            <Separator className="my-6" />

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="whitespace-pre-line">
                {fullDescription}
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">How to Apply</h2>
              <p>
                To apply for this position, click the "Apply Now" button above and follow the instructions to submit your application. Please include your resume and a cover letter explaining why you're a good fit for this role.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Job Overview</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">Job Type</h3>
                    <p className="text-sm text-muted-foreground">{job.jobType}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">Salary</h3>
                    <p className="text-sm text-muted-foreground">{job.salary || 'Not specified'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium">Education</h3>
                    <p className="text-sm text-muted-foreground">Bachelor's degree (or equivalent experience)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">About the Company</h2>
              <p className="text-sm text-muted-foreground mb-4">
                {companyDescription}
              </p>
              <Button variant="outline" className="w-full">
                View Company Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 