import { cn } from '@/utils/cn'
import Link from 'next/link'
import type React from 'react'
import type { ComponentProps } from 'react'

function JobListHeader({ children, ...props }: ComponentProps<'header'>) {
	return <header {...props}>{children}</header>
}

function JobListTitle({ children, className, ...props }: ComponentProps<'h3'>) {
	return (
		<h3 className="font-semibold text-lg/tight text-slate-800" {...props}>
			{children}
		</h3>
	)
}

function JobListResume({ children, ...props }: ComponentProps<'p'>) {
	return (
		<p className="grow font-normal text-base text-slate-800" {...props}>
			{children}
		</p>
	)
}

function JobListInfos({ children, className }: ComponentProps<'div'>) {
	return (
		<div className={cn(`mt-2 flex flex-col gap-1 ${className}`)}>
			{children}
		</div>
	)
}

function JobListContent({ children, ...props }: ComponentProps<'p'>) {
	return (
		<main className="flex min-h-full flex-col gap-4" {...props}>
			{children}
		</main>
	)
}

function JobListFooter({ children, ...props }: ComponentProps<'footer'>) {
	return (
		<footer className="flex items-center gap-4" {...props}>
			{children}
		</footer>
	)
}

export function JobListAdditionalActions({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="absolute right-6 bottom-6 z-10 flex grow items-center justify-end gap-4 opacity-0 group-hover:opacity-100">
			{children}
		</div>
	)
}

interface JobListProps extends ComponentProps<'div'> {
	link: string | URL
}

export function JobList({ link, className, children, ...props }: JobListProps) {
	return (
		<div
			className={cn(
				`group relative z-0 rounded-sm border border-accent/5 bg-slate-50 p-4 transition-colors duration-150 ease-in-out hover:border-accent/40 hover:bg-accent/10 lg:p-6 ${className}`,
			)}
			{...props}
		>
			<Link href={link} className="absolute inset-0" />
			{children}
		</div>
	)
}

export {
	JobListTitle,
	JobListHeader,
	JobListResume,
	JobListInfos,
	JobListContent,
	JobListFooter,
}
