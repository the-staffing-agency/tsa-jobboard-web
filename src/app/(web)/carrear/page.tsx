import { FeaturedJobs } from '@/components/blocks/featured-jobs'
import {
	JobCard,
	JobCardContent,
	JobCardHeader,
	JobCardInfos,
	JobCardTitle,
} from '@/components/jobs/job-card'
import { JobResumeText } from '@/components/jobs/job-resume-text'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { getManyJobs } from '@/data/jobs/get-many-jobs'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'

export default async function JobSinglePage() {
	const jobs = await getManyJobs()

	return (
		<Container>
			<section className="flex flex-col gap-6 py-4 lg:flex-row lg:py-6">
				<aside className="flex-1/4 lg:min-w-md">Widget Apply</aside>

				<main className="flex-3/4">
					<div className="flex flex-col gap-2">
						{jobs.map((job) => (
							<JobCard key={job.id}>
								<JobCardContent>
									<JobCardHeader>
										<JobCardTitle>{job.title}</JobCardTitle>
										<JobCardInfos>
											<Badge className="p-0" variant={'ghost'}>
												<RiBuildingLine className="text-accent" />
												{job.company}
											</Badge>
											<Badge className="p-0" variant={'ghost'}>
												<RiMapPin2Line className="text-accent" />
												{job.location}
											</Badge>
										</JobCardInfos>
									</JobCardHeader>

									<JobResumeText>{job.resume}</JobResumeText>
									{/* <JobCardFooter>
									<JobBadge type={job.type} />
									<JobSalary
										start={job.salary.start}
										end={job.salary.end}
										type={job.salary.type}
									/>
								</JobCardFooter> */}
								</JobCardContent>
							</JobCard>
						))}
					</div>
				</main>
			</section>
		</Container>
	)
}
