import { RiMapPin2Line } from '@remixicon/react'
import { Badge } from '../badge'

export function JobLocation({ text }: { text: string }) {
	return (
		<Badge className="p-0" variant={'ghost'}>
			<RiMapPin2Line className="text-accent" />
			{text}
		</Badge>
	)
}
