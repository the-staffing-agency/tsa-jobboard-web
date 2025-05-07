import type { Job } from "@/data/types/job";
import { api } from "@/lib/api";

const REVALIDATE_CACHE = 60 * 30; // 30min

async function getFeaturedJobs(): Promise<Job[]> {
	const response = await api("/jobs/featured", {
		cache: "force-cache",
		next: {
			revalidate: REVALIDATE_CACHE,
		},
	});

	const jobs = await response.json();

	return jobs;
}

export async function FeaturedJobs() {
	const featuredJobs = await getFeaturedJobs();

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-10">
					Featured Job Openings
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{featuredJobs.map((job) => (
						<div key={job.id}>
							{job.title}
							{job.location}
							{job.company}
							{job.description}
						</div>
					))}
				</div>

				{/* <div className="text-center mt-10">
						<Button onClick={() => router.push("/search")} size="lg">
							View All Jobs
						</Button>
					</div> */}
			</div>
		</section>
	);
}
