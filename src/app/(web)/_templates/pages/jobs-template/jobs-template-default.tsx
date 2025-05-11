import { PageHeader } from '@/app/(web)/_components/page-header'
import { FilterAsideJobForm } from '@/components/forms/filter-aside-job-form'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { JobBadge } from '@/components/jobs/job-badge'
import {
	JobList,
	JobListAdditionalActions,
	JobListContent,
	JobListFooter,
	JobListHeader,
	JobListInfos,
	JobListTitle,
} from '@/components/jobs/job-list'
import { JobResumeText } from '@/components/jobs/job-resume-text'
import { JobSalary } from '@/components/jobs/job-salary'
import { SearchNotFound } from '@/components/search-not-found'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Widget } from '@/components/widget'
import type { Job } from '@/data/types/job'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'
import Link from 'next/link'

interface JobTemplateProps {
	title: string
	jobs: Job[]
}
export function JobsTemplateDefault({ title, jobs }: JobTemplateProps) {
	return (
		<>
			<PageHeader title={title} description={pageHeaderContentMock.description}>
				<SearchJobFrom />
			</PageHeader>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<aside className="relative flex-1/4 lg:min-w-sm">
					<div className="sticky top-10">
						<Widget>
							<span className="mb-4 block font-bold text-2xl">Filter</span>
							<FilterAsideJobForm />
						</Widget>
					</div>
				</aside>

				<main className="flex-3/4">
					<div className="flex flex-col gap-1 lg:mb-6">
						<h2 className="mb-0 font-bold text-2xl leading-none">
							Filtered results
						</h2>
						<span className="text-base">
							Found <b>{jobs.length}</b>{' '}
							{jobs.length > 1 ? 'results' : 'result'} for "<b>{title}</b>"
						</span>
					</div>

					<div className="flex flex-col gap-2">
						{jobs.length > 0 ? (
							jobs.map((job) => (
								<JobList key={job.id} link={`/jobs/${job.id}`}>
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
													href={`/jobs/${job.id}`}
													className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
												>
													View Job
												</Link>

												<Button>Apply Now</Button>
											</JobListAdditionalActions>
										</JobListFooter>
									</JobListContent>
								</JobList>
							))
						) : (
							<SearchNotFound />
						)}
					</div>
				</main>
			</Container>
		</>
	)
}
