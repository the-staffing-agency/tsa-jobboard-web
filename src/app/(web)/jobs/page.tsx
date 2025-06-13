import { LastestJobs } from '@/components/blocks/latest-jobs'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Container } from '@/components/ui/container'
import { ListView } from '@/components/ui/list-view'
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
				<main className="w-full max-w-[800px]">
					<h2 className="mb-4 font-bold text-2xl">Recent Jobs</h2>
					<ListView>
						<Suspense fallback={<div>Loading...</div>}>
							<LastestJobs />
						</Suspense>
					</ListView>
				</main>
			</Container>
		</>
	)
}
