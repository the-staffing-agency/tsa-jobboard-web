import { Container } from '../../../components/ui/container'

export function Header({ children, ...props }: React.ComponentProps<'header'>) {
	return (
		<header
			className="relative z-50 border-white/10 border-b bg-accent"
			{...props}
		>
			<Container className="flex h-16 items-center justify-between lg:h-20">
				{children}
			</Container>
		</header>
	)
}
