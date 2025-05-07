import { Container } from "../../../components/ui/container";

export function Header({ children, ...props }: React.ComponentProps<"header">) {
	return (
		<header
			className="relative z-50 bg-accent border-b border-white/10"
			{...props}
		>
			<Container className="flex justify-between items-center h-16 lg:h-20">
				{children}
			</Container>
		</header>
	);
}
