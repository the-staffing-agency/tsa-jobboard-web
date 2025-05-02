import { JobData } from '@/data/jobs';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface JobCardProps {
  job: JobData;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all">
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
          <p className="text-card-foreground">{job.company}</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-muted-foreground">{job.location}</p>
          <p className="text-muted-foreground">{job.salary}</p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="capitalize">{job.jobType}</span>
          <span>{job.postedDate}</span>
        </div>
        
        <div className="pt-4">
          <Link href={`/job/${job.id}`}>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 