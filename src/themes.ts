/**
 * An array of available theme identifiers for the application.
 *
 * @remarks
 * The themes are represented as string literals and are used to configure
 * different visual or functional modes within the application.
 *
 * @example
 * THEMES.includes('chefs'); // true
 *
 * @readonly
 */

import { z } from 'zod'

export const THEMES = ['chefs', 'luxury', 'resume', 'supermarket'] as const

export const themeSchema = z.enum(THEMES)

export type ThemeType = z.infer<typeof themeSchema>
