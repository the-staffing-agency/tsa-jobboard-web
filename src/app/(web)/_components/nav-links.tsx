import { mockNavLinks } from "@/data/website/nav-links";
import { cn } from "@/lib/utils";
import { NavLink } from "./nav-link";

export function NavLinks({ className }: React.ComponentProps<"div">) {
	return (
		<div className={cn(className)}>
			{mockNavLinks.map((link) => (
				<NavLink href={link.href} key={link.title.replace(" ", "-")}>
					{link.title}
				</NavLink>
			))}
		</div>
	);
}
