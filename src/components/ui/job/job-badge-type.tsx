import { Badge } from '../badge'

export enum JobType {
	FULL_TIME = 'Full-time',
	PART_TIME = 'Part-time',
	CONTRACT = 'Contract',
	INTERNSHIP = 'Internship',
	REMOTE = 'Remote',
}

interface JobBageTypeProps {
	type: string
}

export function JobBadgeType({ type }: JobBageTypeProps) {
	return <Badge variant="accent">{type}</Badge>
}
