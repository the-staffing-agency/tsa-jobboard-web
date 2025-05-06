"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends React.ComponentProps<"a"> {}

export function NavLink({ children, href, className }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={`${href}`}
			className={`text-white/90 hover:text-white transition-colors duration-150 ease-in-out font-medium data-[is-active='true']:font-semibold data-[is-active='true']:rounded-full data-[is-active='true']:bg-white/10 data-[is-active='true']:text-white px-4 py-1.5 ${cn(className)}`}
			data-is-active={isActive}
		>
			{children}
		</Link>
	);
}
