import { getCurrentPortalKey } from '@/config/portal/portal-service'
import { api } from '@/lib/api'
import type { IFilterOption } from '@/types'

export interface IFiltersResponse {
	categories: IFilterOption[]
	locations: IFilterOption[]
	workplaces: IFilterOption[]
}

export interface IFiltersRequest {
	key?: string
}

export async function getPortalFilters(): Promise<IFiltersResponse> {
	const portalKey = await getCurrentPortalKey()

	if (!portalKey) {
		throw new Error('No portal key found for current theme')
	}

	const headers = new Headers({
		'Content-Type': 'application/json',
		'x-api-key': portalKey,
	})

	const response = await api('/portals/filters', {
		headers,
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Erro na API: ${response.status} - ${errorText}`)
	}

	const { data } = await response.json()

	return {
		workplaces: data.workplaces,
		categories: data.categories,
		locations: data.locations,
	}
}
