import type { ComponentProps } from 'react'

export function JobContent({ children, ...props }: ComponentProps<'main'>) {
	return (
		<main className="flex min-h-full flex-col gap-4" {...props}>
			{children}
		</main>
	)
}
