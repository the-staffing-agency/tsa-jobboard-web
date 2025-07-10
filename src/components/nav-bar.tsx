import { Logo } from './logo'

export function NavBar() {
	return (
		<nav className="flex flex-1 items-center lg:gap-20">
			<div className="mx-auto">
				<Logo />
			</div>
		</nav>
	)
}
