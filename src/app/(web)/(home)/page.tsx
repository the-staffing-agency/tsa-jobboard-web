import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { LastestJobs } from '@/components/blocks/latest-jobs'
import { SearchFrom } from '@/components/forms/search'
import { Container } from '@/components/ui/container'
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

				<HeroFooter className="mt-2 lg:mt-4">
					<Suspense>
						<SearchFrom />
					</Suspense>
				</HeroFooter>
			</Hero>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<main className="w-full max-w-[800px]">
					<h2 className="mb-4 font-bold text-2xl">Recent Jobs</h2>
					<LastestJobs />
				</main>
			</Container>
		</div>
	)
}
