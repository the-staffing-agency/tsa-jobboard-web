import type { ComponentProps } from 'react'

interface PageMainProps extends ComponentProps<'main'> {}

export function PageMainDefault({ children }: PageMainProps) {
	return (
		<main className="flex-3/4">
			<div className="flex flex-col gap-4 lg:gap-6">{children}</div>
		</main>
	)
}
