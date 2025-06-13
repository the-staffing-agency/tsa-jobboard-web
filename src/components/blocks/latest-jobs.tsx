'use client'

import { env } from '@/config/env'
import { useLatestJobs } from '@/hooks/use-latest-jobs'

import { Jobs } from '../ui/jobs/jobs'
import { JobsSkeleton } from '../ui/jobs/jobs-skeleton'

export function LastestJobs() {
	const { jobs, isLoading } = useLatestJobs({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
	})

	return isLoading ? <JobsSkeleton /> : <Jobs jobs={jobs} />
}
