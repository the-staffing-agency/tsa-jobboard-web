import type { ComponentProps } from 'react'

interface PageMainProps extends ComponentProps<'main'> {}

export function PageMainDefault({ children }: PageMainProps) {
	return (
		<main className="flex-3/4">
			<div className="flex flex-col gap-2">{children}</div>
		</main>
	)
}
