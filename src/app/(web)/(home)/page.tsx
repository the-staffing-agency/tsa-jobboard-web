import { FeaturedJobs } from '@/components/blocks/featured-jobs'
import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { JobsCategories } from '@/components/jobs/jobs-categories'
import { mockHeroData } from '@/data/website/hero'

export default async function HomePage() {
	return (
		<div className="min-h-screen">
			<Hero>
				<HeroContent>
					<HeroTitle>{mockHeroData.title}</HeroTitle>
					<HeroSubtitle>{mockHeroData.subtitle}</HeroSubtitle>
				</HeroContent>

				<HeroFooter>
					<SearchJobFrom />
					<JobsCategories />
				</HeroFooter>
			</Hero>

			<FeaturedJobs />
		</div>
	)
}
