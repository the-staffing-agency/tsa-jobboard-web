import { PageHeader } from '@/app/(web)/_components/page-header'
import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Container } from '@/components/ui/container'
import { pageHeaderContentMock } from '@/data/website/pages/page-header'
import { Suspense } from 'react'
import { PageSidebarDefault } from '../../partials/page-aside-default'
import { PageMainDefault } from '../../partials/page-main-default'

interface JobTemplateProps {
	title: string
	children: React.ReactNode
}
export function JobsTemplateDefault({ title, children }: JobTemplateProps) {
	return (
		<>
			<PageHeader title={title} description={pageHeaderContentMock.description}>
				<Suspense>
					<SearchJobFrom />
				</Suspense>
			</PageHeader>

			<Container className="mt-10 flex flex-col justify-center gap-10 lg:flex-row">
				<PageSidebarDefault />
				<PageMainDefault>{children}</PageMainDefault>
			</Container>

			<footer className="mt-20" />
		</>
	)
}
