"use client";

import { useNavToggle } from "@/contexts/nav-toggle-context";
import { mockNavLinks } from "@/data/website/nav-links";
import { NavLink } from "./nav-link";

export function NavToggle() {
	const { isOpen, handleCloseNav } = useNavToggle();

	return (
		<div
			className="h-svh w-full fixed top-0 flex justify-center items-center bg-accent z-20 transition-all duration-300 ease-in-out data-[is-open=false]:-top-full data-[is-open=false]:pointer-events-none"
			data-is-open={isOpen}
		>
			<div className="flex flex-col justify-center items-center text-center gap-4 text-2xl">
				{mockNavLinks.map((link) => (
					<NavLink
						href={link.href}
						key={link.title.replace(" ", "-")}
						onClick={handleCloseNav}
					>
						{link.title}
					</NavLink>
				))}
			</div>
		</div>
	);
}
