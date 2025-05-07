import data from "../data.json";

export async function GET() {
	const featuredJobs = data.jobs.filter((job) => job.featured);
	return Response.json(featuredJobs.slice(0, 6));
}
