import { ChefHat, Coffee, Hotel } from 'lucide-react'
import Link from 'next/link'

export function FeaturedCategoriesSections() {
	return (
		<section className="bg-secondary/50 py-16">
			<div className="container mx-auto px-4">
				<h2 className="mb-10 text-center font-bold text-3xl">
					Popular Job Categories
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{
							title: 'Culinary',
							icon: <ChefHat className="mb-4 h-10 w-10 text-primary" />,
							description: 'Chef, Sous Chef, Line Cook positions',
						},
						{
							title: 'Service',
							icon: <ChefHat className="mb-4 h-10 w-10 text-primary" />,
							description: 'Servers, Bartenders, Hosts',
						},
						{
							title: 'Beverage',
							icon: <Coffee className="mb-4 h-10 w-10 text-primary" />,
							description: 'Baristas, Sommeliers, Mixologists',
						},
						{
							title: 'Hospitality',
							icon: <Hotel className="mb-4 h-10 w-10 text-primary" />,
							description: 'Hotel, Resort, Event Management',
						},
					].map((category) => (
						<div
							key={category.title}
							className="rounded-lg bg-card p-6 text-center shadow-md transition-shadow hover:shadow-lg"
						>
							<div className="flex justify-center">{category.icon}</div>
							<h3 className="mb-2 font-semibold text-xl">{category.title}</h3>
							<p className="mb-4 text-muted-foreground">
								{category.description}
							</p>
							<Link
								href={`/search?query=${category.title.toLowerCase()}`}
								className="inline-flex items-center font-medium text-primary hover:underline"
							>
								View Jobs
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
