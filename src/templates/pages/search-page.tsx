import { PortalFiltersBlock } from '@/components/blocks/portal-filters-block'
import { CategorySpheres } from '@/components/category-spheres'
import { SearchFrom } from '@/components/forms/search'
import {
	PageAsideDefault,
	PageHeader,
	PageHeaderContainer,
	PageHeaderContent,
	PageHeaderResume,
	PageHeaderTitle,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
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
				<PageHeaderContainer>
					<PageHeaderTitle>{title}</PageHeaderTitle>

					<PageHeaderResume>
						Explore thousands of job opportunities in the culinary world.
					</PageHeaderResume>
				</PageHeaderContainer>

				<PageHeaderContent>
					<Suspense>
						<div className="mt-4">
							<SearchFrom />
						</div>
					</Suspense>
				</PageHeaderContent>
			</PageHeader>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<PageAsideDefault>
					<PortalFiltersBlock />
				</PageAsideDefault>
				<PageMainDefault>
					<CategorySpheres />
					{children}
				</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</section>
	)
}
