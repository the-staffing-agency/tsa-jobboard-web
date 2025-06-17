import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { JobResults } from '@/components/blocks/job-results'
import { SearchPageTemplate } from '@/templates/search'

const TITLE = 'Search'

export const metadata: Metadata = {
	title: TITLE,
}

interface SearchParams {
	q: string
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) {
	const params = await searchParams

	if (!params.q) {
		redirect('/search/jobs')
	}

	return (
		<SearchPageTemplate title={TITLE}>
			<JobResults params={params} />
		</SearchPageTemplate>
	)
}
