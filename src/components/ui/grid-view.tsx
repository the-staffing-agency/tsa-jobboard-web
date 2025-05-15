export function GridView({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
			{children}
		</div>
	)
}
