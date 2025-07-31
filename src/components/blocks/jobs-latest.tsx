'use client'

import { useLatestJobs } from '@/hooks/use-latest-jobs'

import { JobListDisplay } from './job-list-display'
import { JobsResultsSkeleton } from './job-results'
import { NotFoundResult } from './not-found-result'

export function JobsLatest() {
	const { jobs, isLoading } = useLatestJobs()

	const isEmpty = jobs.length === 0

	if (isLoading) {
		return <JobsResultsSkeleton />
	}

	if (isEmpty) {
		return <NotFoundResult />
	}

	return (
		<>
			<h2 className="mb-4 font-bold font-heading text-2xl">Recent Jobs</h2>
			<JobListDisplay jobs={jobs} />
		</>
	)
}
