import type { ComponentProps } from 'react'

interface PageMainProps extends ComponentProps<'main'> {}

export function PageMainDefault({ children }: PageMainProps) {
	return (
		<main className="w-full max-w-[800px]">
			<div className="flex flex-col gap-4 lg:gap-6">{children}</div>
		</main>
	)
}
