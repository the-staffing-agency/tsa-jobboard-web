import type { IJob } from '@/interfaces/job'

import {
	JobFooter,
	JobInfos,
	JobLocation,
	JobSalary,
	JobTitle,
	JobWrapperLink,
} from '../../ui/job'

import { ListView } from '../../ui/list-view'

interface JobsProps {
	jobs: IJob[]
}

export function JobListDisplay({ jobs }: JobsProps) {
	if (!jobs) return null

	return (
		<ListView>
			{jobs.map((job) => (
				<JobWrapperLink key={job.id} link={`/j/${job.id}`}>
					<header>
						<JobTitle>{job.title}</JobTitle>

						<JobInfos>
							{job.location?.name && <JobLocation text={job.location.name} />}
						</JobInfos>
					</header>

					<JobFooter>
						{job.salary && (
							<JobSalary
								rateLow={job.salary?.rateLow}
								rateHigh={job.salary?.rateHigh}
								ratePer={job.salary?.ratePer}
							/>
						)}
					</JobFooter>
				</JobWrapperLink>
			))}
		</ListView>
	)
}
