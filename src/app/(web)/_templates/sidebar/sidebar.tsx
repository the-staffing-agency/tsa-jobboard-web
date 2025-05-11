import type { ComponentProps } from 'react'

export interface SidebarProps extends ComponentProps<'aside'> {}

export function Sidebar({ children, ...props }: SidebarProps) {
	return (
		<aside className="relative flex-1/4 lg:order-2 lg:min-w-sm" {...props}>
			<div className="lg:sticky lg:top-20">{children}</div>
		</aside>
	)
}
