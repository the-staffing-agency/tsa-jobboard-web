import { THEMES } from '@/themes'
import localFont from 'next/font/local'

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

const luxuryFont = localFont({
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
	variable: '--font-luxury',
})

const resumeFont = localFont({
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

export const fontConfig = {
	[THEMES.CHEFS]: rocGroteks,
	[THEMES.LUXURY]: luxuryFont,
	[THEMES.RESUME]: resumeFont,
	[THEMES.SUPERMARKET]: supermarketFont,
	default: rocGroteks,
}
