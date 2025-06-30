import { JobResults } from '@/components/blocks/job-results'
import { SearchPageTemplate } from '@/templates/search'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

const TITLE = 'Jobs'

interface SearchParams {
	q: string
}

export const metadata: Metadata = {
	title: TITLE,
}

export default async function JobsPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) {
	const params = await searchParams

	if (params.q) {
		redirect('/')
	}

	return (
		<SearchPageTemplate title={TITLE}>
			<JobResults params={params} />
		</SearchPageTemplate>
	)
}
