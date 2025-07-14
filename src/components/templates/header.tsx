import type { ComponentProps } from 'react'
import { Container } from '../ui/container'

export function Header({ children, ...props }: ComponentProps<'header'>) {
	return (
		<header className="theme-header relative z-50" {...props}>
			<Container className="flex h-16 items-center lg:h-20">
				{children}
			</Container>
		</header>
	)
}
