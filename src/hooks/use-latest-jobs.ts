'use client'

import { getLatestJobs } from '@/http/get-latest-jobs'
import { useQuery } from '@tanstack/react-query'

export function useLatestJobs() {
	const { data, isLoading } = useQuery({
		queryKey: ['latest-jobs'],
		queryFn: () => getLatestJobs(),
		select: (response) => response.data ?? [],
	})

	return {
		jobs: data ?? [],
		isLoading,
	}
}
