'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { MultiSelect } from '@/components/ui/multi-select'
import type { IFiltersResponse } from '@/http/get-portal-filters'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

interface IUpdateParamsInput {
	name: string
	values: string | string[]
}

interface PortalFiltersFormProps {
	filters: IFiltersResponse
}

export const formSchema = z.object({
	categories: z.array(z.string()),
	locations: z.array(z.string()),
})

type FormData = z.infer<typeof formSchema>

export const CATEGORY_PARAM_NAME = 'category_id'
export const LOCATION_PARAM_NAME = 'location_id'

export function PortalFiltersFrom({ filters }: PortalFiltersFormProps) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [isPending, startTransition] = useTransition()

	const params = new URLSearchParams(searchParams)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			categories: params.has(CATEGORY_PARAM_NAME)
				? params.get(CATEGORY_PARAM_NAME)?.split(',')
				: [],
			locations: params.has(LOCATION_PARAM_NAME)
				? params.get(LOCATION_PARAM_NAME)?.split(',')
				: [],
		},
	})

	const updateParams = ({ name, values }: IUpdateParamsInput) => {
		const valueArray = Array.isArray(values) ? values : [values]
		const filteredValues = valueArray.filter(Boolean)

		if (filteredValues.length === 0) {
			params.delete(name)
			return
		}

		const paramValue = Array.isArray(values)
			? filteredValues.join(',')
			: filteredValues[0]
		params.set(name, paramValue)
	}

	function onSubmit(data: FormData) {
		updateParams({ name: CATEGORY_PARAM_NAME, values: data.categories })
		updateParams({ name: LOCATION_PARAM_NAME, values: data.locations })

		params.delete('page')
		params.append('page', '1')

		startTransition(() => {
			router.push(`?${params.toString()}`, {
				scroll: false,
			})
		})
	}

	function handleReset() {
		form.reset({
			categories: [],
			locations: [],
		})

		params.delete(CATEGORY_PARAM_NAME)
		params.delete(LOCATION_PARAM_NAME)

		startTransition(() => {
			router.push(`?${params.toString().replace(/%2C/g, '+')}`, {
				scroll: false,
			})
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* <FormField
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
				/> */}

				<FormField
					control={form.control}
					name="locations"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-base">Locations</FormLabel>
							</div>

							<Controller
								name="locations"
								control={form.control}
								defaultValue={[]}
								render={({ field }) => (
									<MultiSelect
										options={filters.locations.map((option) => ({
											...option,
											value: option.value.toString(),
										}))}
										selected={field.value}
										onChange={field.onChange}
										placeholder="Which location(s) do you prefer?"
										emptyText="No location found."
									/>
								)}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div>
					<Button type="submit" disabled={isPending}>
						Filter
					</Button>
					<Button
						className="text-red-500 transition-colors duration-150 ease-linear hover:text-red-700"
						variant="ghost"
						type="reset"
						onClick={handleReset}
						disabled={isPending}
					>
						Reset
					</Button>
				</div>
			</form>
		</Form>
	)
}
