import { getTheme } from '@/actions/get-theme'
import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { SearchFrom } from '@/components/forms/search'
import {
	SectionBlock,
	SectionBlockCallToAction,
	SectionBlockHeader,
	SectionBlockSubTitle,
	SectionBlockTitle,
} from '@/components/section-block'
import { contentFeaturedJobs } from '@/data/website/sections/content-featured-jobs'
import { heroMock } from '@/mocks/hero.mock'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Loading() {
	const theme = await getTheme()

	const heroTitleText = heroMock[theme].title
	const heroSubtitleText = heroMock[theme].subtitle

	return (
		<>
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
			</SectionBlock>
		</>
	)
}
