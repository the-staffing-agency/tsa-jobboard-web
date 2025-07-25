import '@/styles/globals.css'

import { metadataConfig } from '@/config/metadata'
import { Providers } from '@/config/provides'
import { THEMES, type ThemeType } from '@/config/theme/theme-mapping'
import { ThemeProvider } from '@/contexts/theme-provider'
import { getLayoutFontConfig } from '@/services/font.service'
import { findValidTheme } from '@/utils/find-valid-theme'
import { splitHostname } from '@/utils/split-hostname'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
	...metadataConfig,
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

	const fontConfig = getLayoutFontConfig(theme)

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fontConfig.combinedClassName}>
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
