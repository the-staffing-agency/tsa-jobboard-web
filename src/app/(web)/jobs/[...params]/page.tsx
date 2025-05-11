import { getJobById } from '@/data/jobs/get-job-by-id'
import { searchJobs } from '@/data/jobs/search-jobs'
import type { Job } from '@/data/types/job'
import { capitalizeWords } from '@/utils/capitalize-words'
import { isNumeric } from '@/utils/is-numeric'
import { JobsTemplateDefault } from '../../_templates/pages/jobs-template'
import { SinglePageDefault } from '../../_templates/single-page'

let jobContent: JobContentOutput
let jobs: Job[]

let pageTitle: string

function getPageTitle(title: string) {
	const titleCapitalize = capitalizeWords(title.replaceAll('-', ' '))

	return titleCapitalize ? titleCapitalize : 'Jobs'
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{
		params: string[]
	}>
}) {
	const [firstParamsCanBeIdOrSlug] = (await params).params

	const isParamsId = isNumeric(firstParamsCanBeIdOrSlug)

	if (isParamsId) {
		const [id] = (await params).params
		jobContent = await getJobById(id)

		return {
			title: jobContent.title,
		}
	}

	if (!isParamsId) {
		const [slug] = (await params).params

		pageTitle = getPageTitle(slug.replace(/^chef-/, ''))

		return {
			title: slug.replaceAll('-', ' ').toUpperCase(),
		}
	}
}

interface JobContentOutput {
	id: number
	title: string
	resume?: string
}

export default async function Page({
	params,
}: {
	params: Promise<{
		params: string[]
	}>
}) {
	const [firstParamsCanBeIdOrSlug] = (await params).params

	const isParamsId = isNumeric(firstParamsCanBeIdOrSlug)

	if (isParamsId) {
		const [id] = (await params).params
		jobContent = await getJobById(id)
	}

	if (!isParamsId) {
		const [slug] = (await params).params

		const searchTerm = slug.replace(/^chef-/, '').replace(/-/g, ' ')

		pageTitle = getPageTitle(slug.replace(/^chef-/, ''))

		jobs = await searchJobs({
			query: searchTerm,
			type: 'all',
		})
	}

	return (
		<>
			{isParamsId ? (
				<SinglePageDefault content={jobContent} />
			) : (
				<JobsTemplateDefault title={pageTitle} jobs={jobs} />
			)}
		</>
	)
}
