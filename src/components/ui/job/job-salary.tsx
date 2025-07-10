import { moneyFormatter } from '@/utils/formatter'

export interface JobSalaryProps {
	rateLow: number
	rateHigh: number
	ratePer?: string
}

export function JobSalary({ rateLow, rateHigh, ratePer }: JobSalaryProps) {
	return (
		<div className="flex gap-1 font-normal text-accent text-base">
			<span>{moneyFormatter.format(rateLow)}</span> -{' '}
			<span>{moneyFormatter.format(rateHigh)}</span>{' '}
			{ratePer && <span> per {ratePer} </span>}
		</div>
	)
}
