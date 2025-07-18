import type { ComponentProps } from 'react'

export interface PageAsideProps extends ComponentProps<'aside'> {}

export function PageAsideDefault({ children, ...props }: PageAsideProps) {
	return (
		<aside className="relative flex-1/4 lg:max-w-[380px]" {...props}>
			<div className="lg:sticky lg:top-10">{children}</div>
		</aside>
	)
}
