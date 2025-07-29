import { getCategoryConfig } from '@/services/category.service'
import { cn } from '@/utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'

const categorySphereVariants = cva(
	'flex flex-col items-center gap-2 group transition-all duration-300 focus:outline-none rounded-lg px-1 cursor-pointer w-16 disabled:opacity-50 disabled:cursor-not-allowed',
)

const DEFAULT_CATEGORY_STYLES = {
	bgColor: 'bg-accent/90',
	isActive: 'bg-accent opacity-100',
	textColor: 'text-white fill-white',
} as const

interface CategorySphereButtonProps
	extends React.ComponentProps<'button'>,
		VariantProps<typeof categorySphereVariants> {
	label: string
	value: string | number
	isActive?: boolean
}

function normalizeCategoryName(text: string) {
	if (!text) return ''

	const parts = text
		.split('/')
		.map((item) => item.trim())
		.filter(Boolean)

	if (parts.length === 0) return ''

	if (parts.length === 1) return parts[0]

	const last = parts.pop()
	return `${parts.join(', ')} & ${last}`
}

export function CategorySphereButton({
	label,
	value,
	isActive = false,
	className,
	...props
}: CategorySphereButtonProps) {
	const categoryConfig = getCategoryConfig(normalizeCategoryName(label))

	const IconComponent = categoryConfig?.icon

	const innerClasses = cn(
		'rounded-full flex justify-center items-center relative transition-all duration-300 size-14',
		DEFAULT_CATEGORY_STYLES.bgColor,
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
					isActive && DEFAULT_CATEGORY_STYLES.isActive,
				)}
			>
				<div className={innerClasses}>
					{IconComponent ? (
						<IconComponent
							className={cn(
								'size-6 transition-all duration-300',
								DEFAULT_CATEGORY_STYLES.textColor,
							)}
						/>
					) : null}
				</div>
			</div>
			<span className="text-center font-semibold text-foreground/80 text-xs transition-all duration-300">
				{normalizeCategoryName(label)}
			</span>
		</button>
	)
}
