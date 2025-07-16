import { getThemeActions } from '@/config/theme/theme-actions'
import type { ThemePortalName } from '@/config/theme/theme-mapping'
import { getPortalKeyByTheme } from './portal-repository'

export async function getCurrentPortalKey(): Promise<string | null> {
	try {
		const currentTheme = await getThemeActions()
		if (currentTheme === 'default') {
			return 'chef'
		}

		const portalTheme = currentTheme as ThemePortalName

		return getPortalKeyByTheme(portalTheme)
	} catch (error) {
		console.error('Error getting current portal key:', error)
		return null
	}
}
