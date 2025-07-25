import { cn } from '@/utils/cn'
import Link from 'next/link'
import type { ComponentProps } from 'react'

interface JobWrapperLinkProps extends ComponentProps<'div'> {
	link?: string | URL
}

export function JobWrapperLink({
	link,
	className,
	children,
	...props
}: JobWrapperLinkProps) {
	return (
		<div
			className={cn(
				`group relative z-0 rounded-sm border border-accent/5 bg-white p-4 transition-colors duration-150 ease-in-out hover:border-accent/40 hover:drop-shadow lg:p-6 ${className}`,
			)}
			{...props}
		>
			{link && <Link href={link} className="absolute inset-0" />}
			{children}
		</div>
	)
}
