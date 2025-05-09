import { Header } from '@/app/(web)/_components/header'
import { NavBar } from '@/app/(web)/_components/nav-bar'
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
