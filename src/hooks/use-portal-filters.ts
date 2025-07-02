'use client'

import { getPortalFilters } from '@/http/get-portal-filters'
import { useQuery } from '@tanstack/react-query'

const PORTAL_FILTERS_QUERY_KEY = ['portal-filters']

export function usePortalFilters() {
	const { data, isLoading } = useQuery({
		queryKey: PORTAL_FILTERS_QUERY_KEY,
		queryFn: getPortalFilters,
		select: (response) => ({
			workplaces: response.workplaces,
			categories: response.categories,
			locations: response.locations,
		}),
	})

	return {
		workplaces: data?.workplaces ?? [],
		categories: data?.categories ?? [],
		locations: data?.locations ?? [],
		isLoading,
	}
}
