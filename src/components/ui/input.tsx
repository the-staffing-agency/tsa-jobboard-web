import type * as React from 'react'

import { cn } from '@/utils/cn'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				'flex h-12 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm outline-none transition-[color] selection:bg-primary selection:text-primary-foreground file:mt-1 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base dark:bg-input/30',
				'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
				'font-normal placeholder:font-normal aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
				className,
			)}
			{...props}
		/>
	)
}

export { Input }
