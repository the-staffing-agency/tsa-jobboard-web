import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from "@/components/blocks/hero";
import { JobsCategories } from "@/components/jobs-categories";
import { JobsFrom } from "@/components/jobs-form";
import { mockHeroData } from "@/data/website/hero";

export default async function HomePage() {
	return (
		<div className="min-h-screen bg-background">
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
		</div>
	);
}
