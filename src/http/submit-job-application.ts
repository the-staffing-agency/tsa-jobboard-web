import { getCurrentPortalKey } from '@/config/portal/portal-service'
import { api } from '@/lib/api'
import { PortalKeyNotFound } from './errors/portal-key-not-found'

interface IJobApplicationData {
	first_name: string
	last_name: string | null
	email: string
	phone?: string
	mobile?: string
	resume?: File
}

export interface IJobApplicationRequest {
	id: string
	data: IJobApplicationData
}

export interface IJobApplicationResponse {
	success: boolean
	message: string
}

export async function submitJobApplication({
	id,
	data,
}: IJobApplicationRequest): Promise<IJobApplicationResponse> {
	const portalKey = await getCurrentPortalKey()

	if (!portalKey) {
		throw new PortalKeyNotFound()
	}

	const formData = new FormData()

	formData.append('first_name', data.first_name)
	formData.append('last_name', data.last_name ?? '')
	formData.append('email', data.email.trim())

	data.phone && formData.append('phone', data.phone.trim())
	data.mobile && formData.append('mobile', data.mobile.trim())
	data.resume && formData.append('resume', data.resume)

	const headers = new Headers({
		Accept: 'application/json',
		'x-api-key': portalKey,
	})

	const response = await api(`/portals/jobs/${id}/application`, {
		method: 'POST',
		headers,
		body: formData,
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`API Error: ${response.status} - ${errorText}`)
	}

	const result = (await response.json()) as IJobApplicationResponse

	return result
}
