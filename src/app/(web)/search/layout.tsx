import { PortalFilters } from '@/components/blocks/portal-filters'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import {
	PageAsideDefault,
	PageHeader,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
import { Widget, WidgetContent, WidgetTitle } from '@/components/widget'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { Suspense } from 'react'

interface JobTemplateProps {
	title: string
	children: React.ReactNode
}

export default function SearchLayout({ title, children }: JobTemplateProps) {
	return (
		<>
			<PageHeader title={title} description={pageHeaderContentMock.description}>
				<Suspense>
					<SearchJobFrom />
				</Suspense>
			</PageHeader>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<PageAsideDefault>
					<Widget>
						<WidgetTitle>Filter</WidgetTitle>
						<WidgetContent>
							<PortalFilters />
						</WidgetContent>
					</Widget>
				</PageAsideDefault>

				<PageMainDefault>{children}</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</>
	)
}
