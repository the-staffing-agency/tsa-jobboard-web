'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { MultiSelect } from '@/components/ui/multi-select'
import type { IFiltersData } from '@/http/get-filters'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import type { z } from 'zod'
import { formSchema } from './schema'

interface PortalFiltersFormProps {
	filters: IFiltersData
}

type FormData = z.infer<typeof formSchema>

export function PortalFiltersFrom({ filters }: PortalFiltersFormProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			categories: [],
			jobTypes: [],
			companies: [],
			workplaces: [],
		},
	})

	function onSubmit(data: FormData) {
		const params = new URLSearchParams(searchParams.toString())

		const updateParam = (key: string, values: string[]) => {
			if (values.length > 0) {
				if (params.has(key)) {
					params.set(key, values.join(','))
				} else {
					params.append(key, values.join(','))
				}
			} else {
				params.delete(key)
			}
		}

		updateParam('category_id', data.categories)
		updateParam('job_type', data.jobTypes.map(String))
		updateParam('company_id', data.companies.map(String))
		updateParam('location', data.workplaces.map(String))

		params.set('page', '1')

		router.push(`?${params.toString()}`)
	}

	function handleReset() {
		form.reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="jobTypes"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-base">Job Types</FormLabel>
							</div>

							{filters.job_types.map((item) => (
								<FormField
									key={item.value}
									control={form.control}
									name="jobTypes"
									render={({ field }) => {
										return (
											<FormItem
												key={item.value}
												className="flex flex-row items-center gap-2"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.value)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([
																		...(field.value ?? []),
																		item.value,
																	])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.value,
																		),
																	)
														}}
													/>
												</FormControl>
												<FormLabel className="font-normal text-sm">
													{item.label}
												</FormLabel>
											</FormItem>
										)
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="categories"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-base">Categories</FormLabel>
							</div>

							{filters.categories.map((item) => (
								<FormField
									key={item.value}
									control={form.control}
									name="categories"
									render={({ field }) => {
										return (
											<FormItem
												key={item.value}
												className="flex flex-row items-center gap-2"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(
															item.value.toString(),
														)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([
																		...(field.value ?? []),
																		item.value.toString(),
																	])
																: field.onChange(
																		field.value?.filter(
																			(value) =>
																				value !== item.value.toString(),
																		),
																	)
														}}
													/>
												</FormControl>
												<FormLabel className="font-normal text-sm">
													{item.label}
												</FormLabel>
											</FormItem>
										)
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="companies"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-base">Companies</FormLabel>
							</div>

							<Controller
								name="companies"
								control={form.control}
								defaultValue={[]}
								render={({ field }) => (
									<MultiSelect
										options={filters.companies}
										selected={(field.value ?? []).map(String)}
										onChange={field.onChange}
										placeholder="Select Workplaces..."
										emptyText="No Workplaces found."
									/>
								)}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="workplaces"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-base">Workplaces</FormLabel>
							</div>

							<Controller
								name="workplaces"
								control={form.control}
								defaultValue={[]}
								render={({ field }) => (
									<MultiSelect
										options={filters.workplaces}
										selected={field.value}
										onChange={field.onChange}
										placeholder="Select Workplaces..."
										emptyText="No Workplaces found."
									/>
								)}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button type="submit">Filter</Button>
					<Button
						className="text-red-500 transition-colors duration-150 ease-linear hover:text-red-700"
						variant="ghost"
						type="reset"
						onClick={handleReset}
					>
						Reset
					</Button>
				</div>
			</form>
		</Form>
	)
}
