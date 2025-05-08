'use client'

import { jobsType } from '@/data/website/jobs/jobs-type'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

const formSchema = z.object({
	query: z.string().min(2, {
		message: 'Please enter a job title or keyword',
	}),
	type: z.string().min(2),
})

type SearchJobProps = z.infer<typeof formSchema>

export function SearchJobFrom() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q')
	const type = searchParams.get('type')

	const form = useForm<SearchJobProps>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			query: query ?? '',
			type: type ?? 'all',
		},
	})

	function onSubmit(data: SearchJobProps) {
		const { query, type } = data

		if (!query) {
			return
		}

		router.push(`/search?q=${query}&type=${type}`)
	}

	// const selectValuePlaceholder = (value: string) =>
	// 	jobsType.find((job) => job.value === value)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
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
