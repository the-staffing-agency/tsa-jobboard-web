import type { ComponentProps } from "react";

export function JobResumeText({ children, ...props }: ComponentProps<"p">) {
	return (
		<p className="text-base text-slate-800 font-normal grow" {...props}>
			{children}
		</p>
	);
}
