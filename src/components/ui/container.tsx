export function Container({
	children,
	className,
}: React.ComponentProps<"div">) {
	return (
		<div className={`container mx-auto px-4 lg:px-12 2xl:px-0 ${className}`}>
			{children}
		</div>
	);
}
