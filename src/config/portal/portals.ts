import { env } from '../env'
import type { Portal } from './portal-repository'

export const portals: Portal[] = [
	{
		key: env.NEXT_PUBLIC_PORTAL_DEFAULT,
		theme: 'default',
	},
	{
		key: env.NEXT_PUBLIC_PORTAL_CHEF_KEY,
		theme: 'thechefagency',
	},
	{
		key: env.NEXT_PUBLIC_PORTAL_SUPERMARKET_KEY,
		theme: 'thesupermarketagency',
	},
	{
		key: env.NEXT_PUBLIC_PORTAL_ESTATE_KEY,
		theme: 'theestateagency',
	},
]
