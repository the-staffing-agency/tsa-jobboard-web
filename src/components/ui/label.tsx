'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import type * as React from 'react'

import { cn } from '@/utils/cn'

function Label({
	className,
	children,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'relative flex cursor-pointer select-none items-center gap-2 font-semibold text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
				className,
			)}
			{...props}
		>
			{children}

			{props['aria-required'] && (
				<span className="top-1 right-[-1.25rem] select-none text-destructive aria-required:pointer-events-none aria-required:text-lg">
					*
				</span>
			)}
		</LabelPrimitive.Root>
	)
}

export { Label }
;<span className="pointer-events-none absolute top-1 right-3 select-none text-destructive text-lg leading-none">
	*
</span>
