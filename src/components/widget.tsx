function WidgetTitle({ children }: { children: React.ReactNode }) {
	return <span className="mb-4 block font-bold text-2xl">{children}</span>
}

function Widget({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-sm border border-accent/5 bg-slate-50 p-4 lg:p-6">
			{children}
		</div>
	)
}

function WidgetContent({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}

export { Widget, WidgetTitle, WidgetContent }
