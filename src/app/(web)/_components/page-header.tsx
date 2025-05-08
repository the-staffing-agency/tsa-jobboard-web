import { SearchJobFrom } from '@/components/forms/search-job-form'
import { Container } from '@/components/ui/container'

interface PageHeaderProps {
	title: string
}

export function PageHeader({ title }: PageHeaderProps) {
	return (
		<header className="flex w-full flex-col justify-center bg-accent lg:h-[240px] lg:pt-6 lg:pb-14">
			<Container className="relative flex flex-col items-center justify-center">
				<div className="flex h-40 flex-col gap-2 pt-4">
					<h1 className="text-center font-extrabold text-2xl text-accent-foreground leading-none lg:text-4xl">
						{title}
					</h1>

					<p className="max-w-md text-center text-accent-foreground text-lg">
						Discover top job opportunities selected for impact, growth, and the
						next step in your career.
					</p>
				</div>

				<div className="-bottom-24 absolute mx-auto">
					<SearchJobFrom />
				</div>
			</Container>
		</header>
	)
}
