import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from '@/components/blocks/hero'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import {
	SectionBlock,
	SectionBlockCallToAction,
	SectionBlockHeader,
	SectionBlockSubTitle,
	SectionBlockTitle,
} from '@/components/section-block'
import { JobCategories } from '@/components/ui/job/job-categories'
import { mockHeroData } from '@/data/website/hero'
import { contentFeaturedJobs } from '@/data/website/sections/content-featured-jobs'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Loading() {
	return (
		<>
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
