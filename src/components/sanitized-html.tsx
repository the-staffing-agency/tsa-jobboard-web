import { sanitizeOptions } from '@/config/sanitize-options'
import sanitizeHtml from 'sanitize-html'

interface SanitizedHtmlProps {
	html: string
	className?: string
}

export function SanitizedHtml({ html, className }: SanitizedHtmlProps) {
	const cleanHtml = sanitizeHtml(
		html
			.replace(/<p[^>]*?>(&nbsp;|\s)*<\/p>/gi, '')
			.replace(/&nbsp;/gi, ' ')
			.replace(/\s{2,}/g, ' '),
		sanitizeOptions,
	)

	return (
		<div
			className={className}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Content is sanitized
			dangerouslySetInnerHTML={{ __html: cleanHtml }}
		/>
	)
}
