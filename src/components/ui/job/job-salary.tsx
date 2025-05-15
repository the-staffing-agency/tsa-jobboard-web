import { moneyFormatter } from '@/utils/formatter'

export interface JobSalaryProps {
	type?: string
	start: number
	end: number
}

export function JobSalary({ type, start, end }: JobSalaryProps) {
	return (
		<div className="flex gap-1 font-semibold text-slate-800 text-sm">
			<span>{moneyFormatter.format(start)}</span> -{' '}
			<span>{moneyFormatter.format(end)}</span>{' '}
			{type && <span> per {type} </span>}
		</div>
	)
}
