import type { CompanyInterface } from './company'
import type { LocationInterface } from './location'
import type { SalaryInterface } from './salary'
import type { WorkplaceAddressInterface } from './workplace-address'

export interface JobInterface {
	id: number
	external_id: number
	title: string
	description: string
	location?: LocationInterface
	company?: CompanyInterface
	source: string
	number_of_jobs: number
	workplace_address: WorkplaceAddressInterface
	category?: Category
	work_shift: string | null
	duration: string | null
	work_type: string | null
	job_type: string | null
	salary?: SalaryInterface
	skill_tags: string[] | null
	start: string | null
	end_date: string | null
	closed_at: string | null
	created_at: string
	updated_at: string
	job_ads?: JobAd[]
}
