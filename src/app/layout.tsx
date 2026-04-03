import '@/styles/globals.css'

import { LinkedInInsight } from '@/components/linkedin-insight'
import { MetaPixel } from '@/components/meta-pixel'
import { Providers } from '@/config/provides'
import { THEMES, type ThemeType } from '@/config/theme/theme-mapping'
import { META_PIXEL_IDS } from '@/config/tracking'
import { ThemeProvider } from '@/contexts/theme-provider'
import { getAllFontVariables } from '@/services/font.service'
import { generateThemeMetadata } from '@/services/theme-metadata.service'
import { findValidTheme } from '@/utils/find-valid-theme'
import { splitHostname } from '@/utils/split-hostname'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers()
	const host = headersList.get('host')
	const isThemeHeaderPresent = headersList.get('x-theme')

	const hostnameParts = splitHostname(host)

	let theme: ThemeType | null | undefined

	if (hostnameParts) {
		theme = findValidTheme(hostnameParts) as ThemeType | null | undefined
	}

	if (isThemeHeaderPresent) {
		theme = findValidTheme([isThemeHeaderPresent]) as
			| ThemeType
			| null
			| undefined
	}

	return generateThemeMetadata(theme || 'default')
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const headersList = await headers()
	const host = headersList.get('host')
	const isThemeHeaderPresent = headersList.get('x-theme')

	const hostnameParts = splitHostname(host)

	let theme: ThemeType | null | undefined

	if (hostnameParts) {
		theme = findValidTheme(hostnameParts) as ThemeType | null | undefined
	}

	if (isThemeHeaderPresent) {
		theme = findValidTheme([isThemeHeaderPresent]) as
			| ThemeType
			| null
			| undefined
	}

	const fontVariablesConfig = getAllFontVariables(theme)

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fontVariablesConfig}>
				<Providers>
					<ThemeProvider
						defaultTheme={theme ?? 'default'}
						enableSystem={false}
						themes={Object.values(THEMES)}
					>
						{children}
					</ThemeProvider>
				</Providers>
				<LinkedInInsight />
				<MetaPixel pixelId={META_PIXEL_IDS[theme ?? 'default']} />
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: 'none' }}
						alt=""
						src="https://px.ads.linkedin.com/collect/?pid=8824826&fmt=gif"
					/>
				</noscript>
			</body>
		</html>
	)
}
