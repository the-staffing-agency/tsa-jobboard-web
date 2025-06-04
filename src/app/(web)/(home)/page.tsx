import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Container } from '@/components/ui/container'
import { JobCategories } from '@/components/ui/job/job-categories'
import { ListView } from '@/components/ui/list-view'
import { env } from '@/config/env'
import { mockHeroData } from '@/data/website/hero'
import { getLatestJobs } from '@/http/get-latest-jobs'
import { Suspense } from 'react'

export default async function HomePage() {
	const { data: jobs } = await getLatestJobs({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
	})

	return (
		<div className="min-h-screen">
			<Hero>
				<HeroContent>
					<HeroTitle>{mockHeroData.title}</HeroTitle>
					<HeroSubtitle>{mockHeroData.subtitle}</HeroSubtitle>
				</HeroContent>

				<HeroFooter>
					<Suspense>
						<SearchJobFrom />
					</Suspense>
					<JobCategories />
				</HeroFooter>
			</Hero>

			<Container>
				<ListView>
					<Suspense
						fallback={<div className="text-white">Loading latest jobs...</div>}
					>
						{jobs.map((job) => (
							<div key={job.id} className="border-b p-4">
								<h3 className="font-semibold text-lg">{job.title}</h3>
								<p className="text-gray-500 text-sm">{job.external_id}</p>
							</div>
						))}
					</Suspense>
				</ListView>
			</Container>
		</div>
	)
}
