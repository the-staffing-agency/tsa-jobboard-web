export function SearchNotFound() {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 p-8">
			<h2 className="font-bold text-2xl leading-none">No results found</h2>

			<p className="text-lg">
				Sorry, we couldn’t find any matches for your search.
			</p>
		</div>
	)
}
