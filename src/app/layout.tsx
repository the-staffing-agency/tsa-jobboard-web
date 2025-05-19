import '@/styles/globals.css'

import { ThemeProvider } from '@/contexts/theme-provider'
import { metadataConfig } from '@/data/website/metadata'
import { THEMES, type ThemeType } from '@/themes'
import { findValidTheme } from '@/utils/find-valid-theme'
import { splitHostname } from '@/utils/split-hostname'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

const { description } = metadataConfig

export const metadata: Metadata = {
	title: {
		template: '%s | Culinary Jobs',
		default: 'Culinary Jobs',
	},
	description,
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
				<ThemeProvider
					defaultTheme={theme ?? 'default'}
					enableSystem={false}
					themes={[...THEMES]}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
