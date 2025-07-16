import { getCurrentPortalKey } from '@/config/portal/portal-service'
import type { IJob } from '@/interfaces/job'
import { api } from '@/lib/api'

export interface ISearchJobsFilter {
	title?: string | string[]
	location_id?: string | string[]
	company_id?: string | string[]
	category_id?: string | string[]
	job_type?: string | string[]
	salary?: string
}

export interface ISearchJobsRequest {
	search: {
		q?: string
		filters?: ISearchJobsFilter
		page?: number
		per_page?: number
	}
}

interface ISearchJobsResponse {
	data: IJob[]
	meta: IMeta
}

export interface IMeta {
	current_page: number
	from: number
	last_page: number
	per_page: number
	to: number
	total: number
}

export async function searchJobs({
	search,
}: ISearchJobsRequest): Promise<ISearchJobsResponse> {
	const portalKey = await getCurrentPortalKey()

	if (!portalKey) {
		throw new Error('No portal key found for current theme')
	}

	const headers = new Headers({
		'Content-Type': 'application/json',
		'x-api-key': portalKey,
	})

	const searchParams = new URLSearchParams()

	const { q, filters, page, per_page } = search

	searchParams.append('search', q ? q : '')

	if (filters) {
		Object.entries(filters).forEach(([key, value]) => {
			Array.isArray(value)
				? value.forEach(
						(filter) => filter && searchParams.append(`filter[${key}]`, filter),
					)
				: searchParams.append(`filter[${key}]`, value)
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

	const response = await api(url, { headers })

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`API Error: ${response.status} - ${errorText}`)
	}

	const data = (await response.json()) as ISearchJobsResponse
	return data
}
