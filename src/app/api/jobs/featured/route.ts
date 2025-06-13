import data from '../data.json'

export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const featuredJobs = data.jobs.filter((job) => job.featured)

	return Response.json(featuredJobs.slice(0, 6))
}
