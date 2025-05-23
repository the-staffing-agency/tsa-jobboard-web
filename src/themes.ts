/**
 * Enum-like object for available theme identifiers in the application.
 *
 * @remarks
 * The themes are represented as string literals and are used to configure
 * different visual or functional modes within the application.
 *
 * @example
 * THEMES.CHEFS // 'chefs'
 * THEMES.LUXURY // 'luxury'
 *
 * @readonly
 */

export const THEMES = Object.freeze({
	CHEFS: 'chefs',
	LUXURY: 'luxury',
	RESUME: 'resume',
	SUPERMARKET: 'supermarket',
} as const)

export type ThemeType = (typeof THEMES)[keyof typeof THEMES]
