'use client'

import { Pagination } from '@/components/pagination'
import type { IMeta } from '@/http/search-jobs'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'

interface JobResultsPaginationProps {
	meta: IMeta
}

export function JobResultsPagination({ meta }: JobResultsPaginationProps) {
	const searchParams = useSearchParams()
	const router = useRouter()

	const pageIndex = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.get('page') ?? '1')

	function handlePaginate(pageIndex: number) {
		const params = new URLSearchParams(searchParams.toString())

		params.set('page', (pageIndex + 1).toString())
		router.push(`?${params.toString()}`)
	}

	return (
		<Pagination
			totalCount={meta.total}
			perPage={meta.per_page}
			pageIndex={pageIndex}
			onPageChange={handlePaginate}
		/>
	)
}
