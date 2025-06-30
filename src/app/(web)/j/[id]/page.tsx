import { getJobById } from '@/http/get-job-by-id'
import { JobSinglePage } from '@/templates/single/job-single-page'

// function getPageTitle(title: string) {
// 	const titleCapitalize = capitalizeWords(title.replaceAll('-', ' '))
// 	return titleCapitalize ? titleCapitalize : 'Jobs'
// }

// export async function generateMetadata({
// 	id,
// }: {
// 	params: Promise<{
// 		id: string
// 	}>
// }) {
// 	// const [firstParamsCanBeIdOrSlug] = (await params).params

// 	// const isParamsId = isNumeric(firstParamsCanBeIdOrSlug)

// 	// if (isParamsId) {
// 	// 	const [id] = (await params).params
// 	// 	jobContent = await getJobById(id)

// 	// 	return {
// 	// 		title: jobContent.title,
// 	// 	}
// 	// }

// 	// if (!isParamsId) {
// 	// 	const [slug] = (await params).params

// 	// 	pageTitle = getPageTitle(slug.replace(/^chef-/, ''))

// 	// 	return {
// 	// 		title: slug.replaceAll('-', ' ').toUpperCase(),
// 	// 	}
// 	// }
// }

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	const { data } = await getJobById({ id })

	return <JobSinglePage content={data} />
}
