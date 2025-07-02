import { Skeleton } from '@/components/skaleton'
import {
	JobActions,
	JobContent,
	JobFooter,
	JobInfos,
	JobWrapperLink,
} from '@/components/ui/job'

import { ListView } from '@/components/ui/list-view'

export function JobsResultsSkeleton() {
	return (
		<ListView>
			{Array.from({ length: 10 }).map(() => (
				<JobWrapperLink key={Math.random()}>
					<header>
						<Skeleton className="h-6 w-60" />

						<JobInfos className="flex-row gap-4">
							<Skeleton className="h-4 w-40" />
							<Skeleton className="h-4 w-40" />
						</JobInfos>
					</header>

					<JobContent>{''}</JobContent>
					<JobFooter>
						<Skeleton className="h-6 w-32" />

						<div className="flex gap-1">
							<Skeleton className="h-6 w-14" />
							<Skeleton className="h-6 w-14" />
							<Skeleton className="h-6 w-4" />
						</div>

						<JobActions>
							<Skeleton className="h-6 w-54" />
							<Skeleton className="h-6 w-54" />
						</JobActions>
					</JobFooter>
				</JobWrapperLink>
			))}
		</ListView>
	)
}
