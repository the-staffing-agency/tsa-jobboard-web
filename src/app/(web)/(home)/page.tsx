import { CategorySpheres } from '@/components/blocks/category-spheres'
import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { JobsLatest } from '@/components/blocks/jobs-latest'
import { SearchFrom } from '@/components/forms/search'
import { Container } from '@/components/ui/container'
import { getThemeActions } from '@/config/theme/theme-actions'
import { THEMES } from '@/config/theme/theme-mapping'
import { heroMock } from '@/mocks/hero.mock'
import { Suspense } from 'react'

export default async function HomePage() {
	const theme = await getThemeActions()

	const heroTitleText = heroMock[theme].title
	const heroSubtitleText = heroMock[theme].subtitle

	return (
		<div className="min-h-screen">
			<Hero>
				<HeroContent>
					<HeroTitle>{heroTitleText}</HeroTitle>
					{heroSubtitleText && <HeroSubtitle>{heroSubtitleText}</HeroSubtitle>}
				</HeroContent>

				<HeroFooter className="mt-2 lg:mt-4">
					<Suspense>
						<SearchFrom />
					</Suspense>
				</HeroFooter>
			</Hero>

			{theme !== THEMES.SUPERMARKET && <CategorySpheres />}

			<Container className="mt-10 flex flex-col gap-10">
				<main className="mx-auto w-full max-w-[800px]">
					<JobsLatest />
				</main>
			</Container>
		</div>
	)
}
