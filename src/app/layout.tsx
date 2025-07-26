import '@/styles/globals.css'

import { Providers } from '@/config/provides'
import { THEMES, type ThemeType } from '@/config/theme/theme-mapping'
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
			</body>
		</html>
	)
}
