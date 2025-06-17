import { PortalFilters } from '@/components/blocks/portal-filters'
import { SearchFrom } from '@/components/forms/search'
import {
	PageAsideDefault,
	PageHeader,
	PageHeaderResume,
	PageHeaderTitle,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
import { Widget, WidgetContent, WidgetTitle } from '@/components/widget'
import { type ComponentProps, Suspense } from 'react'

interface SearchPageTemplateProps extends ComponentProps<'section'> {
	title: string
	resume?: string
}

export function SearchPageTemplate({
	title,
	resume,
	children,
}: SearchPageTemplateProps) {
	return (
		<section>
			<PageHeader>
				<PageHeaderTitle>{title}</PageHeaderTitle>
				{resume && <PageHeaderResume>{resume}</PageHeaderResume>}
				<Suspense>
					<SearchFrom />
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
		</section>
	)
}
