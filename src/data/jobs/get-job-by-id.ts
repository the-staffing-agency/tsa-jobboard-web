import { api } from '@/lib/api'
import type { Job } from '../types/job'

const REVALIDATE_CACHE = 60 * 30 // 30min

export async function getJobById(id: string): Promise<Job> {
	const response = await api(`/jobs/${id}`, {
		cache: 'force-cache',
		next: {
			revalidate: REVALIDATE_CACHE,
		},
	})

	const job = await response.json()

	return job
}
