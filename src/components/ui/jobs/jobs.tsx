import type { IJob } from '@/interfaces/job'
import Link from 'next/link'
import { ApplyJobForm } from '../../forms/apply-job-form'

import {
	JobActions,
	JobBadgeType,
	JobCompany,
	JobContent,
	JobFooter,
	JobInfos,
	JobLocation,
	JobSalary,
	JobTitle,
	JobWrapperLink,
} from '../job'

import { ListView } from '../list-view'

interface JobsProps {
	jobs: IJob[]
}

export function Jobs({ jobs }: JobsProps) {
	if (!jobs) return null

	return (
		<ListView>
			{jobs.map((job) => (
				<JobWrapperLink key={job.id} link={`/jobs/${job.external_id}`}>
					<header>
						<JobTitle>{job.title}</JobTitle>

						<JobInfos className="flex-row gap-4">
							{job.company?.name && <JobCompany text={job.company.name} />}
							{job.location?.name && <JobLocation text={job.location.name} />}
						</JobInfos>
					</header>

					<JobContent>
						{/* <JobResumeText>{job.resume}</JobResumeText> */}
					</JobContent>

					<JobFooter>
						{job.job_type && <JobBadgeType type={job.job_type} />}

						{job.salary && (
							<JobSalary
								rateLow={job.salary?.rateLow}
								rateHigh={job.salary?.rateHigh}
								ratePer={job.salary?.ratePer}
							/>
						)}

						<JobActions>
							<Link
								href={`/jobs/${job.external_id}`}
								className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
							>
								View Job
							</Link>

							<ApplyJobForm jobId={job.external_id} />
						</JobActions>
					</JobFooter>
				</JobWrapperLink>
			))}
		</ListView>
	)
}
