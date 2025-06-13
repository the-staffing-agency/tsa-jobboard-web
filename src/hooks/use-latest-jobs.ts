'use client'

import { getLatestJobs } from '@/http/get-latest-jobs'
import { useQuery } from '@tanstack/react-query'

interface ILatestJobsInput {
	key: string
}

export function useLatestJobs({ key }: ILatestJobsInput) {
	const { data, isLoading } = useQuery({
		queryKey: ['latest-jobs', key],
		queryFn: () => getLatestJobs({ key }),
		select: (response) => response.data ?? [],
	})

	return {
		jobs: data ?? [],
		isLoading,
	}
}
