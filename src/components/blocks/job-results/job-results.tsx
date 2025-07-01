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
	const { data, meta } = await searchJobs({
		search,
	})

	const totalResults = meta ? meta.total : 0

	const hasPagination = meta ? totalResults > meta.per_page : false

	return (
		<section className="space-y-2 lg:space-y-4 xl:space-y-6">
			<header className="mb-2">
				<JobResultsInfos query={search.q} found={totalResults} />
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
