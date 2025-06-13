import { api } from '@/services/api'

export interface IFilterOption {
	value: string
	label: string
}

export interface ISalaryRange {
	min: number
	max: number
}

export interface IFiltersData {
	job_types: IFilterOption[]
	workplaces: IFilterOption[]
	categories: IFilterOption[]
	work_types: IFilterOption[]
	salary_range: ISalaryRange
	companies: IFilterOption[]
}

export interface IFiltersResponse {
	data: IFiltersData
}

export interface IFiltersRequest {
	key: string
}

export async function getFilters({
	key,
}: IFiltersRequest): Promise<IFiltersResponse> {
	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': key,
	})

	const response = await api('/portals/filters', {
		headers,
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Erro na API: ${response.status} - ${errorText}`)
	}

	const data = (await response.json()) as IFiltersResponse
	return data
}
