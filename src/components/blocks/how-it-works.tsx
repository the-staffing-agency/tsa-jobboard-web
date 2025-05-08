export function HowItWorksSections() {
	return (
		<section className="bg-secondary/50 py-16">
			<div className="container mx-auto px-4">
				<h2 className="mb-10 text-center font-bold text-3xl">How It Works</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{[
						{
							step: '1',
							title: 'Search',
							description:
								'Browse through quality culinary and hospitality jobs, filtered by location, position, and experience level',
						},
						{
							step: '2',
							title: 'Apply',
							description:
								'Send your application directly to top restaurants, hotels, and catering services',
						},
						{
							step: '3',
							title: 'Get Hired',
							description:
								'Interview for positions that match your skills and advance your culinary career',
						},
					].map((item) => (
						<div key={item.step} className="text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xl">
								{item.step}
							</div>
							<h3 className="mb-3 font-bold text-xl">{item.title}</h3>
							<p className="text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
