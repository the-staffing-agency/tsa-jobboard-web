import { Container } from '@/components/ui/container'
import { PageHeader } from '../../../components/templates/page-header'

export default function ContactPage() {
	return (
		<>
			<Container className="flex justify-center lg:mt-10">
				<main className="w-full max-w-[800px]">
					<h2 className="mb-4 text-center font-bold text-2xl">
						Have a question, feedback, or need support?
					</h2>
					{/* <div className="flex flex-col gap-2"></div> */}
				</main>
			</Container>
		</>
	)
}
