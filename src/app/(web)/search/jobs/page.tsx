import { SearchJobFilters } from '@/components/blocks/search-job-filters'

interface SearchParams {
	q?: string
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams>
}) {
	const params = await searchParams

	return <SearchJobFilters params={params} />
}
