import { cn } from "@/utils/cn";

export function Container({
	children,
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(`container mx-auto px-4 lg:px-12 2xl:px-0 ${className}`)}
			{...props}
		>
			{children}
		</div>
	);
}
