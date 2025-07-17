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
	isActive: string
	textColor: string
}

export const categoryIcons: CategoryIconConfig[] = [
	{
		value: 'all',
		icon: RiApps2Line,
		label: 'All',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'search',
		icon: RiSearchLine,
		label: 'Search',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'food-service',
		icon: RiRestaurantLine,
		label: 'Food Service',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'restaurants',
		icon: RestaurantsIcon,
		label: 'Restaurants',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'hotels',
		icon: HotelsIcon,
		label: 'Hotels',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'casinos',
		icon: CasinosIcon,
		label: 'Casinos',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'cruise-line',
		icon: RiShipLine,
		label: 'Cruise Line',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'grocery',
		icon: GroceryIcon,
		label: 'Grocery',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
	{
		value: 'country-club-golf-club',
		icon: CountryClubIcon,
		label: 'Country Club & Golf Club',
		bgColor: 'bg-accent/90',
		isActive: 'bg-accent opacity-100',
		textColor: 'text-white fill-white',
	},
]
