export default function SearchPageTemplate({
	children,
}: { children: React.ReactNode }) {
	return (
		<section>
			{children}
			<footer className="mt-20" />
		</section>
	)
}
