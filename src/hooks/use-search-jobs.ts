'use client'

import { searchJobs } from '@/http/search-jobs'
import { useQuery } from '@tanstack/react-query'

export interface ISearchJobsInput {
	key: string
	params: {
		q?: string
		filters?: {
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
		page?: number
		per_page?: number
	}
}

export function useSearchJobs({ key, params }: ISearchJobsInput) {
	const { data, isLoading } = useQuery({
		queryKey: ['search-jobs', key, params],
		queryFn: () => searchJobs({ key, params }),
		enabled: !!key,
	})

	return {
		jobs: data ? data.data : [],
		meta: data ? data.meta : undefined,
		isLoading,
	}
}
