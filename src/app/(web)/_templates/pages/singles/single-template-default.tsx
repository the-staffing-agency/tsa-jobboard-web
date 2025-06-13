import { Container } from '@/components/ui/container'

interface SingePageProps {
	content: {
		id: number
		title: string
		resume?: string
	}
}

export function SinglePageDefault({ content }: SingePageProps) {
	const { id, title, resume } = content

	return (
		<Container className="flex lg:mt-10 lg:gap-10">
			<main className="flex-3/4 lg:order-1">
				<article className="max-w-[800px]">
					<header className="flex flex-col gap-1 lg:mb-6">
						<h1 className="font-bold text-2xl lg:text-4xl">Title</h1>
						{resume && (
							<p className="mt-0 font-normal text-lg lg:text-xl">Resume</p>
						)}
					</header>

					<main className="prose">
						<div className="mb-6 space-y-2 py-4 lg:mb-10">
							{/* {job.salary && (
								<div>
									<b>Salary</b>: {moneyFormatter.format(job.salary.start)} -{' '}
									{moneyFormatter.format(job.salary.end)} per {job.salary.type}
								</div>
							)}

							{job.type && (
								<div>
									<b>Job Type</b>: {job.type}
								</div>
							)}

							{job.location && (
								<div>
									<b>Location</b>: {job.location}
								</div>
							)}

							{job.company && (
								<div>
									<b>Company</b>: {job.company}
								</div>
							)} */}
						</div>

						<div className="flex flex-col gap-2">
							<h2>Job Description </h2>
							<p>
								Are you a passionate culinary professional with a flair for
								leading teams and crafting exceptional dining experiences? We
								are looking for a Head Chef to lead the kitchen operations of
								our upscale restaurant in downtown Toronto. As Head Chef, you
								will take charge of menu creation, ingredient sourcing, staff
								management, and maintaining the highest standards of food
								quality and presentation.
							</p>

							<h3>Menu Development & Culinary Leadership</h3>

							<ul>
								<li>
									Design seasonal, locally inspired menus that reflect fine
									dining excellence
								</li>
								<li>
									Create innovative dishes while respecting classical techniques
									and guest preferences
								</li>
								<li>
									Ensure consistent food quality, presentation, and taste across
									all meals
								</li>
								<li>
									Stay ahead of culinary trends and integrate them creatively
									into the menu
								</li>
							</ul>

							<h3>Kitchen Operations & Team Management</h3>

							<ul>
								<li>
									Supervise and mentor kitchen staff, ensuring smooth and
									efficient workflow
								</li>
								<li>
									Schedule staff shifts, assign prep tasks, and oversee training
								</li>
								<li>
									Implement and maintain hygiene, safety, and cleanliness
									standards in the kitchen
								</li>
								<li>
									Monitor inventory levels and coordinate with suppliers to
									ensure fresh and timely delivery of ingredients
								</li>
							</ul>

							<h3>Customer Experience & Collaboration</h3>

							<ul>
								<li>
									Collaborate with front-of-house managers to ensure optimal
									guest experiences
								</li>
								<li>
									Adapt menus for special events, private bookings, and dietary
									restrictions
								</li>
								<li>
									Interact with guests during special events or tastings to
									build rapport and gather feedback
								</li>
							</ul>

							<h2>Job Benefits Competitive</h2>
							<ul>
								<li> salary based on experience Performance-based bonuses</li>
								<li>Performance-based bonuses</li>
								<li>
									Opportunity to work with premium ingredients and local
									producers
								</li>
								<li>
									Dynamic, professional team culture with room for creative
									input
								</li>
								<li>Health & dental benefits</li>
							</ul>

							<h2>Ideal Candidate Profile</h2>
							<ul>
								<li>
									5+ years of experience as a Chef in fine dining or luxury
									hospitality
								</li>
								<li>Strong leadership and communication skills</li>
								<li>Creative mindset with a passion for food innovation</li>
								<li>
									Deep understanding of kitchen operations, food costing, and
									staff development
								</li>
							</ul>
						</div>
					</main>
				</article>
			</main>

			{/* <PageSidebarDefault>
				<Widget>
					<div className="flex flex-col gap-4">
						<div>
							<b className="text-lg">
								Ready to lead a kitchen that values creativity, precision, and
								passion?
							</b>
							<p>
								Apply now and bring your culinary vision to life with Maple
								Grove Fine Dining
							</p>
						</div>

						<ApplyJobForm jobId={id} />
					</div>
				</Widget>
			</SidebarDefault> */}
		</Container>
	)
}
