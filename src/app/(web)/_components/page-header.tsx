import { Container } from '@/components/ui/container'
import type { ComponentProps } from 'react'

interface PageHeaderProps extends ComponentProps<'header'> {
	title: string
	description?: string
	lead?: string
}

export function PageHeader({
	title,
	lead,
	description,
	children,
}: PageHeaderProps) {
	return (
		<header className="flex w-full flex-col justify-center bg-accent lg:h-[340px] lg:pt-6 lg:pb-14">
			<Container className="relative flex flex-col items-center justify-center">
				<div className="flex h-40 flex-col items-center gap-2 pt-4">
					{lead && (
						<div className="mb-2 font-bold text-base text-white uppercase">
							{lead}
						</div>
					)}

					<h1 className="text-center font-extrabold text-2xl text-white leading-none lg:text-4xl">
						{title}
					</h1>

					{description && (
						<p className="max-w-md text-center text-base text-white lg:text-lg">
							{description}
						</p>
					)}
				</div>

				{children}
			</Container>
		</header>
	)
}
