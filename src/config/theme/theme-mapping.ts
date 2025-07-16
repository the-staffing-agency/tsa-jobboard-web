export const THEME_NAMES = {
	DEFAULT: 'default',
	CHEF: 'thechefagency',
	ESTATE: 'theestateagency',
	SUPERMARKET: 'thesupermarketagency',
} as const

export const THEMES = Object.freeze(THEME_NAMES)

export type ThemeType = (typeof THEMES)[keyof typeof THEMES]

export type ThemePortalName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES]
