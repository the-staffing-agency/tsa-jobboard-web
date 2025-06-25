import { type ISearchJobsFilter, searchJobs } from '@/http/search-jobs'
import { Suspense } from 'react'
import { Jobs } from '../../ui/jobs'
import { JobResultsInfos } from './job-results-infos'
import { JobResultsPagination } from './job-results-pagination'

interface JobResultsParams {
	search: {
		q?: string
		filters?: ISearchJobsFilter
	}
}

export async function JobResults({ search }: JobResultsParams) {
	console.log('JobResults', search)

	const { data, meta } = await searchJobs({
		search,
	})

	const hasPagination = meta ? meta.total > meta.per_page : false

	return (
		<section className="space-y-2 lg:space-y-4 xl:space-y-6">
			<header>
				<h2 className="mb-0 font-bold text-2xl leading-none">
					Filtered results
				</h2>

				<JobResultsInfos meta={meta} />
			</header>

			<main>
				<Suspense>
					<Jobs jobs={data} />
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
