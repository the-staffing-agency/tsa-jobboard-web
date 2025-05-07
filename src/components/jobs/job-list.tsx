export function JobList({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-100 rounded-xl border-slate-200 hover:border-accent/20 hover:bg-accent/20 transition-colors duration-150 ease-in-out">
			{children}
		</div>
	);
}
