import { getTheme } from '@/actions/get-theme'
import Image from 'next/image'

export async function Logo() {
	const theme = await getTheme()

	return (
		<div className="relative h-10 w-full min-w-[200px] max-w-[320px] lg:h-16">
			<Image src={`/assets/brands/${theme}/logo.svg`} fill alt="" />
		</div>
	)
}
