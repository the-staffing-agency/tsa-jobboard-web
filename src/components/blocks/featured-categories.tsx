import { ChefHat, Coffee, Hotel } from "lucide-react";
import Link from "next/link";

export function FeaturedCategoriesSections() {
	return (
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
	);
}
