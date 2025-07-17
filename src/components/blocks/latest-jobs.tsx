'use client'

import { useLatestJobs } from '@/hooks/use-latest-jobs'

import { Jobs } from '../ui/jobs/jobs'
import { JobsResultsSkeleton } from './job-results'

export function LastestJobs() {
	const { jobs, isLoading } = useLatestJobs()

	return isLoading ? <JobsResultsSkeleton /> : <Jobs jobs={jobs} />
}
