import { cn } from '@/utils/cn'
import type React from 'react'
import { Container } from '../ui/container'

function HeroTitle({
	children,
	className,
	...props
}: React.ComponentProps<'h1'>) {
	return (
		<h1
			className={`text-center font-black text-3xl/tight text-white/90 lg:max-w-2/3 lg:text-5xl/tight ${cn(className)}`}
			{...props}
		>
			{children}
		</h1>
	)
}

function HeroSubtitle({
	children,
	className,
	...props
}: React.ComponentProps<'p'>) {
	return (
		<p
			className={`text-center font-normal text-base/tight text-white/90 lg:max-w-2/3 lg:text-lg ${cn(className)}`}
			{...props}
		>
			{children}
		</p>
	)
}

function HeroContent({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<Container
			className={`flex max-w-[640px] flex-col items-center justify-center gap-2 lg:max-w-[800px] ${cn(className)}`}
			{...props}
		>
			{children}
		</Container>
	)
}

function HeroFooter({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<Container
			className={`flex flex-col items-center justify-center gap-2 ${cn(className)}`}
			{...props}
		>
			{children}
		</Container>
	)
}

function Hero({
	children,
	className,
	...props
}: React.ComponentProps<'section'>) {
	return (
		<section
			className={`flex h-lvh max-h-[500px] flex-col items-center justify-center gap-6 bg-accent lg:gap-10 ${cn(className)}`}
			{...props}
		>
			{children}
		</section>
	)
}

export { Hero, HeroTitle, HeroSubtitle, HeroContent, HeroFooter }
