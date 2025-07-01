'use client'

import { useAppliedJobsLocal } from '@/hooks/use-job-applied-local'
import { useSubmitJobApplication } from '@/hooks/use-submit-job-application'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose, DialogDescription } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	phone: z.string().optional(),
	mobile: z.string().optional(),
	resume: z.instanceof(File, {
		message: 'Please upload a valid file',
	}),
})

type JobApplicationFormProps = z.infer<typeof formSchema>

export function JobApplicationForm({ id }: { id: number | string }) {
	const { store } = useAppliedJobsLocal()

	const { submitApplication, isPending, isSuccess, isError } =
		useSubmitJobApplication()

	const splitName = (fullName: string) => {
		const nameParts = fullName.trim().split(/\s+/)

		if (nameParts.length === 1) {
			return {
				first_name: nameParts[0],
				last_name: null,
			}
		}

		const first_name = nameParts[0]
		const last_name = nameParts.slice(1).join(' ')

		return {
			first_name,
			last_name,
		}
	}

	const form = useForm<JobApplicationFormProps>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			mobile: '',
		},
	})

	function onSubmit(data: JobApplicationFormProps) {
		const { first_name, last_name } = splitName(data.name)

		submitApplication({
			id: id.toString(),
			data: {
				first_name,
				last_name,
				email: data.email,
				phone: data.phone,
				mobile: data.mobile,
				resume: data.resume,
			},
		})

		if (isSuccess) {
			form.reset()
		}
	}

	const hasAlreadyApplied = store?.some((item) =>
		item.jobIds.includes(String(id)),
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					size={'lg'}
					disabled={isPending || hasAlreadyApplied}
					className="w-full"
				>
					{hasAlreadyApplied ? 'Already Applied' : 'Apply Now'}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Job Application</DialogTitle>
					<DialogDescription>
						Fill out the form to apply for this position
					</DialogDescription>

					<DialogContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="w-full space-y-6 py-4"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel aria-required>Name</FormLabel>
											<FormControl>
												<Input required {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Phone (Optional)</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="mobile"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Mobile</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="resume"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel aria-required>Resume</FormLabel>
											<FormControl>
												<Input
													type="file"
													accept=".pdf,.doc,.docx"
													onChange={(e) => {
														const file = e.target.files?.[0]
														if (file) field.onChange(file)
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<DialogClose asChild>
									<Button
										type="submit"
										className="w-full"
										size={'lg'}
										disabled={isPending}
									>
										Apply Now
									</Button>
								</DialogClose>
							</form>
						</Form>
					</DialogContent>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
