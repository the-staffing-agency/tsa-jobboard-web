import { FilterAsideJobForm } from '@/components/forms/filter-aside-job-form'
import { JobBadge } from '@/components/jobs/job-badge'
import {
	JobList,
	JobListAdditionalActions,
	JobListContent,
	JobListFooter,
	JobListHeader,
	JobListInfos,
	JobListTitle,
} from '@/components/jobs/job-list'
import { JobResumeText } from '@/components/jobs/job-resume-text'
import { JobSalary } from '@/components/jobs/job-salary'
import { SearchNotFound } from '@/components/search-not-found'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Widget } from '@/components/widget'
import { searchJobs } from '@/data/jobs/search-jobs'
import { RiBuildingLine, RiMapPin2Line } from '@remixicon/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { PageHeader } from '../_components/page-header'

type SearchParams = Promise<{ q: string; type: string }>

export default async function SearchPage({
	searchParams,
}: {
	searchParams: SearchParams
}) {
	const { q: query, type } = await searchParams

	if (!query) {
		redirect('/')
	}

	const jobs = await searchJobs({ query, type })

	return (
		<>
			<PageHeader title={query} />

			<Container className="flex lg:mt-24 lg:gap-10">
				<aside className="relative flex-1/4 lg:min-w-sm">
					<div className="sticky top-96">
						<Widget>
							<span className="mb-4 block font-black text-2xl">Filter</span>
							<FilterAsideJobForm />
						</Widget>
					</div>
				</aside>

				<main className="flex-3/4">
					<div className="flex flex-col gap-1 lg:mb-6">
						<h2 className="mb-0 font-bold text-2xl leading-none">
							Filtered results
						</h2>
						<span className="text-base">
							Found <b>{jobs.length}</b>{' '}
							{jobs.length > 1 ? 'results' : 'result'} for "<b>{query}</b>"
						</span>
					</div>

					<div className="flex flex-col gap-2">
						{jobs.length > 0 ? (
							jobs.map((job) => (
								<JobList key={job.id} link={`/jobs/${job.slug}`}>
									<JobListContent>
										<JobListHeader>
											<JobListTitle>{job.title}</JobListTitle>

											<JobListInfos className="flex-row gap-4">
												<Badge className="p-0" variant={'ghost'}>
													<RiBuildingLine className="text-accent" />
													{job.company}
												</Badge>
												<Badge className="p-0" variant={'ghost'}>
													<RiMapPin2Line className="text-accent" />
													{job.location}
												</Badge>
											</JobListInfos>
										</JobListHeader>

										<JobResumeText>{job.resume}</JobResumeText>

										<JobListFooter>
											<JobBadge type={job.type} />

											<JobSalary
												start={job.salary.start}
												end={job.salary.end}
												type={job.salary.type}
											/>

											<JobListAdditionalActions>
												<Link
													href={`/jobs/${job.slug}`}
													className="font-semibold text-accent underline underline-offset-1 hover:underline-offset-2"
												>
													View Job
												</Link>

												<Button>Apply Now</Button>
											</JobListAdditionalActions>
										</JobListFooter>
									</JobListContent>
								</JobList>
							))
						) : (
							<SearchNotFound />
						)}
					</div>
				</main>
			</Container>
		</>
	)
}

// "use client";

// import JobCard from "@/components/JobCard";
// import JobFilters from "@/components/JobFilters";
// import JobSearch from "@/components/JobSearch";
// import SortMenu, { type SortOption } from "@/components/SortMenu";
// import { Button } from "@/components/ui/button";
// import { jobs } from "@/data/jobs";
// import { ChefHat, Loader2 } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// type JobType = "full-time" | "part-time" | "contract" | "internship" | "remote";

// export default function SearchPage() {
// 	const [filteredJobs, setFilteredJobs] = useState(jobs);
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [searchLocation, setSearchLocation] = useState("");
// 	const [selectedJobTypes, setSelectedJobTypes] = useState<JobType[]>([]);
// 	const [salaryRange, setSalaryRange] = useState({ min: 0, max: 0 });
// 	const [sortBy, setSortBy] = useState<SortOption>("relevance");
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const jobsPerPage = 6;
// 	const displayedJobs = filteredJobs.slice(0, currentPage * jobsPerPage);
// 	const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);
// 	const [isLoadingMore, setIsLoadingMore] = useState(false);
// 	const loadMoreRef = useRef<HTMLDivElement | null>(null);

// 	const searchParams = useSearchParams();
// 	const router = useRouter();

// 	useEffect(() => {
// 		// Check if there's a query parameter in the URL when component mounts
// 		const queryParam = searchParams.get("query");
// 		const locationParam = searchParams.get("location");
// 		const sortParam = searchParams.get("sort") as SortOption;

// 		if (queryParam) {
// 			setSearchQuery(queryParam);
// 		}

// 		if (locationParam) {
// 			setSearchLocation(locationParam);
// 		}

// 		if (sortParam) {
// 			setSortBy(sortParam);
// 		}

// 		// Perform search with the query parameters
// 		if (queryParam || locationParam || sortParam) {
// 			handleSearch(
// 				queryParam || "",
// 				locationParam || "",
// 				sortParam || "relevance",
// 			);
// 		}
// 	}, [searchParams]);

// 	const handleSearch = (query: string, location: string, sort = sortBy) => {
// 		setCurrentPage(1);
// 		setSearchQuery(query);
// 		setSearchLocation(location);
// 		setSortBy(sort);

// 		// Update URL with search parameters
// 		const params = new URLSearchParams();
// 		if (query) params.set("query", query);
// 		if (location) params.set("location", location);
// 		if (sort !== "relevance") params.set("sort", sort);
// 		router.push(`/search?${params.toString()}`);

// 		let results = [...jobs];

// 		if (query) {
// 			const lowercaseQuery = query.toLowerCase();
// 			results = results.filter(
// 				(job) =>
// 					job.title.toLowerCase().includes(lowercaseQuery) ||
// 					job.company.toLowerCase().includes(lowercaseQuery) ||
// 					job.description.toLowerCase().includes(lowercaseQuery),
// 			);
// 		}

// 		if (location) {
// 			const lowercaseLocation = location.toLowerCase();
// 			results = results.filter((job) =>
// 				job.location.toLowerCase().includes(lowercaseLocation),
// 			);
// 		}

// 		if (selectedJobTypes.length > 0) {
// 			results = results.filter((job) =>
// 				selectedJobTypes.some((type) => job.jobType.includes(type)),
// 			);
// 		}

// 		// Apply sorting
// 		results = sortJobs(results, sort);

// 		setFilteredJobs(results);
// 	};

// 	const sortJobs = (
// 		jobsToSort: typeof jobs,
// 		sortOption: SortOption,
// 	): typeof jobs => {
// 		const sortedJobs = [...jobsToSort];

// 		switch (sortOption) {
// 			case "date-newest":
// 				return sortedJobs.sort((a, b) => {
// 					const dateA = new Date(a.postedDate.split(" ")[0]);
// 					const dateB = new Date(b.postedDate.split(" ")[0]);
// 					return dateB.getTime() - dateA.getTime();
// 				});
// 			case "date-oldest":
// 				return sortedJobs.sort((a, b) => {
// 					const dateA = new Date(a.postedDate.split(" ")[0]);
// 					const dateB = new Date(b.postedDate.split(" ")[0]);
// 					return dateA.getTime() - dateB.getTime();
// 				});
// 			case "salary-high":
// 				return sortedJobs.sort((a, b) => {
// 					const salaryA = Number.parseInt(
// 						a.salary.replace(/[^0-9]/g, "") || "0",
// 					);
// 					const salaryB = Number.parseInt(
// 						b.salary.replace(/[^0-9]/g, "") || "0",
// 					);
// 					return salaryB - salaryA;
// 				});
// 			case "salary-low":
// 				return sortedJobs.sort((a, b) => {
// 					const salaryA = Number.parseInt(
// 						a.salary.replace(/[^0-9]/g, "") || "0",
// 					);
// 					const salaryB = Number.parseInt(
// 						b.salary.replace(/[^0-9]/g, "") || "0",
// 					);
// 					return salaryA - salaryB;
// 				});
// 			case "relevance":
// 			default:
// 				return sortedJobs;
// 		}
// 	};

// 	const handleJobTypeChange = (types: JobType[]) => {
// 		setSelectedJobTypes(types);
// 		handleSearch(searchQuery, searchLocation);
// 	};

// 	const handleSalaryChange = (min: number, max: number) => {
// 		const newRange = {
// 			min: min || salaryRange.min,
// 			max: max || salaryRange.max,
// 		};
// 		setSalaryRange(newRange);
// 		// In a real app, we would filter by salary here
// 		// For demo purposes, we're not implementing full salary filtering
// 	};

// 	const handleSortChange = (sortOption: SortOption) => {
// 		handleSearch(searchQuery, searchLocation, sortOption);
// 	};

// 	// Infinite scroll: load next page when sentinel visible
// 	useEffect(() => {
// 		if (!infiniteScrollEnabled) return;
// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				if (
// 					!isLoadingMore &&
// 					entries[0].isIntersecting &&
// 					displayedJobs.length < filteredJobs.length
// 				) {
// 					setIsLoadingMore(true);
// 					setTimeout(() => {
// 						setCurrentPage((prev) => prev + 1);
// 						setIsLoadingMore(false);
// 					}, 500);
// 				}
// 			},
// 			{ rootMargin: "0px 0px 200px 0px" },
// 		);
// 		if (loadMoreRef.current) observer.observe(loadMoreRef.current);
// 		return () => observer.disconnect();
// 	}, [
// 		infiniteScrollEnabled,
// 		displayedJobs.length,
// 		filteredJobs.length,
// 		isLoadingMore,
// 	]);

// 	return (
// 		<div className="min-h-screen bg-background">
// 			{/* Hero section with search */}
// 			<section className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-text))] py-16">
// 				<div className="container mx-auto px-4">
// 					<div className="flex justify-center mb-4">
// 						<ChefHat size={40} />
// 					</div>
// 					<h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
// 						Find Your Culinary Dream Job
// 					</h1>
// 					<p className="text-opacity-90 text-center mb-8 max-w-2xl mx-auto">
// 						Search thousands of hospitality positions from top establishments
// 					</p>
// 					<JobSearch
// 						onSearch={handleSearch}
// 						initialQuery={searchQuery}
// 						initialLocation={searchLocation}
// 					/>
// 				</div>
// 			</section>

// 			{/* Main content */}
// 			<section className="container mx-auto px-4 py-8">
// 				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// 					{/* Sidebar with filters */}
// 					<div className="md:col-span-1">
// 						<JobFilters
// 							onJobTypeChange={handleJobTypeChange}
// 							onSalaryChange={handleSalaryChange}
// 							onEducationChange={() => {}}
// 							selectedTypes={selectedJobTypes}
// 						/>
// 					</div>

// 					{/* Job listings */}
// 					<div className="md:col-span-3">
// 						<div className="mb-4 flex items-center justify-between">
// 							<h2 className="text-xl font-semibold">
// 								{filteredJobs.length} Jobs Found
// 							</h2>
// 							<SortMenu currentSort={sortBy} onSortChange={handleSortChange} />
// 						</div>

// 						<div className="space-y-4">
// 							{displayedJobs.length > 0 ? (
// 								displayedJobs.map((job) => <JobCard key={job.id} job={job} />)
// 							) : (
// 								<div className="text-center py-10">
// 									<p className="text-muted-foreground">
// 										No jobs found matching your criteria
// 									</p>
// 								</div>
// 							)}
// 							{/* Sentinel for infinite scroll */}
// 							<div ref={loadMoreRef} />
// 							{isLoadingMore && (
// 								<div className="flex justify-center py-4">
// 									<Loader2 className="animate-spin h-6 w-6 text-primary" />
// 								</div>
// 							)}
// 						</div>
// 						{/* See More button triggers infinite scroll mode */}
// 						{!infiniteScrollEnabled &&
// 							displayedJobs.length < filteredJobs.length && (
// 								<div className="flex justify-center mt-6">
// 									<Button
// 										onClick={() => {
// 											setInfiniteScrollEnabled(true);
// 											setIsLoadingMore(true);
// 											setTimeout(() => {
// 												setCurrentPage((prev) => prev + 1);
// 												setIsLoadingMore(false);
// 											}, 500);
// 										}}
// 										disabled={isLoadingMore}
// 									>
// 										See More
// 									</Button>
// 								</div>
// 							)}
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }
