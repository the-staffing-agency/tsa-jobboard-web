import type { ComponentProps } from 'react'
import { Container } from './ui/container'

function SectionBlockHeader({ children }: ComponentProps<'header'>) {
	return (
		<header className="grid grid-cols-2 justify-between">{children}</header>
	)
}

function SectionBlockTitle({ children }: ComponentProps<'h1'>) {
	return (
		<h1 className="row-start-1 font-extrabold text-2xl text-foreground leading-none lg:text-4xl">
			{children}
		</h1>
	)
}

function SectionBlockSubTitle({ children }: ComponentProps<'h2'>) {
	return (
		<h2 className="col-span-full row-start-2 mt-2 max-w-md text-base text-foreground/80 lg:col-span-1 lg:text-lg">
			{children}
		</h2>
	)
}

function SectionBlock({ children }: ComponentProps<'section'>) {
	return (
		<section className="py-8 lg:py-14">
			<Container className="space-y-4 md:space-y-6">{children}</Container>
		</section>
	)
}

function SectionBlockContent({ children }: ComponentProps<'main'>) {
	return <>{children}</>
}

function SectionBlockCallToAction({ children }: { children: React.ReactNode }) {
	return (
		<div className="col-start-2 row-start-1 flex justify-end lg:row-start-2 lg:items-end">
			{children}
		</div>
	)
}
export {
	SectionBlock,
	SectionBlockHeader,
	SectionBlockContent,
	SectionBlockTitle,
	SectionBlockSubTitle,
	SectionBlockCallToAction,
}
