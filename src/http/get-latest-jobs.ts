import type { IJob } from '@/interfaces/job'
import { api } from '@/services/api'

interface GetJobsResquest {
	key: string
}

interface IMeta {
	current_page: number
	from: number
	last_page: number
	per_page: number
	to: number
	total: number
}

interface IJobsResponse {
	data: IJob[]
	meta?: IMeta
}

export async function getLatestJobs({
	key,
}: GetJobsResquest): Promise<IJobsResponse> {
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

	const data = (await response.json()) as IJobsResponse

	return data
}
