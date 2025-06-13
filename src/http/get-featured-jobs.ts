import type { IJob } from '@/interfaces/job'
import { api } from '@/services/api'

interface GetFeaturedJobsRequest {
	key: string
	portal: string
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

export async function getFeaturedJobs({
	key,
	portal,
}: GetFeaturedJobsRequest): Promise<IJobsResponse> {
	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': key,
	})

	const response = await api(`/portals/jobs/featured/${portal}`, {
		headers,
	})

	const data = (await response.json()) as IJobsResponse
	return data
}
