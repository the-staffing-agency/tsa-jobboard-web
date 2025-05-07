import { cn } from "@/utils/cn";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={`${cn(className)} bg-slate-300/20 animate-pulse rounded-md`}
			{...props}
		/>
	);
}
