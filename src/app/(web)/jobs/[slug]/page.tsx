import { Container } from '@/components/ui/container'

export default function JobSinglePage() {
	return (
		<Container>
			<section className="flex flex-col gap-6 lg:flex-row">
				<main className="order-2 flex-3/4 lg:order-1">Main</main>

				<aside className="order-1 flex-1/4 lg:order-2">Widget Apply</aside>
			</section>
		</Container>
	)
}
