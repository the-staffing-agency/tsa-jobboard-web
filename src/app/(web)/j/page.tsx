import type { Metadata } from 'next'

import { JobResults } from '@/components/blocks/job-results'
import { SearchPageTemplate } from '@/templates/pages'
import { redirect } from 'next/navigation'

const TITLE = 'Jobs'

export const metadata: Metadata = {
	title: TITLE,
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const params = await searchParams

	if (params.q) {
		redirect('/search/jobs')
	}

	const search = {
		q: '',
		filters: {
			category_id: (params?.category_id as string) || '',
			location_id: (params?.location_id as string) || '',
			company_id: (params?.company_id as string) || '',
		},
	}

	return (
		<SearchPageTemplate title={TITLE}>
			<JobResults search={search} />
		</SearchPageTemplate>
	)
}
