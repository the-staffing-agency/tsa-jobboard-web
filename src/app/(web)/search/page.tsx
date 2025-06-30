import { JobResults } from '@/components/blocks/job-results'
import { SearchPageTemplate } from '@/templates/pages'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

const TITLE = 'Search'

export const metadata: Metadata = {
	title: TITLE,
}

type SearchParams = {
	q?: string
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

	const search = {
		q: params.q || '',
	}

	return (
		<SearchPageTemplate title={TITLE}>
			<JobResults search={search} />
		</SearchPageTemplate>
	)
}
