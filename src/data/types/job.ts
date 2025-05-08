import type { JobType } from '@/components/jobs/job-badge'
import type { JobSalaryProps } from '@/components/jobs/job-salary'

export interface Job {
	id: number
	title: string
	slug: string
	company: string
	location: string
	type: JobType
	resume: string
	requirements: string[]
	url_avatar: string
	salary: JobSalaryProps
	created_at: string
	featured: boolean
}
