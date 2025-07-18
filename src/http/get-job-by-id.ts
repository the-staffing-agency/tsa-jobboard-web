import { getCurrentPortalKey } from '@/config/portal/portal-service'
import { api } from '@/lib/api'
import { PortalKeyNotFound } from './errors/portal-key-not-found'

export interface ISearchJobsRequest {
	id: string
}

export interface IJobByIdResponse {
	data: IJobById
}

export interface IJobById {
	id: number
	title: string
	description: string
	location: IJobLocation
	company: IJobCompany
	source: string
	number_of_jobs: number
	workplace_address: IWorkplaceAddress
	category: IJobCategory
	work_shift: string | null
	duration: string | null
	work_type: string | null
	job_type: string | null
	salary: IJobSalary
	skill_tags: string[] | null
	start: string | null
	end_date: string | null
	closed_at: string | null
	created_at: string
	updated_at: string
	job_ads: IJobAd[]
}

export interface IJobLocation {
	name: string
	locationId: number
}

export interface IJobCompany {
	name: string
	links: {
		self: string
		mainContact: string
	}
	status: {
		name: string
		active: boolean
		statusId: number
	}
	companyId: number
}

export interface IWorkplaceAddress {
	url: string
	city: string
	name: string
	links: {
		self: string
	}
	phone: string
	state: string
	country: string
	addressId: string
}

export interface IJobCategory {
	name: string
	categoryId: number
	subCategory: {
		name: string
		subCategoryId: number
	}
}

export interface IJobSalary {
	rateLow: number
	ratePer: string
	currency: string
	rateHigh: number
}

export interface IJobAd {
	id: number
	external_id: number
	job_id: number
	title: string
	state: string
	reference: string
	summary: string
	description: string
}

export async function getJobById({
	id,
}: ISearchJobsRequest): Promise<IJobByIdResponse> {
	const portalKey = await getCurrentPortalKey()

	if (!portalKey) {
		throw new PortalKeyNotFound()
	}

	const headers = new Headers({
		'Content-Type': 'application/json',
		'x-api-key': portalKey,
	})

	const url = `/portals/jobs/${encodeURIComponent(id)}`

	const response = await api(url, { headers })

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`API Error: ${response.status} - ${errorText}`)
	}

	const data = (await response.json()) as IJobByIdResponse
	return data
}
