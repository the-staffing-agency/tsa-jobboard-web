'use client'

import { getFeaturedJobs } from '@/http/get-featured-jobs'
import { useQuery } from '@tanstack/react-query'

interface IFeaturedJobsInput {
	key: string
	portal: string
}

export function useFeaturedJobs({ key, portal }: IFeaturedJobsInput) {
	const { data, isLoading } = useQuery({
		queryKey: ['featured-jobs', key, portal],
		queryFn: () => getFeaturedJobs({ key, portal }),
		select: (response) => response.data ?? [],
		// enabled: !!key && !!portal,
	})

	return {
		jobs: data ?? [],
		isLoading,
	}
}
