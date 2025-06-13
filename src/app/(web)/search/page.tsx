import { SearchJobFilters } from '@/components/blocks/search-job-filters'
import { redirect } from 'next/navigation'

interface SearchParams {
	q?: string
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) {
	const params = await searchParams

	const { q: query } = params

	if (!query) {
		redirect('/')
	}

	return <SearchJobFilters params={params} />
}
