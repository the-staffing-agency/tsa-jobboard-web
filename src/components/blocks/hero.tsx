import { cn } from "@/utils/cn";
import type React from "react";
import { Container } from "../ui/container";

function HeroTitle({
	children,
	className,
	...props
}: React.ComponentProps<"h1">) {
	return (
		<h1
			className={`text-center font-black text-3xl/tight lg:text-5xl/tight text-white/90 lg:max-w-2/3 ${cn(className)}`}
			{...props}
		>
			{children}
		</h1>
	);
}

function HeroSubtitle({
	children,
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p
			className={`text-center lg:max-w-2/3 text-base/tight lg:text-lg font-normal text-white/90 ${cn(className)}`}
			{...props}
		>
			{children}
		</p>
	);
}

function HeroContent({
	children,
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<Container
			className={`flex gap-2 flex-col items-center justify-center max-w-[640px] lg:max-w-[800px] ${cn(className)}`}
			{...props}
		>
			{children}
		</Container>
	);
}

function HeroFooter({
	children,
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<Container
			className={`flex gap-2 flex-col items-center justify-center ${cn(className)}`}
			{...props}
		>
			{children}
		</Container>
	);
}

function Hero({
	children,
	className,
	...props
}: React.ComponentProps<"section">) {
	return (
		<section
			className={`bg-accent h-lvh max-h-[500px] flex flex-col gap-6 lg:gap-10 items-center justify-center ${cn(className)}`}
			{...props}
		>
			{children}
		</section>
	);
}

export { Hero, HeroTitle, HeroSubtitle, HeroContent, HeroFooter };
