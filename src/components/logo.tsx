import { getThemeActions } from '@/config/theme/theme-actions'
import Image from 'next/image'

export async function Logo() {
	const theme = await getThemeActions()

	return (
		<div className="relative h-10 w-full min-w-[200px] max-w-[320px] lg:h-16">
			<Image src={`/assets/brands/${theme}/logo.svg`} fill alt="" />
		</div>
	)
}
