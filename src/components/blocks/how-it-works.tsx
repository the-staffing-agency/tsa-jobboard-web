export function HowItWorksSections() {
	return (
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
	);
}
