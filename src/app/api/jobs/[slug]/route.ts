import { z } from "zod";
import data from "../data.json";

interface JobRequestParams {
	params: {
		slug: string;
	};
}

export async function GET(_, { params }: JobRequestParams) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const slug = z.string().parse(params.slug);

	const featuredJobs = data.jobs.filter((job) => job.featured);
	return Response.json(featuredJobs.slice(0, 6));
}
