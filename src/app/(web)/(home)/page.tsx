import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { JobCategories } from '@/components/ui/job/job-categories'
import { mockHeroData } from '@/data/website/hero'
import { Suspense } from 'react'

export default async function HomePage() {
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
		</div>
	)
}
