import { Skeleton } from '@/components/ui/skeleton'

export function CategorySphereSkeleton() {
	return (
		<div className="flex w-16 flex-col items-center gap-2">
			<Skeleton className="size-14 animate-pulse rounded-full bg-foreground/20" />
			<Skeleton className="h-4 w-12 animate-pulse rounded bg-foreground/20" />
		</div>
	)
}
