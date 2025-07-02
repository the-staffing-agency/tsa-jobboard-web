import { Container } from '@/components/ui/container'
import { PageHeader } from '../../../components/templates/page-header'

export default function AboutPage() {
	return (
		<>
			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<main className="w-full max-w-[800px]">
					<h2 className="mb-4 font-bold text-2xl">About Us</h2>
					<div className="prose">
						<p>
							Culinary Jobs is a job discovery platform built specifically for
							culinary professionals across Canada. From seasoned chefs to
							aspiring kitchen assistants, we connect passionate food experts
							with the right opportunities to grow their careers.{' '}
						</p>
						<h3>Our Mission </h3>
						<p>
							To empower culinary professionals by making job discovery simple,
							accessible, and tailored to their craft — helping talent find the
							right kitchens to thrive in. Our Vision To become the leading
							culinary job platform in Canada, inspiring a stronger, more
							connected food industry by bridging the gap between culinary
							talent and opportunity.
						</p>
					</div>
				</main>
			</Container>
		</>
	)
}
