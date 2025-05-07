import type { Job } from "@/data/types/job";
import { api } from "@/lib/api";
import { RiBuildingLine, RiMapPin2Line } from "@remixicon/react";

import { contentFeacturedJobs } from "@/data/website/sections/feactured-jobs";
import Link from "next/link";
import { JobBadge } from "../jobs/job-badge";
import {
	JobCard,
	JobCardContent,
	JobCardFooter,
	JobCardHeader,
	JobCardInfos,
	JobCardResume,
	JobCardTitle,
} from "../jobs/job-card";
import { JobSalary } from "../jobs/job-salary";
import {
	SectionBlock,
	SectionBlockCallToAction,
	SectionBlockContent,
	SectionBlockHeader,
	SectionBlockSubTitle,
	SectionBlockTitle,
} from "../section-block";
import { Badge } from "../ui/badge";

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
		<SectionBlock>
			<SectionBlockHeader>
				<SectionBlockTitle>{contentFeacturedJobs.title}</SectionBlockTitle>
				<SectionBlockSubTitle>
					{contentFeacturedJobs.subtitle}
				</SectionBlockSubTitle>

				<SectionBlockCallToAction>
					<Link
						className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
						href={contentFeacturedJobs.callToAction.target}
					>
						{}
					</Link>
				</SectionBlockCallToAction>
			</SectionBlockHeader>

			<SectionBlockContent>
				{
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{featuredJobs.map((job) => (
							<JobCard key={job.id}>
								<JobCardContent>
									<JobCardHeader>
										<JobCardTitle>{job.title}</JobCardTitle>
										<JobCardInfos>
											<Badge className="p-0" variant={"ghost"}>
												<RiBuildingLine className="text-accent" />
												{job.company}
											</Badge>
											<Badge className="p-0" variant={"ghost"}>
												<RiMapPin2Line className="text-accent" />
												{job.location}
											</Badge>
										</JobCardInfos>
									</JobCardHeader>

									<JobCardResume>{job.resume}</JobCardResume>
									<JobCardFooter>
										<JobBadge type={job.type} />
										<JobSalary
											start={job.salary.start}
											end={job.salary.end}
											type={job.salary.type}
										/>
									</JobCardFooter>
								</JobCardContent>
							</JobCard>
						))}
					</div>
				}
			</SectionBlockContent>
		</SectionBlock>
	);
}
