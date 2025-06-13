import { z } from 'zod'
import data from '../data.json'

import type { NextRequest } from 'next/server'

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const id = z.coerce.number().parse((await params).id)

	const job = data.jobs.find((job) => job.id === id)

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
