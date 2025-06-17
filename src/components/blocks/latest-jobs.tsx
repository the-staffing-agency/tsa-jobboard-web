'use client'

import { env } from '@/config/env'
import { useLatestJobs } from '@/hooks/use-latest-jobs'

import { Jobs } from '../ui/jobs/jobs'
import { JobsResultsSkeleton } from './job-results'

export function LastestJobs() {
	const { jobs, isLoading } = useLatestJobs({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
	})

	return isLoading ? <JobsResultsSkeleton /> : <Jobs jobs={jobs} />
}
