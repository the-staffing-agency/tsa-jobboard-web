'use client'

import { env } from '@/config/env'
import { type ISearchJobsInput, useSearchJobs } from '@/hooks/use-search-jobs'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { Pagination } from '../pagination'
import { Jobs, JobsSkeleton } from '../ui/jobs'

interface SearchJobFiltersProps extends Omit<ISearchJobsInput, 'key'> {
	title?: string
}

export function SearchJobFilters({ title, params }: SearchJobFiltersProps) {
	const searchParams = useSearchParams()
	const router = useRouter()

	const pageIndex = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.get('page') ?? '1')

	const { jobs, meta, isLoading } = useSearchJobs({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
		params: {
			...params,
			page: pageIndex,
		},
	})

	function handlePaginate(pageIndex: number) {
		const params = new URLSearchParams(searchParams.toString())
		params.set('page', (pageIndex + 1).toString())
		router.push(`?${params.toString()}`)
	}

	return (
		<section className="space-y-2 lg:space-y-4 xl:space-y-6">
			<header>
				<h2 className="mb-0 font-bold text-2xl leading-none">
					Filtered results
				</h2>
				{meta && (
					<span className="text-base">
						Found <b>{meta.total}</b> {meta.total > 1 ? 'results' : 'result'}{' '}
						{/* for "<b>{title}</b>" */}
					</span>
				)}
			</header>

			<main>{isLoading ? <JobsSkeleton /> : <Jobs jobs={jobs} />}</main>

			{meta && (
				<footer>
					<Pagination
						totalCount={meta.total}
						perPage={meta.per_page}
						pageIndex={pageIndex}
						onPageChange={handlePaginate}
					/>
				</footer>
			)}
		</section>
	)
}
