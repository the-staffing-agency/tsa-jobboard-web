import { api } from '@/lib/api'
import type { Job } from '../types/job'

const REVALIDATE_CACHE = 60 * 30 // 30min

interface SearchJobsInput {
	query: string
	type: string
}

export async function searchJobs({
	query,
	type,
}: SearchJobsInput): Promise<Job[]> {
	const response = await api(`/jobs/search?q=${query}&type=${type}`, {
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_CACHE,
		},
	})

	const jobs = await response.json()

	return jobs
}
