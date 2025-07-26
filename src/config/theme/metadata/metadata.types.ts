export interface IThemeMetadata {
	title: {
		default: string
		template: string
	}
	description: string
	keywords: string[]
	siteName: string
	social: {
		twitter?: string
		instagram?: string
		linkedin?: string
	}
	domain?: string
}

export interface ISocialConfig {
	twitter?: string
	instagram?: string
	linkedin?: string
}

export interface ITitleConfig {
	default: string
	template: string
}
