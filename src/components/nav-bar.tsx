import { NavBrand } from './nav-brand'

export function NavBar() {
	return (
		<nav className="flex flex-1 items-center lg:gap-20">
			<div className="mx-auto">
				<NavBrand />
			</div>
		</nav>
	)
}
