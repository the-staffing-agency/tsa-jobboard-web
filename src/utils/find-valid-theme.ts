import { THEMES } from '@/themes'

export function findValidTheme(hostParts: string[]): string | null {
	const themes = Object.values(THEMES) as string[]

	const validTheme = hostParts.find((value) => {
		return themes.includes(value)
	})

	if (!validTheme) {
		return null
	}

	return validTheme
}
