import { type CategoryIconConfig, categoryIcons } from '@/config/category-icons'
import { cn } from '@/utils/cn'
import { type RemixiconComponentType, RiRestaurantLine } from '@remixicon/react'
import { type VariantProps, cva } from 'class-variance-authority'

const categorySphereVariants = cva(
	'flex flex-col items-center gap-2 group transition-all duration-300 focus:outline-none rounded-lg px-1 cursor-pointer w-16 disabled:opacity-50 disabled:cursor-not-allowed',
)

interface CategorySphereButtonProps
	extends React.ComponentProps<'button'>,
		VariantProps<typeof categorySphereVariants> {
	label: string
	value: string | number
	isActive?: boolean
}

export function getCategoryIcon(
	categoryValueOrLabel: string,
): RemixiconComponentType | null {
	const category = categoryIcons.find(
		(cat) =>
			cat.value === categoryValueOrLabel ||
			cat.label.toLowerCase() === categoryValueOrLabel.toLowerCase(),
	)
	return category?.icon || null
}

export function getCategoryConfig(
	categoryValueOrLabel: string,
): CategoryIconConfig | null {
	return (
		categoryIcons.find(
			(cat) =>
				cat.value === categoryValueOrLabel ||
				cat.label.toLowerCase() === categoryValueOrLabel.toLowerCase(),
		) || null
	)
}

export function CategorySphereButton({
	label,
	value,
	isActive = false,
	className,
	...props
}: CategorySphereButtonProps) {
	const categoryConfig = getCategoryConfig(label)
	const IconComponent = categoryConfig?.icon || RiRestaurantLine

	const innerClasses = cn(
		'rounded-full flex justify-center items-center relative transition-all duration-300 size-14',
		categoryConfig?.bgColor,
	)

	return (
		<button
			className={cn(categorySphereVariants(), className)}
			aria-label={`Filter by ${label}`}
			{...props}
		>
			<div
				className={cn(
					'relative rounded-full p-0.5 opacity-80 transition-all duration-300 group-hover:opacity-100',
					isActive && categoryConfig?.gradientBorder,
				)}
			>
				<div className={innerClasses}>
					<IconComponent
						className={`size-4 transition-all duration-300 ${cn(categoryConfig?.textColor)}`}
					/>
				</div>
			</div>
			<span className="text-center font-semibold text-foreground/80 text-xs transition-all duration-300">
				{label}
			</span>
		</button>
	)
}
