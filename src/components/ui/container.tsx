import { cn } from '@/utils/cn'

export function Container({
	children,
	className,
	...props
}: React.ComponentProps<'section'>) {
	return (
		<section
			className={cn(
				`container mx-auto max-w-[1330px] px-4 lg:px-12 2xl:px-0 ${className}`,
			)}
			{...props}
		>
			{children}
		</section>
	)
}
