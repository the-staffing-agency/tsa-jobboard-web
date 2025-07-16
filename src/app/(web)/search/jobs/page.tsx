import type { Metadata } from 'next'

import { JobResults } from '@/components/blocks/job-results'
import { NoSidebarPageTemplate } from '@/templates/pages/no-sidebar'

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

	const search = {
		q: (params.q as string) || '',
		filters: {
			category_id: (params?.category_id as string) || '',
			location_id: (params?.location_id as string) || '',
			company_id: (params?.company_id as string) || '',
		},
	}

	return (
		<NoSidebarPageTemplate title={TITLE}>
			<JobResults search={search} />
		</NoSidebarPageTemplate>
	)
}
