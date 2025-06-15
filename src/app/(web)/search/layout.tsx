import type { ComponentProps } from 'react'

interface SearchPageTemplateProps extends ComponentProps<'section'> {}

export default function SearchPageTemplate({
	children,
}: SearchPageTemplateProps) {
	return (
		<section>
			{children}
			<footer className="mt-20" />
		</section>
	)
}
