import { type NextRequest, NextResponse } from 'next/server'
import { THEMES, type ThemeType } from './themes'

function isValidTheme(theme: string): theme is ThemeType {
	return Object.values(THEMES).includes(theme as ThemeType)
}

export function middleware(request: NextRequest) {
	const { searchParams } = request.nextUrl
	const themeParam = searchParams.get('theme')

	if (themeParam && isValidTheme(themeParam)) {
		const response = NextResponse.next()
		response.headers.set('x-theme', themeParam)
		response.headers.set('x-middleware-processed', 'true')

		return response
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
}
