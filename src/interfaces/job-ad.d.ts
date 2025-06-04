export interface JobAdInterface {
	id: number
	external_id: number
	job_id: number
	title: string
	state: string
	reference: string
	summary: string
	description: string
	posted_at: string
	expires_at: string
	updated_at: string | null
	created_at: string
}
