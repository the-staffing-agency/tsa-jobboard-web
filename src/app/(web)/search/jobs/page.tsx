import type { Metadata } from 'next'

import { JobResults } from '@/components/blocks/job-results'
import { SearchPageTemplate } from '@/templates/search'

const TITLE = 'Jobs'

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

	return (
		<SearchPageTemplate title={TITLE}>
			<JobResults params={params} />
		</SearchPageTemplate>
	)
}
