import { THEMES } from '@/themes'

export function findValidTheme(hostParts: string[]): string | null {
	const validTheme = hostParts.find((value) =>
		THEMES.includes(value as (typeof THEMES)[number]),
	)

	if (!validTheme) {
		return null
	}

	return validTheme
}
