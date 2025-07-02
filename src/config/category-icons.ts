import {
	type RemixiconComponentType,
	RiApps2Line,
	RiBuildingLine,
	RiGamepadLine,
	RiKnifeLine,
	RiPlantLine,
	RiRestaurantLine,
	RiSearchLine,
	RiShipLine,
	RiShoppingCartLine,
} from '@remixicon/react'

export interface CategoryIconConfig {
	value: string
	icon: RemixiconComponentType
	label: string
	bgColor: string
	textColor: string
	gradientBorder: string
}

export const categoryIcons: CategoryIconConfig[] = [
	{
		value: 'all',
		icon: RiApps2Line,
		label: 'All',
		bgColor: 'bg-foreground/10',
		textColor: 'text-foreground',
		gradientBorder:
			'bg-gradient-to-tr from-slate-400 via-slate-500 to-slate-600',
	},
	{
		value: 'search',
		icon: RiSearchLine,
		label: 'Search',
		bgColor: 'bg-blue-200/40',
		textColor: 'text-blue-800',
		gradientBorder: 'bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600',
	},
	{
		value: 'food-service',
		icon: RiRestaurantLine,
		label: 'Food Service',
		bgColor: 'bg-orange-200/40',
		textColor: 'text-orange-800',
		gradientBorder: 'bg-gradient-to-tr from-orange-400 via-red-500 to-pink-500',
	},
	{
		value: 'restaurants',
		icon: RiKnifeLine,
		label: 'Restaurants',
		bgColor: 'bg-red-200/40',
		textColor: 'text-red-800',
		gradientBorder: 'bg-gradient-to-tr from-red-400 via-red-500 to-rose-600',
	},
	{
		value: 'hotels',
		icon: RiBuildingLine,
		label: 'Hotels',
		bgColor: 'bg-purple-200/40',
		textColor: 'text-purple-800',
		gradientBorder:
			'bg-gradient-to-tr from-purple-400 via-purple-500 to-indigo-600',
	},
	{
		value: 'casinos',
		icon: RiGamepadLine,
		label: 'Casinos',
		bgColor: 'bg-yellow-200/40',
		textColor: 'text-yellow-800',
		gradientBorder:
			'bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-500',
	},
	{
		value: 'cruise-line',
		icon: RiShipLine,
		label: 'Cruise Line',
		bgColor: 'bg-cyan-200/40',
		textColor: 'text-cyan-800',
		gradientBorder:
			'bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500',
	},
	{
		value: 'grocery',
		icon: RiShoppingCartLine,
		label: 'Grocery',
		bgColor: 'bg-green-200/40',
		textColor: 'text-green-800',
		gradientBorder:
			'bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-500',
	},
	{
		value: 'country-club-golf-club',
		icon: RiPlantLine,
		label: 'Country Club & Golf Club',
		bgColor: 'bg-emerald-200/40',
		textColor: 'text-emerald-800',
		gradientBorder:
			'bg-gradient-to-tr from-emerald-400 via-green-500 to-lime-500',
	},
]
