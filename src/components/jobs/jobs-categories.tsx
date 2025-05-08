import Link from 'next/link'
import type React from 'react'
import { Badge } from '../ui/badge'

export function JobsCategories() {
	return (
		<div className="mt-2 flex flex-col items-center gap-1 lg:mt-4 lg:flex-row lg:gap-4">
			<b className="font-semibold text-base text-slate-50">Jobs categories</b>

			<div className="flex flex-wrap justify-center gap-2">
				<Link href="/jobs/carrear/kitchen-assistant" prefetch>
					<Badge>Kitchen Assistant</Badge>
				</Link>

				<Link href="/jobs/carrear/catering" prefetch>
					<Badge>Catering</Badge>
				</Link>

				<Link href="/jobs/carrear/food-beverage-management" prefetch>
					<Badge>Food & Beverage Management</Badge>
				</Link>

				<Link href="/jobs/carrear/nutrition-dietary" prefetch>
					<Badge>Nutrition & Dietary</Badge>
				</Link>
			</div>
		</div>
	)
}
