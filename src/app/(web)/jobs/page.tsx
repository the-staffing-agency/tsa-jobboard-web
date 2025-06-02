import { FilterAsideJobForm } from '@/components/forms/filter-aside-job-form'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Container } from '@/components/ui/container'
import { Jobs } from '@/components/ui/job/jobs'
import { ListView } from '@/components/ui/list-view'
import { Widget } from '@/components/widget'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { Suspense } from 'react'
import { PageHeader } from '../_components/page-header'

export default async function SearchPage() {
	return (
		<>
			<PageHeader title="Jobs" description={pageHeaderContentMock.description}>
				<Suspense fallback={<div>SearchJobFrom Fallback</div>}>
					<SearchJobFrom />
				</Suspense>
			</PageHeader>
			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<aside className="relative flex-1/4 lg:min-w-sm">
					<div className="sticky top-10">
						<Widget>
							<span className="mb-4 block font-bold text-2xl">Filter</span>
							<FilterAsideJobForm />
						</Widget>
					</div>
				</aside>
				<main className="w-full">
					<h2 className="mb-4 font-bold text-2xl">Recent Jobs</h2>
					<ListView>
						<Suspense fallback={<div>Loading...</div>}>
							<Jobs />
						</Suspense>
					</ListView>
				</main>
			</Container>
		</>
	)
}
