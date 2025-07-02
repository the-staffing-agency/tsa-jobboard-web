import type { Metadata } from 'next'

const SITE_NAME = 'The Staffing Agency'
const SITE_DESCRIPTION =
	'Browse and apply for culinary and hospitality jobs. Find your dream job in the food industry.'

export const metadataConfig: Metadata = {
	title: {
		default: 'The Staffing Agency',
		template: '%s - The Staffing Agency',
	},
	description: SITE_DESCRIPTION,
	keywords: [
		'jobs',
		'culinary',
		'hospitality',
		'food industry',
		'careers',
		'staffing',
		'employment',
		'restaurant jobs',
		'hotel jobs',
	],
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		type: 'website',
		locale: 'en_US',
		siteName: SITE_NAME,
		url: 'https://your-domain.com',
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		site: '@yourtwitter',
		creator: '@yourtwitter',
	},
	metadataBase: new URL('https://your-domain.com'),
}
