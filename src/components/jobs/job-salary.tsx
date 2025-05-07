import { salaryFormatter } from "@/utils/formatter";

export interface JobSalaryProps {
	type?: string;
	start: number;
	end: number;
}

export function JobSalary({ type, start, end }: JobSalaryProps) {
	return (
		<div className="flex gap-1 font-semibold text-slate-800 text-sm">
			<span>{salaryFormatter.format(start)}</span> -{" "}
			<span>{salaryFormatter.format(end)}</span>{" "}
			{type ?? `<span> ${type} </span>`}
		</div>
	);
}
