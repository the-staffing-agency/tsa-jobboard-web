import { Badge } from '../badge'

export enum JobType {
	FULL_TIME = 'Full-time',
	PART_TIME = 'Part-time',
	CONTRACT = 'Contract',
	INTERNSHIP = 'Internship',
	REMOTE = 'Remote',
}

interface JobBadgeTypeProps {
	type: string
}

export function JobBadgeType({ type }: JobBadgeTypeProps) {
	return <Badge variant="accent">{type}</Badge>
}
