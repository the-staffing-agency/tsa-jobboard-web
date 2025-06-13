import { cn } from '@/utils/cn'

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={`${cn(className)} animate-pulse rounded-md bg-slate-300/20`}
			{...props}
		/>
	)
}
