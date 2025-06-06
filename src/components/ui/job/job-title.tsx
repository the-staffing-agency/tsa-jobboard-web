import type { ComponentProps } from 'react'

export function JobTitle({
	children,
	className,
	...props
}: ComponentProps<'h3'>) {
	return (
		<h3 className="font-semibold text-lg/tight text-slate-800" {...props}>
			{children}
		</h3>
	)
}
