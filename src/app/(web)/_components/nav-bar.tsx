import { Logo } from './logo'
import { NavLinks } from './nav-links'

export function NavBar() {
	return (
		<nav className="flex items-center lg:gap-20">
			<Logo />
			<NavLinks className="hidden lg:flex" />
		</nav>
	)
}
