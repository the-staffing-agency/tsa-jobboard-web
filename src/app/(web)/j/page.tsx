import { JobsListPageTemplate } from '@/templates/pages/jobs-list-page'
import type { Metadata } from 'next'

const TITLE = 'Jobs'

export const metadata: Metadata = {
	title: TITLE,
}

export default async function JobsPage() {
	return (
		<JobsListPageTemplate title={TITLE}>
			<h1>Jobs List</h1>
		</JobsListPageTemplate>
	)
}
