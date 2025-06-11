import { api } from '@/services/api'

interface IFilter {
	id: string
	name: string
	type: string
	options?: Array<{
		id: string
		name: string
	}>
}

interface GetFiltersRequest {
	key: string
}

interface IFiltersResponse {
	data: IFilter[]
}

export async function getFilters({
	key,
}: GetFiltersRequest): Promise<IFiltersResponse> {
	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': key,
	})

	const response = await api('/portals/filters', {
		headers,
	})

	const data = (await response.json()) as IFiltersResponse
	return data
}
