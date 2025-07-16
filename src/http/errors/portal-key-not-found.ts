export class PortalKeyNotFound extends Error {
	constructor(theme?: string) {
		const message = theme
			? `No portal key found for theme: ${theme}`
			: 'No portal key found for current theme'

		super(message)
		this.name = 'PortalKeyNotFound'

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, PortalKeyNotFound)
		}
	}
}
