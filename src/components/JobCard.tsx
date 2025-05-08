import { Button } from '@/components/ui/button'
import type { JobData } from '@/data/jobs'
import Link from 'next/link'

interface JobCardProps {
	job: JobData
}

export default function JobCard({ job }: JobCardProps) {
	return (
		<div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
			<div className="flex flex-col space-y-4">
				<div>
					<h3 className="font-semibold text-lg text-primary">{job.title}</h3>
					<p className="text-card-foreground">{job.company}</p>
				</div>

				<div className="space-y-2">
					<p className="text-muted-foreground">{job.location}</p>
					<p className="text-muted-foreground">{job.salary}</p>
				</div>

				<p className="line-clamp-2 text-muted-foreground text-sm">
					{job.description}
				</p>

				<div className="flex items-center justify-between text-muted-foreground text-sm">
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
	)
}
