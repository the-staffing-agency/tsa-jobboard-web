import { Container } from '@/components/ui/container'
import { PageHeader } from '../_components/page-header'

export default function ContactPage() {
	return (
		<>
			<PageHeader
				title="Contact"
				description="We’re here to help you with anything related to job applications, partnerships, or general inquiries."
			/>

			<Container className="flex justify-center lg:mt-24">
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
