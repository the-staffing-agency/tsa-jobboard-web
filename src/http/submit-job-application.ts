import { env } from '@/config/env'
import { api } from '@/lib/api'

interface IJobApplicationData {
	name: string
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
	const formData = new FormData()

	formData.append('name', data.first_name)
	formData.append('email', data.email.trim())

	data.phone && formData.append('phone', data.phone.trim())
	data.mobile && formData.append('mobile', data.mobile.trim())
	data.resume && formData.append('resume', data.resume)

	const headers = new Headers({
		Accept: 'application/json',
		'x-api-key': env.NEXT_PUBLIC_PORTAL_TCA_KEY,
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
