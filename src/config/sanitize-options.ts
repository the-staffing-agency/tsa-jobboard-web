import sanitizeHtml from 'sanitize-html'

export const sanitizeOptions = {
	allowedTags: sanitizeHtml.defaults.allowedTags,
	allowedAttributes: {
		...sanitizeHtml.defaults.allowedAttributes,
		'*': (sanitizeHtml.defaults.allowedAttributes['*'] || []).filter(
			(attr) => attr !== 'style',
		),
	},
	allowedStyles: {},
}
