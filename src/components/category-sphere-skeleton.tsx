import { cn } from '@/utils/cn'

export function CategorySphereSkeleton({ className }: { className?: string }) {
	return (
		<div className={cn('flex w-16 flex-col items-center gap-2', className)}>
			<div className="rounded-full p-0.5">
				<div className="size-14 animate-pulse rounded-full bg-muted" />
			</div>
			<div className="h-4 w-12 animate-pulse rounded bg-muted" />
		</div>
	)
}
