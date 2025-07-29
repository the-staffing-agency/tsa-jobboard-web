import { type ICategoryIcon, categoryIcons } from '@/config/categories'
import type { RemixiconComponentType } from '@remixicon/react'
import type { ComponentType, SVGProps } from 'react'

/**
 * Helper function to find category by value or label
 * @param categoryValueOrLabel - The category value or label to search for
 * @returns The category configuration or null if not found
 */
function findCategoryByValueOrLabel(
	categoryValueOrLabel: string,
): ICategoryIcon | null {
	return (
		categoryIcons.find(
			(category) =>
				category.value === categoryValueOrLabel ||
				category.label.toLowerCase() === categoryValueOrLabel.toLowerCase(),
		) || null
	)
}

/**
 * Get the icon component for a category by value or label
 * @param categoryValueOrLabel - The category value or label to search for
 * @returns The icon component or null if not found
 */
export function getCategoryIcon(
	categoryValueOrLabel: string,
): RemixiconComponentType | ComponentType<SVGProps<SVGSVGElement>> | null {
	const category = findCategoryByValueOrLabel(categoryValueOrLabel)
	return category?.icon || null
}

/**
 * Get the complete category configuration by value or label
 * @param categoryValueOrLabel - The category value or label to search for
 * @returns The category configuration or null if not found
 */
export function getCategoryConfig(
	categoryValueOrLabel: string,
): ICategoryIcon | null {
	return findCategoryByValueOrLabel(categoryValueOrLabel)
}

export function getAllCategories(): ICategoryIcon[] {
	return categoryIcons
}

/**
 * Check if a category exists by value or label
 * @param categoryValueOrLabel - The category value or label to check
 * @returns True if category exists, false otherwise
 */
export function categoryExists(categoryValueOrLabel: string): boolean {
	return findCategoryByValueOrLabel(categoryValueOrLabel) !== null
}
