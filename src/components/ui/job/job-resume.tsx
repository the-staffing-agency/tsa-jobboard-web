import type { ComponentProps } from 'react'

export function JobResume({ children, ...props }: ComponentProps<'p'>) {
	return (
		<p className="grow font-normal text-base text-slate-800" {...props}>
			{children}
		</p>
	)
}
