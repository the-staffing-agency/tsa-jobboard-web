import { z } from 'zod'

import { env } from '@/config/env'
import { getFilters } from '@/http/get-filters'
import { PortalFiltersFrom } from '../forms'

export async function PortalFilters() {
	const { data: filters } = await getFilters({
		key: env.NEXT_PUBLIC_PORTAL_TCA_KEY,
	})

	return <PortalFiltersFrom filters={filters} />
}
