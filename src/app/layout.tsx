import '@/styles/globals.css'

import { fontConfig } from '@/config/local-font'
import { metadataConfig } from '@/config/metadata'
import { Providers } from '@/config/provides'
import { findValidTheme } from '@/config/theme/find-valid-theme'
import { THEMES, type ThemeType } from '@/config/theme/theme-mapping'
import { ThemeProvider } from '@/contexts/theme-provider'
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

	const activeFontFamily = theme ? fontConfig[theme] : fontConfig.default

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={activeFontFamily.className}>
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
