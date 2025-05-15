import type { NextRequest } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

const normalizeTerm = (term: string) =>
	term
		.toLocaleLowerCase()
		.normalize('NFD')
		// biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
		.replace(/[\u0300-\u036f]/g, '')

export async function GET(request: NextRequest) {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const { searchParams } = request.nextUrl

	const query = z.string().parse(searchParams.get('q'))
	const types = z.string().parse(searchParams.get('type'))
	const isSearchParamsByTypeAll = searchParams.has('type', 'all')

	const jobs = data.jobs.filter((job) => {
		const terms = normalizeTerm(query).split(/\s+/).filter(Boolean)

		const title = normalizeTerm(job.title)

		const company = normalizeTerm(job.company)
		const location = normalizeTerm(job.location)

		return terms.every(
			(term) =>
				title.includes(term) ||
				company.includes(term) ||
				location.includes(term),
		)
	})

	if (isSearchParamsByTypeAll) {
		return Response.json(jobs)
	}

	const jobsByType = jobs.filter((job) => {
		const typeTerms = normalizeTerm(types).split(',').filter(Boolean)

		const jobType = normalizeTerm(job.type)
		return typeTerms.some((type) => jobType.includes(type))
	})

	return Response.json(jobsByType)
}
