import type { ComponentProps } from 'react'

export function JobFooter({ children, ...props }: ComponentProps<'footer'>) {
	return (
		<footer className="mt-8 flex items-center gap-4" {...props}>
			{children}
		</footer>
	)
}
