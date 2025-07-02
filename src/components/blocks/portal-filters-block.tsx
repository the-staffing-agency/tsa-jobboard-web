import { getPortalFilters } from '@/http/get-portal-filters'
import { PortalFiltersFrom } from '../forms'
import { Widget, WidgetContent, WidgetTitle } from '../widget'

export async function PortalFiltersBlock() {
	const data = await getPortalFilters()

	return (
		<Widget>
			<WidgetTitle>Filter</WidgetTitle>
			<WidgetContent>
				<PortalFiltersFrom filters={data} />
			</WidgetContent>
		</Widget>
	)
}
