import { env } from '@/config/env'
import type { ISearchJobsInput } from '@/hooks/use-search-jobs'
import { searchJobs } from '@/http/search-jobs'
import { Suspense } from 'react'
import { Jobs } from '../../ui/jobs'
import { JobResultsInfos } from './job-results-infos'
import { JobResultsPagination } from './job-results-pagination'

interface JobResultsProps extends Omit<ISearchJobsInput, 'key'> {}

export async function JobResults({ params }: JobResultsProps) {
	const { data: jobs, meta } = await searchJobs({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
		params,
	})

	const hasPagination = meta ? meta.total > meta.per_page : false

	return (
		<section className="space-y-2 lg:space-y-4 xl:space-y-6">
			<header>
				<h2 className="mb-0 font-bold text-2xl leading-none">
					Filtered results
				</h2>

				<JobResultsInfos meta={meta} term="term" />
			</header>

			<main>
				<Suspense>
					<Jobs jobs={jobs} />
				</Suspense>
			</main>

			{hasPagination ? (
				<footer>
					<JobResultsPagination meta={meta} />
				</footer>
			) : null}
		</section>
	)
}
