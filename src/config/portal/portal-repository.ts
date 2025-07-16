import { env } from '@/config/env'
import type { ThemePortalName } from '@/config/theme/theme-mapping'

export interface Portal {
	key: string
	theme: ThemePortalName
}

const portals: Portal[] = [
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

export function getAllPortals(): Portal[] {
	return [...portals]
}

export function findPortalByTheme(theme: ThemePortalName): Portal | null {
	return portals.find((portal) => portal.theme === theme) || null
}

export function getPortalKeyByTheme(theme: ThemePortalName): string | null {
	const portal = findPortalByTheme(theme)
	return portal?.key || null
}
