import { Header } from "@/components/header";
import { MenuHamburger } from "@/components/menu-hamburger";
import { NavBar } from "@/components/nav-bar";
import { NavToggle } from "@/components/nav-toggle";
import { NavToggleProvider } from "@/contexts/nav-toggle-context";

export default function WebLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NavToggleProvider>
			<Header>
				<NavBar />
				<MenuHamburger />
			</Header>

			<NavToggle />

			{children}
		</NavToggleProvider>
	);
}
