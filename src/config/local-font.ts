import localFont from 'next/font/local'
import { THEMES } from './theme/theme-mapping'

const rocGroteks = localFont({
	src: [
		{
			path: '../../public/fonts/RocGroteskBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.otf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-roc-grotesk',
})

const supermarketFont = localFont({
	src: [
		{
			path: '../../public/fonts/RocGroteskBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.otf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-supermarket',
})

const estateFont = localFont({
	src: [
		{
			path: '../../public/fonts/RocGroteskBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.otf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-resume',
})

export const fontConfig = {
	[THEMES.CHEF]: rocGroteks,
	[THEMES.SUPERMARKET]: supermarketFont,
	[THEMES.ESTATE]: estateFont,
	default: rocGroteks,
}
