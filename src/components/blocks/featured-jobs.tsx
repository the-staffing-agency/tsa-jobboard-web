import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'

import { getFeaturedJobs } from '@/data/jobs/get-featured-jobs'
import { contentFeaturedJobs } from '@/data/website/sections/content-featured-jobs'
import Link from 'next/link'
import {
	SectionBlock,
	SectionBlockCallToAction,
	SectionBlockContent,
	SectionBlockHeader,
	SectionBlockSubTitle,
	SectionBlockTitle,
} from '../section-block'
import { Badge } from '../ui/badge'
import { GridView } from '../ui/grid-view'
import { JobBadge } from '../ui/job/job-badge'
import {
	JobCard,
	JobCardContent,
	JobCardFooter,
	JobCardHeader,
	JobCardInfos,
	JobCardTitle,
} from '../ui/job/job-card'
import { JobResumeText } from '../ui/job/job-resume-text'
import { JobSalary } from '../ui/job/job-salary'

export async function FeaturedJobs() {
	const featuredJobs = await getFeaturedJobs()

	return (
		<SectionBlock>
			<SectionBlockHeader>
				<SectionBlockTitle>{contentFeaturedJobs.title}</SectionBlockTitle>
				<SectionBlockSubTitle>
					{contentFeaturedJobs.subtitle}
				</SectionBlockSubTitle>

				<SectionBlockCallToAction>
					<Link
						className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
						href={contentFeaturedJobs.callToAction.target}
					>
						{contentFeaturedJobs.callToAction.text}
					</Link>
				</SectionBlockCallToAction>
			</SectionBlockHeader>

			<SectionBlockContent>
				<GridView>
					{featuredJobs.map((job) => (
						<JobCard link={`/jobs/${job.id}`} key={job.id}>
							<JobCardContent>
								<JobCardHeader>
									<JobCardTitle>{job.title}</JobCardTitle>
									<JobCardInfos>
										<Badge className="p-0" variant={'ghost'}>
											<RiBuildingLine className="text-accent" />
											{job.company}
										</Badge>
										<Badge className="p-0" variant={'ghost'}>
											<RiMapPin2Line className="text-accent" />
											{job.location}
										</Badge>
									</JobCardInfos>
								</JobCardHeader>

								<JobResumeText>{job.resume}</JobResumeText>

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
				</GridView>
			</SectionBlockContent>
		</SectionBlock>
	)
}
