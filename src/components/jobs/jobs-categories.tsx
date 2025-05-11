import Link from 'next/link'
import type React from 'react'
import { Badge } from '../ui/badge'

export function JobsCategories() {
	return (
		<div className="mt-2 flex flex-col items-center gap-1 lg:mt-4 lg:flex-row lg:gap-4">
			<div className="flex flex-wrap justify-center gap-2">
				<Link href="/jobs/chef-new-york" prefetch>
					<Badge>Jobs in New York</Badge>
				</Link>

				<Link href="/jobs/chef-manhattan" prefetch>
					<Badge>Jobs in Manhattan</Badge>
				</Link>

				<Link href="/jobs/chef-new-jersey" prefetch>
					<Badge>Jobs in New Jersey</Badge>
				</Link>
			</div>
		</div>
	)
}
