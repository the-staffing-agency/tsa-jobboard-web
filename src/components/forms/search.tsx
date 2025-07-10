'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
	query: z.string().optional(),
	location: z.string().optional(),
})

type SearchFormProps = z.infer<typeof formSchema>

export function SearchFrom() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q')
	const location = searchParams.get('location')

	const form = useForm<SearchFormProps>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			query: query ?? '',
			location: location ?? '',
		},
	})

	function handleSearchSubmit(data: SearchFormProps) {
		const { query, location } = data

		const params = new URLSearchParams()

		if (query) {
			params.set('q', query)
		}

		if (location) {
			params.set('location', location)
		}

		const href = `/search/jobs${params.toString() ? `?${params.toString()}` : ''}`

		router.push(href, {
			scroll: false,
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSearchSubmit)}
				className="relative flex w-full items-start gap-2 rounded-lg bg-white px-3 py-2 shadow-sm lg:w-[800px]"
			>
				<FormField
					control={form.control}
					name="query"
					render={({ field }) => (
						<FormItem className="flex-2/3 grow">
							<FormControl>
								<div className="relative flex h-12 items-center">
									<Input
										placeholder="Search by role. E.g. Front Desk"
										{...field}
										className="h-full"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem className="flex-1/3 grow">
							<FormControl>
								<div className="relative flex h-12 items-center">
									<Input
										placeholder="Search by Location"
										{...field}
										className="h-full"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="h-12 items-center justify-end gap-2 lg:flex">
					<Button type="submit" size="lg">
						<Search className="h-6 w-6 lg:hidden" />
						<span className="sr-only lg:not-sr-only lg:inline-flex">
							Search
						</span>
					</Button>
				</div>
			</form>
		</Form>
	)
}
