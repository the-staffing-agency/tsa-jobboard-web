import {
	CasinosIcon,
	CountryClubIcon,
	GroceryIcon,
	HotelsIcon,
	RestaurantsIcon,
} from '@/components/icons'
import {
	type RemixiconComponentType,
	RiApps2Line,
	RiRestaurantLine,
	RiSearchLine,
	RiShipLine,
} from '@remixicon/react'
import type { ComponentType } from 'react'

export interface CategoryIconConfig {
	value: string
	icon: RemixiconComponentType | ComponentType<React.SVGProps<SVGSVGElement>>
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
		icon: RestaurantsIcon,
		label: 'Restaurants',
		bgColor: 'bg-red-200/40',
		textColor: 'fill-red-800',
		gradientBorder: 'bg-gradient-to-tr from-red-400 via-red-500 to-rose-600',
	},
	{
		value: 'hotels',
		icon: HotelsIcon,
		label: 'Hotels',
		bgColor: 'bg-purple-200/40',
		textColor: 'fill-purple-800',
		gradientBorder:
			'bg-gradient-to-tr from-purple-400 via-purple-500 to-indigo-600',
	},
	{
		value: 'casinos',
		icon: CasinosIcon,
		label: 'Casinos',
		bgColor: 'bg-yellow-200/40',
		textColor: 'fill-yellow-800',
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
		icon: GroceryIcon,
		label: 'Grocery',
		bgColor: 'bg-green-300/40',
		textColor: 'fill-green-800',
		gradientBorder:
			'bg-gradient-to-tr from-green-400 via-green-500 to-teal-500',
	},
	{
		value: 'country-club-golf-club',
		icon: CountryClubIcon,
		label: 'Country Club & Golf Club',
		bgColor: 'bg-emerald-300/40',
		textColor: 'fill-emerald-800',
		gradientBorder:
			'bg-gradient-to-tr from-emerald-400 via-emerald-500 to-lime-500',
	},
]
