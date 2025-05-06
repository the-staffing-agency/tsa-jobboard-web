import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { Container } from "./ui/container";

export function Header() {
	return (
		<header className="bg-accent px-4">
			<Container className="flex items-center h-16 lg:h-20">
				<nav className="flex items-center lg:gap-20">
					<Logo />
					<NavLinks />
				</nav>
			</Container>
		</header>
	);
}
