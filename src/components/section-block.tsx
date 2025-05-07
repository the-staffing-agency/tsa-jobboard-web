import type { URL } from "url";
import Link from "next/link";
import type { ComponentProps, LinkHTMLAttributes } from "react";
import { Container } from "./ui/container";

function SectionBlockHeader({ children }: ComponentProps<"header">) {
	return (
		<header className="grid grid-cols-2 justify-between">{children}</header>
	);
}

function SectionBlockTitle({ children }: ComponentProps<"h1">) {
	return (
		<h1 className="text-foreground leading-none text-2xl lg:text-4xl font-extrabold row-start-1">
			{children}
		</h1>
	);
}

function SectionBlockSubTitle({ children }: ComponentProps<"h2">) {
	return (
		<h2 className="text-base lg:text-lg text-foreground/80 row-start-2 col-span-full lg:col-span-1 mt-2 max-w-md">
			{children}
		</h2>
	);
}

function SectionBlock({ children }: ComponentProps<"section">) {
	return (
		<section className="py-8 lg:py-14">
			<Container className="space-y-4 md:space-y-6">{children}</Container>
		</section>
	);
}

function SectionBlockContent({ children }: ComponentProps<"main">) {
	return <>{children}</>;
}

function SectionBlockCallToAction({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex lg:items-end justify-end row-start-1 lg:row-start-2 col-start-2">
			{children}
		</div>
	);
}
export {
	SectionBlock,
	SectionBlockHeader,
	SectionBlockContent,
	SectionBlockTitle,
	SectionBlockSubTitle,
	SectionBlockCallToAction,
};
