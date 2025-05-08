import { Header } from '@/app/(web)/_components/header'
import { NavBar } from '@/app/(web)/_components/nav-bar'
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
			</Header>
			<section>{children}</section>
		</NavToggleProvider>
	)
}
