import { fontConfig, fontFamilies } from '@/config/local-font'
import { THEMES, type ThemeType } from '@/config/theme/theme-mapping'
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font'

type FontFamilyConfig = Record<string, NextFontWithVariable>

/**
 * Get the heading font configuration for a theme
 * @param theme - The theme type
 * @returns LocalFont configuration for headings
 */
export function getHeadingFont(theme?: ThemeType | null) {
	const resolvedTheme = theme || THEMES.DEFAULT
	return fontConfig[resolvedTheme] || fontConfig[THEMES.DEFAULT]
}

/**
 * Get the body font configuration for a theme
 * @param theme - The theme type
 * @returns LocalFont configuration for body text
 */
export function getBodyFont(theme?: ThemeType | null) {
	const themeFonts = getThemeFontFamilies(theme)
	// Return secondary font for body, fallback to primary if no secondary exists
	return (themeFonts as FontFamilyConfig)?.secondary || getHeadingFont(theme)
}

/**
 * Get all font families available for a theme
 * @param theme - The theme type
 * @returns Object with primary, secondary, etc. fonts
 */
export function getThemeFontFamilies(theme?: ThemeType | null) {
	const resolvedTheme = theme || THEMES.DEFAULT
	return fontFamilies[resolvedTheme] || fontFamilies[THEMES.DEFAULT]
}

/**
 * Get all CSS variables for fonts in a theme
 * @param theme - The theme type
 * @returns String with all font CSS variables separated by space
 */
export function getAllFontVariables(theme?: ThemeType | null) {
	const themeFonts = getThemeFontFamilies(theme)

	return Object.values(themeFonts || {})
		.map((font) => font.variable)
		.join(' ')
}

/**
 * Get complete font configuration for layout
 * @param theme - The theme type
 * @returns Object with heading font className and all CSS variables
 */
export function getLayoutFontConfig(theme?: ThemeType | null) {
	const fontDefault = getHeadingFont(theme)
	const allVariables = getAllFontVariables(theme)

	return {
		className: fontDefault.className,
		allVariables,
		combinedClassName: `${fontDefault.className} ${allVariables}`.trim(),
	}
}

/**
 * Get font configuration by type (heading or body)
 * @param theme - The theme type
 * @param fontType - The font type ('heading' or 'body')
 * @returns LocalFont configuration
 */

type fontType = 'heading' | 'body'
export function getFontByType(
	theme?: ThemeType | null,
	fontType: fontType = 'heading',
) {
	return fontType === 'heading' ? getHeadingFont(theme) : getBodyFont(theme)
}

/**
 * Check if theme has separate fonts for heading and body
 * @param theme - The theme type
 * @returns Boolean indicating if theme has separate heading and body fonts
 */
export function hasSeparateHeadingAndBodyFonts(theme?: ThemeType | null) {
	const themeFonts = getThemeFontFamilies(theme)
	return Object.keys(themeFonts || {}).length > 1
}

/**
 * Get font configuration for components
 * @param theme - The theme type
 * @returns Object with heading and body font configurations
 */
export function getFontConfiguration(theme?: ThemeType | null) {
	const headingFont = getHeadingFont(theme)
	const bodyFont = getBodyFont(theme)

	return {
		heading: {
			className: headingFont.className,
			variable: headingFont.variable,
		},
		body: {
			className: bodyFont.className,
			variable: bodyFont.variable,
		},
		hasSeparateFonts: hasSeparateHeadingAndBodyFonts(theme),
	}
}
