import type { IThemeMetadata } from './metadata.types'

export const defaultThemeMetadata: IThemeMetadata = {
	title: {
		default: 'The Staffing Agency',
		template: '%s - The Staffing Agency',
	},
	description:
		'Browse and apply for culinary and hospitality jobs. Find your dream job in the food industry with The Staffing Agency.',
	keywords: [
		'jobs',
		'staffing',
		'employment',
		'culinary jobs',
		'hospitality jobs',
		'food industry',
		'careers',
		'job search',
		'hiring',
		'recruitment',
	],
	siteName: 'The Staffing Agency',
	social: {
		twitter: '',
		instagram: '',
		linkedin: '',
	},
	domain: 'https://jobs.thechefagency.com/',
	favicon: {
		icon: '/icon.png',
		appleTouchIcon: '/icon.png',
		shortcutIcon: '/icon.png',
	},
}
