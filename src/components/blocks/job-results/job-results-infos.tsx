'use client'

import { Skeleton } from '@/components/skaleton'
import type { IMeta } from '@/http/search-jobs'

interface JobResultsInfosProps {
	meta: IMeta
	term?: string
}

export function JobResultsInfos({ meta, term }: JobResultsInfosProps) {
	return meta ? (
		<span className="text-base">
			Found <b>{meta.total ? meta.total : <Skeleton className="h-4 w-8" />}</b>{' '}
			{meta.total > 1 ? 'results' : 'result'} for "<b>{term}</b>"
		</span>
	) : null
}
