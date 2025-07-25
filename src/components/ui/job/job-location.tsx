import { RiMapPin2Line } from '@remixicon/react'

export function JobLocation({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-1">
			<RiMapPin2Line className="size-4 text-accent" />
			<span className="font-body text-base/none text-foreground">{text}</span>
		</div>
	)
}
