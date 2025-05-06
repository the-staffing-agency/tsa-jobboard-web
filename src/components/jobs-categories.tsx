import Link from "next/link";
import type React from "react";
import { Badge } from "./ui/badge";

export function JobsCategories() {
	return (
		<div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center mt-2 lg:mt-4">
			<span className="text-sm text-slate-50 font-normal">Jobs categories</span>

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
	);
}
