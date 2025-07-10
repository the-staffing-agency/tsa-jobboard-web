'use server'

import type { ThemeType } from '@/themes'
import { findValidTheme } from '@/utils/find-valid-theme'
import { splitHostname } from '@/utils/split-hostname'
import { headers } from 'next/headers'

export async function getTheme(): Promise<ThemeType | 'default'> {
	try {
		const headersList = await headers()
		const host = headersList.get('host')
		const themeHeader = headersList.get('x-theme')

		const hostnameParts = splitHostname(host)

		let theme: ThemeType | null | undefined

		if (hostnameParts) {
			theme = findValidTheme(hostnameParts) as ThemeType | null | undefined
		}

		if (themeHeader) {
			theme = findValidTheme([themeHeader]) as ThemeType | null | undefined
		}

		return theme ?? 'default'
	} catch (error) {
		console.error('Error detecting theme:', error)
		return 'default'
	}
}
