import { THEME_NAMES, type ThemeType } from '../theme-mapping'
import { chefThemeMetadata } from './chef'
import { defaultThemeMetadata } from './default'
import { estateThemeMetadata } from './estate'
import type { IThemeMetadata } from './metadata.types'
import { supermarketThemeMetadata } from './supermarket'

export const themeMetadataConfig: Record<ThemeType, IThemeMetadata> = {
	[THEME_NAMES.DEFAULT]: defaultThemeMetadata,
	[THEME_NAMES.CHEF]: chefThemeMetadata,
	[THEME_NAMES.ESTATE]: estateThemeMetadata,
	[THEME_NAMES.SUPERMARKET]: supermarketThemeMetadata,
}

export { defaultThemeMetadata } from './default'
export { chefThemeMetadata } from './chef'
export { estateThemeMetadata } from './estate'
export { supermarketThemeMetadata } from './supermarket'

export type {
	IThemeMetadata,
	ISocialConfig,
	ITitleConfig,
} from './metadata.types'
