import { RiMapPin2Line } from '@remixicon/react'
import { Badge } from '../badge'

export function JobLocation({ text }: { text: string }) {
	return (
		<Badge className="flex items-center p-0" variant={'ghost'}>
			<RiMapPin2Line className="text-accent" />
			<span className="pt-1 text-base/none">{text}</span>
		</Badge>
	)
}
