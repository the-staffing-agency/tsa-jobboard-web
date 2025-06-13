export function JobActions({ children }: { children: React.ReactNode }) {
	return (
		<div className="absolute right-6 bottom-6 z-10 flex grow items-center justify-end gap-4 opacity-0 group-hover:opacity-100">
			{children}
		</div>
	)
}
