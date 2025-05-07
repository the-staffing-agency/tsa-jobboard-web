import { cn } from "@/utils/cn";
import Link from "next/link";
import type React from "react";
import type { ComponentProps } from "react";

function JobCardHeader({ children, ...props }: ComponentProps<"header">) {
	return <header {...props}>{children}</header>;
}

function JobCardTitle({ children, className, ...props }: ComponentProps<"h3">) {
	return (
		<h3 className="font-semibold text-lg/tight text-slate-800" {...props}>
			{children}
		</h3>
	);
}

function JobCardResume({ children, ...props }: ComponentProps<"p">) {
	return (
		<p className="text-base text-slate-800 font-normal grow" {...props}>
			{children}
		</p>
	);
}

function JobCardInfos({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col gap-1 mt-2">{children}</div>;
}

function JobCardContent({ children, ...props }: ComponentProps<"p">) {
	return (
		<main className="flex flex-col gap-4 min-h-full" {...props}>
			{children}
		</main>
	);
}

function JobCardFooter({
	children,
	className,
	...props
}: ComponentProps<"footer">) {
	return (
		<footer className="flex gap-4 items-center" {...props}>
			{children}
		</footer>
	);
}

export function JobCard({
	children,
	className,
	...props
}: ComponentProps<"a">) {
	return (
		<Link
			href="/job/slug"
			className={cn(
				`p-4 lg:p-6 bg-slate-50 hover:bg-accent/10 rounded-sm border border-accent/5 hover:border-accent/40 transition-colors duration-150 ease-in-out ${className}`,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}

export {
	JobCardTitle,
	JobCardHeader,
	JobCardResume,
	JobCardInfos,
	JobCardContent,
	JobCardFooter,
};
