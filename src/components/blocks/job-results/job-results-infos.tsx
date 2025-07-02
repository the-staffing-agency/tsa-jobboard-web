'use client'

import { SearchNotFound } from '@/components/search-not-found'

interface JobResultsInfosProps {
	query?: string
	found: number
}

function ResultQueryName({ query }: { query?: string }) {
	return (
		<span>
			for your search: <b>"{query}"</b>
		</span>
	)
}

export function JobResultsInfos({ query, found }: JobResultsInfosProps) {
	return (
		<div>
			{found > 0 ? (
				<span>
					Filtered <b>{found}</b> {`${found > 1 ? 'results' : 'result'}`}
					{query && <ResultQueryName query={query} />}
				</span>
			) : (
				<SearchNotFound />
			)}
		</div>
	)
}
