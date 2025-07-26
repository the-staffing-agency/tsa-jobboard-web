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

export interface ICategoryIcon {
	value: string
	icon: RemixiconComponentType | ComponentType<React.SVGProps<SVGSVGElement>>
	label: string
}

export const categoryIcons: ICategoryIcon[] = [
	{
		value: 'all',
		icon: RiApps2Line,
		label: 'All',
	},
	{
		value: 'search',
		icon: RiSearchLine,
		label: 'Search',
	},
	{
		value: 'food-service',
		icon: RiRestaurantLine,
		label: 'Food Service',
	},
	{
		value: 'restaurants',
		icon: RestaurantsIcon,
		label: 'Restaurants',
	},
	{
		value: 'hotels',
		icon: HotelsIcon,
		label: 'Hotels',
	},
	{
		value: 'casinos',
		icon: CasinosIcon,
		label: 'Casinos',
	},
	{
		value: 'cruise-line',
		icon: RiShipLine,
		label: 'Cruise Line',
	},
	{
		value: 'grocery',
		icon: GroceryIcon,
		label: 'Grocery',
	},
	{
		value: 'country-club-golf-club',
		icon: CountryClubIcon,
		label: 'Country Club & Golf Club',
	},
]
