'use client'

import { getFilters } from '@/http/get-filters'
import { useQuery } from '@tanstack/react-query'

interface IFiltersInput {
	key: string
}

export function useFilters({ key }: IFiltersInput) {
	const { data, isLoading } = useQuery({
		queryKey: ['filters', key],
		queryFn: () => getFilters({ key }),
		select: (response) => response.data ?? [],
		// enabled: !!key,
	})

	return {
		filters: data ?? [],
		isLoading,
	}
}
