'use client'

import { useLatestJobs } from '@/hooks/use-latest-jobs'

import { JobListDisplay } from './job-list-display/job-list-display'
import { JobsResultsSkeleton } from './job-results'

export function LastestJobs() {
	const { jobs, isLoading } = useLatestJobs()

	return isLoading ? <JobsResultsSkeleton /> : <JobListDisplay jobs={jobs} />
}
