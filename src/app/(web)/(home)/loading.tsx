import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from "@/components/blocks/hero";
import { JobsFrom } from "@/components/forms/jobs-form";
import { JobsCategories } from "@/components/jobs/jobs-categories";
import {
	SectionBlock,
	SectionBlockCallToAction,
	SectionBlockHeader,
	SectionBlockSubTitle,
	SectionBlockTitle,
} from "@/components/section-block";
import { mockHeroData } from "@/data/website/hero";
import { contentFeacturedJobs } from "@/data/website/sections/feactured-jobs";
import Link from "next/link";

export default function Loading() {
	return (
		<>
			<Hero>
				<HeroContent>
					<HeroTitle>{mockHeroData.title}</HeroTitle>
					<HeroSubtitle>{mockHeroData.subtitle}</HeroSubtitle>
				</HeroContent>

				<HeroFooter>
					<JobsFrom />
					<JobsCategories />
				</HeroFooter>
			</Hero>

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
			</SectionBlock>
		</>
	);
}
