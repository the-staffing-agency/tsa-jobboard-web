import type { ComponentProps } from 'react'

export function JobTitle({
	children,
	className,
	...props
}: ComponentProps<'h3'>) {
	return (
		<h3
			className="font-semibold text-accent text-lg/tight lg:text-xl"
			{...props}
		>
			{children}
		</h3>
	)
}
