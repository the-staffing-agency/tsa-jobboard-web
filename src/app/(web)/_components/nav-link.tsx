'use client'

import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLink({
	children,
	href,
	className,
	...props
}: React.ComponentProps<'a'>) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={`${href}`}
			className={`px-4 py-1.5 font-medium text-white/90 transition-colors duration-150 ease-in-out hover:text-white data-[is-active='true']:rounded-full data-[is-active='true']:bg-white/10 data-[is-active='true']:font-semibold data-[is-active='true']:text-white ${cn(className)}`}
			data-is-active={isActive}
			{...props}
		>
			{children}
		</Link>
	)
}
