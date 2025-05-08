import type { ComponentProps } from 'react'

export function JobResumeText({ children, ...props }: ComponentProps<'p'>) {
	return (
		<p className="grow font-normal text-base text-slate-800" {...props}>
			{children}
		</p>
	)
}
