import { CategorySpheres } from '@/components/category-spheres'
import { SearchFrom } from '@/components/forms/search'
import {
	PageHeader,
	PageHeaderContainer,
	PageHeaderContent,
	PageHeaderTitle,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
import { type ComponentProps, Suspense } from 'react'

interface NoSidebarPageTemplateProps extends ComponentProps<'section'> {
	title: string
	resume?: string
}

export function NoSidebarPageTemplate({
	title,
	children,
}: NoSidebarPageTemplateProps) {
	return (
		<section>
			<PageHeader>
				<PageHeaderContainer>
					<PageHeaderTitle>{title}</PageHeaderTitle>
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
				<PageMainDefault>
					<CategorySpheres />
					{children}
				</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</section>
	)
}
