import {
	type IThemeMetadata,
	themeMetadataConfig,
} from '@/config/theme/metadata'
import type { ThemeType } from '@/config/theme/theme-mapping'
import type { Metadata } from 'next'

/**
 * Get metadata configuration for a specific theme
 * @param theme - The theme type
 * @returns Theme-specific metadata configuration
 */
export function getThemeMetadata(theme: ThemeType): IThemeMetadata {
	return themeMetadataConfig[theme] || themeMetadataConfig.default
}

/**
 * Generate Next.js Metadata object for a specific theme
 * @param theme - The theme type
 * @param pageTitle - Optional page-specific title
 * @param pageDescription - Optional page-specific description
 * @returns Next.js Metadata object
 */
export function generateThemeMetadata(
	theme: ThemeType,
	pageTitle?: string,
	pageDescription?: string,
): Metadata {
	const themeConfig = getThemeMetadata(theme)

	const title = pageTitle
		? themeConfig.title.template.replace('%s', pageTitle)
		: themeConfig.title.default

	const description = pageDescription || themeConfig.description

	const metadata: Metadata = {
		title: {
			default: themeConfig.title.default,
			template: themeConfig.title.template,
		},
		description,
		keywords: themeConfig.keywords,
		openGraph: {
			title,
			description,
			type: 'website',
			locale: 'en_US',
			siteName: themeConfig.siteName,
			url: themeConfig.domain,
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			site: themeConfig.social.twitter,
			creator: themeConfig.social.twitter,
		},
		metadataBase: themeConfig.domain ? new URL(themeConfig.domain) : undefined,
	}

	if (themeConfig.favicon) {
		metadata.icons = {
			icon: themeConfig.favicon.icon,
			apple: themeConfig.favicon.appleTouchIcon || themeConfig.favicon.icon,
			shortcut: themeConfig.favicon.shortcutIcon || themeConfig.favicon.icon,
		}
	}

	return metadata
}

/**
 * Get theme-specific SEO data for structured data
 * @param theme - The theme type
 * @returns SEO-optimized data object
 */
export function getThemeSEOData(theme: ThemeType) {
	const themeConfig = getThemeMetadata(theme)

	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: themeConfig.siteName,
		description: themeConfig.description,
		url: themeConfig.domain,
		sameAs: [
			themeConfig.social.twitter &&
				`https://twitter.com/${themeConfig.social.twitter.replace('@', '')}`,
			themeConfig.social.instagram &&
				`https://instagram.com/${themeConfig.social.instagram.replace('@', '')}`,
			themeConfig.social.linkedin &&
				`https://linkedin.com/${themeConfig.social.linkedin}`,
		].filter(Boolean),
		potentialAction: {
			'@type': 'SearchAction',
			target: `${themeConfig.domain}/search?q={search_term_string}`,
			'query-input': 'required name=search_term_string',
		},
	}
}

/**
 * Get complete metadata configuration for a theme
 * @param theme - The theme type
 * @returns Theme metadata configuration
 */
export function getMetadata(theme: ThemeType): IThemeMetadata {
	return getThemeMetadata(theme)
}

/**
 * Generate Next.js metadata for a page with theme-specific branding
 * @param theme - The theme type
 * @param options - Page-specific metadata options
 * @returns Next.js Metadata object
 */
export function generatePageMetadata(
	theme: ThemeType,
	options: {
		title?: string
		description?: string
		keywords?: string[]
		path?: string
	} = {},
): Metadata {
	const { title, description, keywords: additionalKeywords, path } = options
	const metadata = generateThemeMetadata(theme, title, description)

	if (additionalKeywords?.length) {
		const themeKeywords = getThemeMetadata(theme).keywords
		metadata.keywords = [...themeKeywords, ...additionalKeywords]
	}

	if (path && metadata.openGraph) {
		const themeConfig = getThemeMetadata(theme)
		metadata.openGraph.url = `${themeConfig.domain}${path}`
	}

	return metadata
}

/**
 * Get structured data for SEO
 * @param theme - The theme type
 * @returns JSON-LD structured data
 */
export function getStructuredData(theme: ThemeType) {
	return getThemeSEOData(theme)
}

/**
 * Get theme-specific page title
 * @param theme - The theme type
 * @param pageTitle - Page-specific title
 * @returns Formatted page title
 */
export function getPageTitle(theme: ThemeType, pageTitle?: string): string {
	const themeConfig = getThemeMetadata(theme)

	if (!pageTitle) {
		return themeConfig.title.default
	}

	return themeConfig.title.template.replace('%s', pageTitle)
}

/**
 * Get theme-specific social media handles
 * @param theme - The theme type
 * @returns Social media configuration
 */
export function getSocialHandles(theme: ThemeType) {
	return getThemeMetadata(theme).social
}

/**
 * Get theme-specific domain
 * @param theme - The theme type
 * @returns Domain URL
 */
export function getDomain(theme: ThemeType): string | undefined {
	return getThemeMetadata(theme).domain
}

/**
 * Get theme-specific favicon configuration
 * @param theme - The theme type
 * @returns Favicon configuration object
 */
export function getThemeFavicon(theme: ThemeType) {
	const themeConfig = getThemeMetadata(theme)
	return (
		themeConfig.favicon || {
			icon: '/icons/icon.jpg',
			appleTouchIcon: '/icons/icon.jpg',
			shortcutIcon: '/icons/icon.jpg',
		}
	)
}

export const getThemePageTitle = getPageTitle
export const getThemePageMetadata = generatePageMetadata
export const getThemeStructuredData = getStructuredData
