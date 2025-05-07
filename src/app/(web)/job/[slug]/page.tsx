import { Container } from "@/components/ui/container";

export default function JobSinglePage() {
	return (
		<Container>
			<section className="flex flex-col lg:flex-row gap-6">
				<main className="flex-3/4 order-2 lg:order-1">Main</main>

				<aside className="flex-1/4 order-1 lg:order-2">Widget Apply</aside>
			</section>
		</Container>
	);
}
