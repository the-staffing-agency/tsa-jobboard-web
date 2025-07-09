import { cn } from '@/utils/cn'
import type { ComponentProps } from 'react'

export function JobInfos({ children, className }: ComponentProps<'div'>) {
	return (
		<div className={cn(`mt-2 flex flex-row gap-4 ${className}`)}>
			{children}
		</div>
	)
}
