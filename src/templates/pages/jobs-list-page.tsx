import { PortalFiltersBlock } from '@/components/blocks/portal-filters-block'
import { SearchFrom } from '@/components/forms/search'
import {
	PageAsideDefault,
	PageHeader,
	PageHeaderResume,
	PageHeaderTitle,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
import type { ComponentProps } from 'react'

interface JobsListPageTemplateProps extends ComponentProps<'section'> {
	title: string
	resume?: string
}

export function JobsListPageTemplate({
	title,
	resume,
	children,
}: JobsListPageTemplateProps) {
	return (
		<section>
			<PageHeader>
				<PageHeaderTitle>{title}</PageHeaderTitle>
				{resume && <PageHeaderResume>{resume}</PageHeaderResume>}

				<div className="mt-2 lg:mt-4">
					<SearchFrom />
				</div>
			</PageHeader>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<PageAsideDefault>
					<PortalFiltersBlock />
				</PageAsideDefault>
				<PageMainDefault>{children}</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</section>
	)
}
