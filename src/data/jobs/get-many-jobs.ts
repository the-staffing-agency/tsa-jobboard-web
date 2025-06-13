import { api } from '@/lib/api'
import type { Job } from '../types/job'

const REVALIDATE_CACHE = 60 * 30 // 30min

export async function getManyJobs(): Promise<Job[]> {
	const response = await api('/jobs', {
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_CACHE,
		},
	})

	const jobs = await response.json()

	return jobs
}
