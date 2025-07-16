import { getCurrentPortalKey } from '@/config/portal/portal-service'
import type { IJob } from '@/interfaces/job'
import { api } from '@/lib/api'

interface IMeta {
	current_page: number
	from: number
	last_page: number
	per_page: number
	to: number
	total: number
}

interface IJobsResponse {
	data: IJob[]
	meta?: IMeta
}

export async function getLatestJobs(): Promise<IJobsResponse> {
	const portalKey = await getCurrentPortalKey()

	if (!portalKey) {
		throw new Error('No portal key found for current theme')
	}

	const headers = new Headers({
		'Content-type': 'application/json',
		'x-api-key': portalKey,
	})

	const response = await api('/portals/jobs/latest', {
		headers,
	})

	if (!response.ok) {
		const text = await response.text()
		throw new Error(`Erro na API: ${response.status} - ${text}`)
	}

	const data = (await response.json()) as IJobsResponse

	return data
}
