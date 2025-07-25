import localFont from 'next/font/local'
import { THEMES } from './theme/theme-mapping'

const rocGroteskFont = localFont({
	src: [
		{
			path: '../../public/fonts/RocGroteskBold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskBold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskBold.eot',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RocGroteskRegular.eot',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-roc-grotesk',
})

const ttRoundsNeueFont = localFont({
	src: [
		{
			path: '../../public/fonts/TTRoundsNeueBold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueBold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueBold.eot',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueRegular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/TTRoundsNeueRegular.eot',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-tt-rounds-neue',
})

const ahkioFont = localFont({
	src: [
		{
			path: '../../public/fonts/AhkioRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/AhkioRegular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/AhkioRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/AhkioRegular.eot',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-ahkio',
})

const didotDisplayFont = localFont({
	src: [
		{
			path: '../../public/fonts/DidotDisplayRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/DidotDisplayRegular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/DidotDisplayRegular.eot',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-didot-display',
})

export const fontFamilies = {
	[THEMES.CHEF]: {
		primary: rocGroteskFont,
	},
	[THEMES.SUPERMARKET]: {
		primary: ttRoundsNeueFont,
		secondary: ahkioFont,
	},
	[THEMES.ESTATE]: {
		primary: didotDisplayFont,
	},
	[THEMES.DEFAULT]: {
		primary: rocGroteskFont,
	},
}

export const fontConfig = {
	[THEMES.CHEF]: rocGroteskFont,
	[THEMES.SUPERMARKET]: ttRoundsNeueFont,
	[THEMES.ESTATE]: didotDisplayFont,
	[THEMES.DEFAULT]: rocGroteskFont,
}
