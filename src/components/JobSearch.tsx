import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'

interface JobSearchProps {
	onSearch: (query: string, location: string) => void
	initialQuery?: string
	initialLocation?: string
}

export default function JobSearch({
	onSearch,
	initialQuery = '',
	initialLocation = '',
}: JobSearchProps) {
	const [query, setQuery] = useState(initialQuery)
	const [location, setLocation] = useState(initialLocation)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSearch(query, location)
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
			<div className="flex flex-col gap-2 sm:flex-row">
				<div className="relative flex-grow">
					<Search className="-translate-y-1/2 absolute top-1/2 left-3 transform text-muted-foreground" />
					<Input
						type="text"
						placeholder="Job title, keywords, or company"
						className="pl-10"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<div className="relative flex-grow">
					<Search className="-translate-y-1/2 absolute top-1/2 left-3 transform text-muted-foreground" />
					<Input
						type="text"
						placeholder="Location"
						className="pl-10"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>
				<Button type="submit" className="whitespace-nowrap">
					Search Jobs
				</Button>
			</div>
		</form>
	)
}
