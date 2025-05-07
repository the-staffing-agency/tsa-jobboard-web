"use client";

import {
	Hero,
	HeroContent,
	HeroFooter,
	HeroSubtitle,
	HeroTitle,
} from "@/components/blocks/hero";
import { JobsCategories } from "@/components/jobs-categories";
import { JobsFrom } from "@/components/jobs-form";
import type { Job } from "@/data/types/job";
import { mockHeroData } from "@/data/website/hero";
import { api } from "@/lib/api";
import { ChefHat, Coffee, Hotel } from "lucide-react";
import Link from "next/link";

const REVALIDATE_CACHE = 60 * 30; // 30min

async function getFeaturedJobs(): Promise<Job[]> {
	const response = await api("/jobs/featured", {
		cache: "force-cache",
		next: {
			revalidate: REVALIDATE_CACHE,
		},
	});

	const jobs = await response.json();

	return jobs;
}

export default async function LandingPage() {
	// Get a limited set of jobs for SEO links
	const featuredJobs = await getFeaturedJobs();

	console.log(featuredJobs);
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

			{/* Featured Categories */}
			<section className="py-16 bg-secondary/50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-10">
						Popular Job Categories
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								title: "Culinary",
								icon: <ChefHat className="h-10 w-10 mb-4 text-primary" />,
								description: "Chef, Sous Chef, Line Cook positions",
							},
							{
								title: "Service",
								icon: <ChefHat className="h-10 w-10 mb-4 text-primary" />,
								description: "Servers, Bartenders, Hosts",
							},
							{
								title: "Beverage",
								icon: <Coffee className="h-10 w-10 mb-4 text-primary" />,
								description: "Baristas, Sommeliers, Mixologists",
							},
							{
								title: "Hospitality",
								icon: <Hotel className="h-10 w-10 mb-4 text-primary" />,
								description: "Hotel, Resort, Event Management",
							},
						].map((category) => (
							<div
								key={category.title}
								className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
							>
								<div className="flex justify-center">{category.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{category.title}</h3>
								<p className="text-muted-foreground mb-4">
									{category.description}
								</p>
								<Link
									href={`/search?query=${category.title.toLowerCase()}`}
									className="text-primary hover:underline font-medium inline-flex items-center"
								>
									View Jobs
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Jobs - Important for SEO */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-10">
						Featured Job Openings
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{featuredJobs.map((job) => (
							<div key={job.id}>
								{job.title}
								{job.location}
								{job.company}
								{job.description}
							</div>
						))}
					</div>

					{/* <div className="text-center mt-10">
						<Button onClick={() => router.push("/search")} size="lg">
							View All Jobs
						</Button>
					</div> */}
				</div>
			</section>

			{/* How It Works */}
			<section className="py-16 bg-secondary/50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								step: "1",
								title: "Search",
								description:
									"Browse through quality culinary and hospitality jobs, filtered by location, position, and experience level",
							},
							{
								step: "2",
								title: "Apply",
								description:
									"Send your application directly to top restaurants, hotels, and catering services",
							},
							{
								step: "3",
								title: "Get Hired",
								description:
									"Interview for positions that match your skills and advance your culinary career",
							},
						].map((item) => (
							<div key={item.step} className="text-center">
								<div className="w-12 h-12 bg-primary text-primary-foreground text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
									{item.step}
								</div>
								<h3 className="text-xl font-bold mb-3">{item.title}</h3>
								<p className="text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
