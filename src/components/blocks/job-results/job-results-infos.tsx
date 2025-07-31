'use client'

import { NotFoundResult } from '@/components/blocks/not-found-result'

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
					Filtered <b>{found}</b> {`${found > 1 ? 'results' : 'result'}`}{' '}
					{query && <ResultQueryName query={query} />}
				</span>
			) : (
				<NotFoundResult />
			)}
		</div>
	)
}
