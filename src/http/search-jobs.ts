import type { IJob } from '@/interfaces/job'
import { api } from '@/services/api'

interface ISearchJobsFilters {
	title?: string
	location?: string
	locationId?: string
	company?: string
	companyId?: string
	category?: string
	categoryId?: string
	job_type?: string
	salary?: string
}

interface ISearchJobsRequest {
	key: string
	params: {
		q?: string
		filters?: ISearchJobsFilters
		page?: number
		per_page?: number
	}
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

export async function searchJobs({
	key,
	params,
}: ISearchJobsRequest): Promise<IJobsResponse> {
	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': key,
	})

	const searchParams = new URLSearchParams()

	const { q, filters, page, per_page } = params

	if (!params) {
	}

	if (q) {
		searchParams.append('q', q)
	}

	if (filters) {
		// biome-ignore lint/complexity/noForEach: <explanation>
		Object.entries(filters).forEach(([key, value]) => {
			if (value) {
				searchParams.append(`filter[${key}]`, value)
			}
		})
	}

	if (page) {
		searchParams.append('page', page.toString())
	}

	if (per_page) {
		searchParams.append('per_page', per_page.toString())
	}

	const queryString = searchParams.toString()
	const url = `/portals/jobs/search${queryString ? `?${queryString}` : ''}`

	const response = await api(url, {
		headers,
	})

	const data = (await response.json()) as IJobsResponse
	return data
}
