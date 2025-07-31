import { CategorySpheres } from '@/components/blocks/category-spheres'
import { SearchFrom } from '@/components/forms/search'
import {
	PageHeader,
	PageHeaderContainer,
	PageHeaderContent,
	PageHeaderTitle,
	PageMainDefault,
} from '@/components/templates'
import { Container } from '@/components/ui/container'
import { getThemeActions } from '@/config/theme/theme-actions'
import { THEMES } from '@/config/theme/theme-mapping'
import { type ComponentProps, Suspense } from 'react'

interface NoSidebarPageTemplateProps extends ComponentProps<'section'> {
	title: string
	resume?: string
}

export async function NoSidebarPageTemplate({
	title,
	children,
}: NoSidebarPageTemplateProps) {
	const theme = await getThemeActions()

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

			{theme !== THEMES.SUPERMARKET && <CategorySpheres />}

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<PageMainDefault>{children}</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</section>
	)
}
