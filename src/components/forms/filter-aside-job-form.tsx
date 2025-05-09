'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { jobsType } from '@/data/website/jobs/jobs-type'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const fromSchema = z.object({
	jobsType: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: 'You have to select at least one item.',
	}),
})

type FilterAsideJobFormData = z.infer<typeof fromSchema>

export function FilterAsideJobForm() {
	const searchParams = useSearchParams()
	const router = useRouter()

	const type = searchParams.getAll('type')
	const isSearchParamsByTypeAll = searchParams.has('type', 'all')

	console.log(isSearchParamsByTypeAll)

	const form = useForm<FilterAsideJobFormData>({
		resolver: zodResolver(fromSchema),
		defaultValues: {
			jobsType: isSearchParamsByTypeAll ? [] : [...type],
		},
	})

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams],
	)

	function onSubmit(data: FilterAsideJobFormData) {
		router.push(
			`/search/jobs?${createQueryString('type', data.jobsType.toString()).replace(/%2C/g, ',')}`,
		)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="jobsType"
					render={() => (
						<FormItem>
							<div className="mb-4">
								<FormLabel className="text-base">Job Type</FormLabel>
							</div>
							{jobsType.map((item) => (
								<FormField
									key={item.value}
									control={form.control}
									name="jobsType"
									render={({ field }) => {
										return (
											<FormItem
												key={item.value}
												className="flex flex-row items-start space-x-1 space-y-0"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.value)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...field.value, item.value])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.value,
																		),
																	)
														}}
													/>
												</FormControl>
												<FormLabel className="cursor-pointer font-normal text-sm">
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

				<div className="flex gap-2">
					<Button type="submit">Filter</Button>
					<Button type="reset" variant={'ghost'}>
						<span className="text-red-500">Reset</span>
					</Button>
				</div>
			</form>
		</Form>
	)
}
