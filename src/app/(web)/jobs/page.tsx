import { ApplyJobForm } from '@/components/forms/apply-job-form'
import { FilterAsideJobForm } from '@/components/forms/filter-aside-job-form'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { GridView } from '@/components/ui/grid-view'
import {
	JobBadge,
	JobList,
	JobListAdditionalActions,
	JobListContent,
	JobListFooter,
	JobListHeader,
	JobListInfos,
	JobListTitle,
	JobResumeText,
	JobSalary,
} from '@/components/ui/job'
import { ListView } from '@/components/ui/list-view'
import { Widget } from '@/components/widget'
import { getManyJobs } from '@/data/jobs/get-many-jobs'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'

export default async function SearchPage() {
	const jobs = await getManyJobs()

	return (
		<>
			<PageHeader title="Jobs" description={pageHeaderContentMock.description}>
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
				<main className="w-full">
					<h2 className="mb-4 font-bold text-2xl">Recent Jobs</h2>
					<ListView>
						{jobs.map((job) => (
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

											<ApplyJobForm jobId={job.id} />
										</JobListAdditionalActions>
									</JobListFooter>
								</JobListContent>
							</JobList>
						))}
					</ListView>
				</main>
			</Container>
		</>
	)
}
