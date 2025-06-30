import { cn } from '@/utils/cn'

function WidgetTitle({ children, className }: React.ComponentProps<'b'>) {
	return (
		<b className={`mb-4 block font-bold text-2xl ${cn(className)}`}>
			{children}
		</b>
	)
}

function Widget({ children, className }: React.ComponentProps<'div'>) {
	return (
		<div
			className={`rounded-sm border border-foreground/10 bg-slate-50 p-4 shadow-sm lg:p-6 ${cn(className)}`}
		>
			{children}
		</div>
	)
}

function WidgetContent({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}

export { Widget, WidgetTitle, WidgetContent }
