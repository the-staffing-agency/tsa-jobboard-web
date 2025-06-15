import '@/styles/globals.css'

import { metadataConfig } from '@/config/metadata'
import { Providers } from '@/config/provides'
import { ThemeProvider } from '@/contexts/theme-provider'
import { THEMES, type ThemeType } from '@/themes'
import { findValidTheme } from '@/utils/find-valid-theme'
import { splitHostname } from '@/utils/split-hostname'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	...metadataConfig,
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const host = (await headers()).get('host')
	const hostnameParts = splitHostname(host)

	let theme: ThemeType | null | undefined

	if (hostnameParts) {
		theme = findValidTheme(hostnameParts) as ThemeType | null | undefined
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
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
