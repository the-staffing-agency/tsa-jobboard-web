'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { string, z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
	query: z.string().optional(),
})

type SearchFormProps = z.infer<typeof formSchema>

export function SearchFrom() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q')

	const form = useForm<SearchFormProps>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			query: query ?? '',
		},
	})

	function handleSearchSubmit(data: SearchFormProps) {
		const { query } = data

		const queryString = query?.trim()

		const href = `/search/jobs/${queryString ? `?q=${encodeURIComponent(queryString).replace(/%20/g, '+')}` : ''}`

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
						<FormItem className="grow">
							<FormControl>
								<div className="relative flex h-12 items-center">
									<Input
										placeholder="Job Title, Keywords, or Anythings"
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
