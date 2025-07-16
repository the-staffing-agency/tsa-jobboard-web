'use client'
import { usePortalFilters } from '@/hooks/use-portal-filters'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { MultiSelect } from '../ui/multi-select'

const LOCATION_PARAM_NAME = 'location_id'

const formSchema = z.object({
	query: z.string().optional(),
	locations: z.array(z.string()),
})

type SearchFormProps = z.infer<typeof formSchema>

export function SearchFrom() {
	const { locations } = usePortalFilters()

	const router = useRouter()
	const searchParams = useSearchParams()
	const [_, startTransition] = useTransition()

	const query = searchParams.get('q')
	const params = new URLSearchParams(searchParams)

	const form = useForm<SearchFormProps>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			query: query ?? '',
			locations: params.has(LOCATION_PARAM_NAME)
				? params.get(LOCATION_PARAM_NAME)?.split(',')
				: [],
		},
	})

	function handleSearchSubmit(data: SearchFormProps) {
		const { query, locations } = data

		if (query) {
			params.set('q', query)
		}

		if (locations.length > 0) {
			params.set('location_id', locations.join(','))
		}

		const href = `/search/jobs${params.toString() ? `?${params.toString()}` : ''}`

		startTransition(() => {
			router.push(href, {
				scroll: false,
			})
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSearchSubmit)}
				className="relative grid w-full grid-rows-2 gap-2 rounded-lg bg-white px-3 py-2 shadow-sm lg:flex lg:w-[940px]"
			>
				<div className="row-start-1 w-full lg:w-2/3">
					<FormField
						control={form.control}
						name="query"
						render={({ field }) => (
							<FormItem>
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
				</div>

				<div className="row-start-2 lg:row-start-1 lg:w-72">
					<FormField
						control={form.control}
						name="locations"
						render={() => (
							<FormItem>
								<div className="h-12 w-72 min-w-full">
									<Controller
										name="locations"
										control={form.control}
										defaultValue={['']}
										render={({ field }) => (
											<MultiSelect
												options={locations.map((option) => ({
													label: option.label.toString(),
													value: option.value.toString(),
												}))}
												selected={
													Array.isArray(field.value)
														? field.value
														: field.value
															? [field.value]
															: []
												}
												onChange={field.onChange}
												placeholder="Search by Location"
												emptyText="No location found."
												className="h-full"
											/>
										)}
									/>
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="row-start-2 h-12 lg:row-start-1">
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
