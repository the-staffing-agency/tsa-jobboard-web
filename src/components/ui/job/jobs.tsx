import { ApplyJobForm } from '@/components/forms/apply-job-form'
import { getManyJobs } from '@/data/jobs/get-many-jobs'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'

import Link from 'next/link'
import { Badge } from '../badge'
import { JobBadge } from './job-badge'
import {
	JobList,
	JobListAdditionalActions,
	JobListContent,
	JobListFooter,
	JobListHeader,
	JobListInfos,
	JobListTitle,
} from './job-list'
import { JobResumeText } from './job-resume-text'
import { JobSalary } from './job-salary'

export async function Jobs() {
	const jobs = await getManyJobs()

	return (
		<>
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
		</>
	)
}
