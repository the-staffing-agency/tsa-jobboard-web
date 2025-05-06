import { mockNavLinks } from "@/data/website/nav-links";
import { NavLink } from "./nav-link";

export function NavLinks() {
	return (
		<div className="hidden md:flex items-center space-x-6">
			{mockNavLinks.map((link) => (
				<NavLink href={link.href} key={link.title.replace(" ", "-")}>
					{link.title}
				</NavLink>
			))}
		</div>
	);
}
