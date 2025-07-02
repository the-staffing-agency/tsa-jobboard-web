import { Container } from '@/components/ui/container'
import type React from 'react'

function PageHeaderTitle({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="max-w-md text-center font-extrabold text-2xl text-white leading-none lg:text-4xl">
			{children}
		</h1>
	)
}

function PageHeaderLead({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-2 max-w-md font-bold text-base text-white uppercase ">
			{children}
		</div>
	)
}

function PageHeaderResume({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="max-w-[800px] text-center text-base text-white lg:text-lg">
			{children}
		</h2>
	)
}

function PageHeaderContainer({ children }: { children?: React.ReactNode }) {
	return (
		<div className="relative mx-auto flex max-w-[800px] flex-col items-center justify-center">
			{children}
		</div>
	)
}

function PageHeaderContent({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Container className="relative flex flex-col items-center justify-center">
			{children}
		</Container>
	)
}

function PageHeader({ children }: { children: React.ReactNode }) {
	return (
		<header className="flex w-full flex-col justify-center bg-accent py-8 lg:py-12">
			{children}
		</header>
	)
}

export {
	PageHeader,
	PageHeaderTitle,
	PageHeaderLead,
	PageHeaderResume,
	PageHeaderContainer,
	PageHeaderContent,
}
