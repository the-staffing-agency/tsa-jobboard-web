import { ChefHat, Search } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Hero() {
	const [searchQuery, setSearchQuery] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	return (
		<section className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-text))] py-20">
			<div className="container mx-auto px-4 text-center">
				<div className="flex justify-center mb-4">
					<ChefHat size={64} />
				</div>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					Find Your Dream Culinary Career
				</h1>
				<p className="text-xl mb-10 max-w-2xl mx-auto text-opacity-90">
					Browse thousands of hospitality and culinary positions from top
					restaurants, hotels, and catering services
				</p>

				<div className="max-w-md mx-auto">
					<form onSubmit={handleSubmit} className="flex">
						<div className="relative flex-grow">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Chef, kitchen manager, sommelier..."
								className="pl-10 w-full"
								value={searchQuery}
								onChange={handleSearchChange}
							/>
						</div>
						<Button type="submit" className="ml-2">
							Search Jobs
						</Button>
					</form>
				</div>

				<div className="mt-8 flex flex-wrap justify-center gap-2">
					<Button
						variant="outline"
						className="bg-primary/10 hover:bg-primary/20 border-primary/40"
						onClick={() => router.push("/search")}
					>
						Browse All Jobs
					</Button>
					<Button
						variant="outline"
						className="bg-primary/10 hover:bg-primary/20 border-primary/40"
						onClick={() => router.push("/search?query=chef")}
					>
						Chef Positions
					</Button>
					<Button
						variant="outline"
						className="bg-primary/10 hover:bg-primary/20 border-primary/40"
						onClick={() => router.push("/search?query=management")}
					>
						Management Jobs
					</Button>
				</div>
			</div>
		</section>
	);
}
