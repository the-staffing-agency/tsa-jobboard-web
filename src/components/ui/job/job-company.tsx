import { RiBuilding2Line } from '@remixicon/react'
import { Badge } from '../badge'

export function JobCompany({ text }: { text: string }) {
	return (
		<Badge className="p-0" variant={'ghost'}>
			<RiBuilding2Line className="text-accent" />
			{text}
		</Badge>
	)
}
