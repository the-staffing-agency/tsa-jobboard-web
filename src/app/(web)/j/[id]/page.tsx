import { getJobById } from '@/http/get-job-by-id'
import { JobSinglePage } from '@/templates/single/job-single-page'
import type { Metadata } from 'next'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const { id } = await params
	const { data } = await getJobById({ id })
	return {
		title: data.title,
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	const { data } = await getJobById({ id })

	return <JobSinglePage content={data} />
}
