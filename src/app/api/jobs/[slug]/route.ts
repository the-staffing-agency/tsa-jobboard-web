import { z } from 'zod'
import data from '../data.json'

import type { NextRequest } from 'next/server'

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const slug = z.string().parse((await params).slug)

	const job = data.jobs.find((job) => job.slug === slug)

	if (!job) {
		return Response.json(
			{
				message: 'Job not found.',
			},
			{
				status: 400,
			},
		)
	}

	return Response.json(job)
}
