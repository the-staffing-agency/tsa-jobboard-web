import Link from 'next/link'
import { Logo } from './logo'

export function NavBrand() {
	return (
		<Link href="/" className="flex items-center" aria-label="Go to homepage">
			<Logo />
		</Link>
	)
}
