'use client'

import { useNavToggle } from '@/contexts/nav-toggle-context'
import { mockNavLinks } from '@/data/website/nav-links'
import { NavLink } from './nav-link'

export function NavToggle() {
	const { isOpen, handleCloseNav } = useNavToggle()

	return (
		<div
			className="data-[is-open=false]:-top-full fixed top-0 z-20 flex h-svh w-full items-center justify-center bg-accent transition-all duration-300 ease-in-out data-[is-open=false]:pointer-events-none"
			data-is-open={isOpen}
		>
			<div className="flex flex-col items-center justify-center gap-4 text-center text-2xl">
				{mockNavLinks.map((link) => (
					<NavLink
						href={link.href}
						key={link.title.replace(' ', '-')}
						onClick={handleCloseNav}
					>
						{link.title}
					</NavLink>
				))}
			</div>
		</div>
	)
}
