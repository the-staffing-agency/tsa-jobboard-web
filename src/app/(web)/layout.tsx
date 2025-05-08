import { Header } from '@/app/(web)/_components/header'
import { MenuHamburger } from '@/app/(web)/_components/menu-hamburger'
import { NavBar } from '@/app/(web)/_components/nav-bar'
import { NavToggle } from '@/app/(web)/_components/nav-toggle'
import { NavToggleProvider } from '@/contexts/nav-toggle-context'

export default function WebLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<NavToggleProvider>
			<Header>
				<NavBar />
				<MenuHamburger />
			</Header>

			<NavToggle />

			<section>{children}</section>
		</NavToggleProvider>
	)
}
