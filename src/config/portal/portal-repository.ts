import type { ThemePortalName } from '@/config/theme/theme-mapping'
import { portals } from './portals'

export interface Portal {
	key: string
	theme: ThemePortalName
}

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
