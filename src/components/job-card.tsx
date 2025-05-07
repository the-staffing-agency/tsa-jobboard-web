export function JobCard({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-100 rounded-xl border-slate-200 hover:border-accent/20 hover:bg-accent/20 transition-colors duration-150 ease-in-out">
			<div className="flex flex-col gap-4">
				<b>Title</b>
			</div>
		</div>
	);
}
