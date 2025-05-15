import { cn } from '@/utils/cn'
import Link from 'next/link'
import type React from 'react'
import type { ComponentProps } from 'react'

function JobCardHeader({ children, ...props }: ComponentProps<'header'>) {
	return <header {...props}>{children}</header>
}

function JobCardTitle({ children, className, ...props }: ComponentProps<'h3'>) {
	return (
		<b className="font-semibold text-lg/tight text-slate-800" {...props}>
			{children}
		</b>
	)
}

function JobCardInfos({ children }: { children: React.ReactNode }) {
	return <div className="mt-2 flex flex-col gap-1">{children}</div>
}

function JobCardContent({ children, ...props }: ComponentProps<'p'>) {
	return (
		<main className="flex min-h-full flex-col gap-4" {...props}>
			{children}
		</main>
	)
}

function JobCardFooter({
	children,
	className,
	...props
}: ComponentProps<'footer'>) {
	return (
		<footer className="flex items-center gap-4" {...props}>
			{children}
		</footer>
	)
}

interface JobCardProps extends ComponentProps<'a'> {
	link: string | URL
}

export function JobCard({ link, children, className, ...props }: JobCardProps) {
	return (
		<Link
			href={link}
			className={cn(
				`rounded-sm border border-accent/5 bg-slate-50 p-4 transition-colors duration-150 ease-in-out hover:border-accent/40 hover:bg-accent/10 lg:p-6 ${className}`,
			)}
			{...props}
		>
			{children}
		</Link>
	)
}

export {
	JobCardTitle,
	JobCardHeader,
	JobCardInfos,
	JobCardContent,
	JobCardFooter,
}
