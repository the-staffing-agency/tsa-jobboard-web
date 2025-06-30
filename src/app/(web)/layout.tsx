import { NavBar } from '@/components/nav-bar'
import { Header } from '@/components/templates/header'
import { JobApplicationProvider } from '@/contexts/jobs-applied-context'
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
			<JobApplicationProvider>{children}</JobApplicationProvider>
		</NavToggleProvider>
	)
}
