import { PortalFilters } from '@/components/blocks/portal-filters'
import { Widget } from '@/components/widget'
import { type ComponentProps, Suspense } from 'react'

export interface PageSidebarProps extends ComponentProps<'aside'> {}

export function PageSidebarDefault({ children, ...props }: PageSidebarProps) {
	return (
		<aside className="relative flex-1/4 lg:min-w-sm" {...props}>
			<div className="lg:sticky lg:top-10">
				<Widget>
					<span className="mb-4 block font-bold text-2xl">Filter</span>
					<PortalFilters />
				</Widget>
			</div>
		</aside>
	)
}
