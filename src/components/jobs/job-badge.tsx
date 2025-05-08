import { Badge } from '../ui/badge'

export enum JobType {
	FULL_TIME = 'Full-time',
	PART_TIME = 'Part-time',
	CONTRACT = 'Contract',
	INTERNSHIP = 'Internship',
	REMOTE = 'Remote',
}

interface JobJobBadgeProps {
	type: JobType
}

export function JobBadge({ type }: JobJobBadgeProps) {
	return <Badge variant="accent">{type}</Badge>
}
