import { Container } from '@/components/ui/container'
import type React from 'react'

function PageHeaderTitle({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-center font-extrabold text-2xl text-white leading-none lg:text-4xl">
			{children}
		</h1>
	)
}

function PageHeaderLead({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-2 font-bold text-base text-white uppercase">
			{children}
		</div>
	)
}

function PageHeaderResume({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="max-w-md text-center text-base text-white lg:text-lg">
			{children}
		</h2>
	)
}

function PageHeader({ children }: { children: React.ReactNode }) {
	return (
		<header className="flex h-[220px] w-full flex-col justify-center bg-accent lg:h-[340px] lg:pt-6 lg:pb-14">
			<Container className="relative flex flex-col items-center justify-center">
				<div className="flex h-40 flex-col items-center gap-2 pt-4">
					{children}
				</div>
			</Container>
		</header>
	)
}

export { PageHeader, PageHeaderTitle, PageHeaderLead, PageHeaderResume }
