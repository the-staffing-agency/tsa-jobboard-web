import Link from 'next/link'
import type React from 'react'
import { Badge } from '../ui/badge'

export function JobsCategories() {
	return (
		<div className="mt-2 flex flex-col items-center gap-1 lg:mt-4 lg:flex-row lg:gap-4">
			<span className="font-normal text-slate-50 text-sm">Jobs categories</span>

			<div className="flex gap-2">
				<Link href="/jobs/career/culinary" prefetch>
					<Badge variant="secondary">Culinary</Badge>
				</Link>

				<Link href="/jobs/career/culinary" prefetch>
					<Badge variant="secondary">Service</Badge>
				</Link>

				<Link href="/jobs/career/beverage" prefetch>
					<Badge variant="secondary">Beverage</Badge>
				</Link>

				<Link href="/jobs/career/hospitality" prefetch>
					<Badge variant="secondary">Hospitality</Badge>
				</Link>
			</div>
		</div>
	)
}
