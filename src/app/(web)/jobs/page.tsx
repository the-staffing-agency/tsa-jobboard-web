import { JobBadge } from '@/components/jobs/job-badge'
import { JobCardHeader, JobCardInfos } from '@/components/jobs/job-card'
import {
	JobList,
	JobListAdditionalActions,
	JobListContent,
	JobListFooter,
	JobListHeader,
	JobListInfos,
	JobListResume,
	JobListTitle,
} from '@/components/jobs/job-list'
import { JobResumeText } from '@/components/jobs/job-resume-text'
import { JobSalary } from '@/components/jobs/job-salary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getManyJobs } from '@/data/jobs/get-many-jobs'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'

export default async function SearchPage() {
	const jobs = await getManyJobs()

	return (
		<>
			<PageHeader
				title="Jobs"
				description={pageHeaderContentMock.description}
			/>

			<Container className="flex justify-center lg:mt-24">
				<main className="w-full max-w-[800px]">
					<h2 className="mb-4 font-bold text-2xl">Recent Jobs</h2>
					<div className="flex flex-col gap-2">
						{jobs.map((job) => (
							<JobList key={job.id} link={`/jobs/${job.slug}`}>
								<JobListContent>
									<JobListHeader>
										<JobListTitle>{job.title}</JobListTitle>

										<JobListInfos className="flex-row gap-4">
											<Badge className="p-0" variant={'ghost'}>
												<RiBuildingLine className="text-accent" />
												{job.company}
											</Badge>
											<Badge className="p-0" variant={'ghost'}>
												<RiMapPin2Line className="text-accent" />
												{job.location}
											</Badge>
										</JobListInfos>
									</JobListHeader>

									<JobResumeText>{job.resume}</JobResumeText>

									<JobListFooter>
										<JobBadge type={job.type} />

										<JobSalary
											start={job.salary.start}
											end={job.salary.end}
											type={job.salary.type}
										/>

										<JobListAdditionalActions>
											<Link
												href={`/jobs/${job.slug}`}
												className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
											>
												View Job
											</Link>

											<Button>Apply Now</Button>
										</JobListAdditionalActions>
									</JobListFooter>
								</JobListContent>
							</JobList>
						))}
					</div>
				</main>
			</Container>
		</>
	)
}
