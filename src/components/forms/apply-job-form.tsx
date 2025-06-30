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
	first_name: z.string().min(2, 'First name must be at least 2 characters'),
	last_name: z.string().min(2, 'Last name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	phone: z.string().optional(),
	mobile: z.string().optional(),
	resume: z.instanceof(File, {
		message: 'Please upload a valid file',
	}),
})

type ApplyJobFormProps = z.infer<typeof formSchema>

export function ApplyJobForm({ id }: { id: number | string }) {
	const { addToApplied, store } = useAppliedJobsLocal()

	const { submitApplication, isPending, isSuccess, isError } =
		useSubmitJobApplication()
	const form = useForm<ApplyJobFormProps>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			mobile: '',
		},
	})

	function onSubmit(data: ApplyJobFormProps) {
		submitApplication({
			id: id.toString(),
			data: {
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
				phone: data.phone,
				mobile: data.mobile,
				resume: data.resume,
			},
		})

		if (isSuccess) {
			addToApplied({
				applicant: {
					name: data.first_name,
					lastname: data.last_name,
					email: data.email,
				},
				id: id.toString(),
			})
			form.reset()
		}

		if (isError) {
			console.error('Failed to submit application')
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
									name="first_name"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input placeholder="Enter your first name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="last_name"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input placeholder="Enter your last name" {...field} />
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
												<Input
													placeholder="Enter your email address"
													{...field}
												/>
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
												<Input
													placeholder="Enter your phone number"
													{...field}
												/>
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
											<FormLabel>Mobile (Optional)</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your mobile number"
													{...field}
												/>
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
											<FormLabel>Resume (Optional)</FormLabel>
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
										disabled={isPending || !form.formState.isValid}
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
