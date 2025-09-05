import {
	BriefcaseIcon,
	CasinosIcon,
	CountryClubIcon,
	FlightIcon,
	GroceryIcon,
	HomeIcon,
	HotelsIcon,
	RestaurantsIcon,
	ShipWheelIcon,
} from '@/components/icons'
import {
	type RemixiconComponentType,
	RiApps2Line,
	RiRestaurantLine,
	RiSchoolLine,
	RiSearchLine,
	RiShipLine,
	RiShoppingCartLine,
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
		value: 'club-golf-club',
		icon: CountryClubIcon,
		label: 'Golf & Country Club',
	},
	{
		value: 'colleges-universities-education',
		icon: RiSchoolLine,
		label: 'Colleges, Universities & Education',
	},
	{
		value: 'corporate',
		icon: BriefcaseIcon,
		label: 'Corporate',
	},
	{
		value: 'corporate-executive',
		icon: BriefcaseIcon,
		label: 'Corporate & Executive',
	},
	{
		value: 'aviaton',
		icon: FlightIcon,
		label: 'Aviaton',
	},
	{
		value: 'domestic',
		icon: HomeIcon,
		label: 'Domestic',
	},
	{
		value: 'yachting',
		icon: ShipWheelIcon,
		label: 'Yachting',
	},
	{
		value: 'the-supermarket-agency',
		icon: RiShoppingCartLine,
		label: 'The Supermarket Agency',
	},
]
