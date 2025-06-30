import { JobApplicationForm } from '@/components/forms'
import { SanitizedHtml } from '@/components/sanitized-html'
import { PageAsideDefault } from '@/components/templates'
import { Container } from '@/components/ui/container'
import { Widget, WidgetContent, WidgetTitle } from '@/components/widget'

interface JobSinglePage {
	content: {
		id: number
		title: string
		description?: string
	}
}

export function JobSinglePage({ content }: JobSinglePage) {
	return (
		<Container className="flex lg:mt-10 lg:gap-10">
			<article className="max-w-[800px] flex-3/4">
				<header className="flex flex-col gap-1 lg:mb-6">
					<h1 className="font-bold text-xl lg:text-3xl">{content.title}</h1>
				</header>

				<main className="prose">
					{content.description && (
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl">Job Details</h2>
							<SanitizedHtml html={content.description} />
						</div>
					)}
				</main>
			</article>

			<PageAsideDefault>
				<Widget>
					<WidgetTitle>Apply Now</WidgetTitle>
					<WidgetContent>
						<div className="w-full">
							<JobApplicationForm id={content.id} />
						</div>
					</WidgetContent>
				</Widget>
			</PageAsideDefault>
		</Container>
	)
}
