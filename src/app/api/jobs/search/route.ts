import type { NextRequest } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

export async function GET(request: NextRequest) {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const { searchParams } = request.nextUrl

	const query = z.string().parse(searchParams.get('q'))
	const type = z.string().parse(searchParams.get('type'))

	const jobs = data.jobs.filter((job) => {
		return job.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
	})

	if (type.toLocaleLowerCase() === 'all') {
		return Response.json(jobs)
	}

	const jobsFilteredByType = jobs.filter((job) =>
		job.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()),
	)

	return Response.json(jobsFilteredByType)
}
