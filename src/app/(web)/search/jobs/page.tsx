import { SearchJobFilters } from '@/components/blocks/search-job-filters'
import { JobsTemplateDefault } from '../../_templates/pages/jobs-template'

interface SearchParams {
	q?: string
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) {
	const params = await searchParams

	return (
		<JobsTemplateDefault title="Jobs">
			<SearchJobFilters params={params} />
		</JobsTemplateDefault>
	)
}
