import type { JobInterface } from '@/interfaces/job'
import { api } from '@/services/api'

interface GetJobsResquest {
	key: string
}

interface GetJobsResponse {
	data: JobInterface[]
}

export async function getLatestJobs({
	key,
}: GetJobsResquest): Promise<GetJobsResponse> {
	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': key,
	})

	const response = await api('/portals/jobs/latest', {
		headers,
	})

	// if (!response.ok) {
	// 	const text = await response.text()
	// 	throw new Error(`Erro na API: ${response.status} - ${text}`)
	// }

	const data = await response.json()

	return data
}
