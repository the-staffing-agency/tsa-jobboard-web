export function Widget({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-sm border border-accent/5 bg-slate-50 p-4 lg:p-6">
			{children}
		</div>
	)
}
