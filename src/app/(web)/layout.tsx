import { NavBar } from '@/components/nav-bar'
import { Header } from '@/components/templates/header'
import { AppliedJobsProvider } from '@/contexts/applied-jobs-context'
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
			<section>
				<AppliedJobsProvider>{children}</AppliedJobsProvider>
			</section>
		</NavToggleProvider>
	)
}
