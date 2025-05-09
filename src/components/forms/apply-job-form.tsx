'use client'

import { useAppliedJobs } from '@/hooks/use-applied-jobs'
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

const fromSchema = z.object({
	name: z.string().min(2),
	lastname: z.string().min(2),
	email: z.string().email(),
})

type ApplyJobFormProps = z.infer<typeof fromSchema>

export function ApplyJobForm({ jobId }: { jobId: number }) {
	const { addToApplied, items } = useAppliedJobs()

	const form = useForm<ApplyJobFormProps>({
		resolver: zodResolver(fromSchema),
		defaultValues: {
			name: '',
			lastname: '',
			email: '',
		},
	})

	function onSubmit(data: ApplyJobFormProps) {
		addToApplied({
			name: data.name,
			lastname: data.lastname,
			email: data.email,
			jobId: jobId,
		})
	}

	const hasAlreadyApplied = items.find((item) => item.jobsId.includes(jobId))

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					size={'lg'}
					className="w-full"
					disabled={hasAlreadyApplied && true}
				>
					Apply for this position
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Forms</DialogTitle>
					<DialogDescription>Apply Job</DialogDescription>

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
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastname"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Lastname</FormLabel>
											<FormControl>
												<Input placeholder="Lastname" {...field} />
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
												<Input placeholder="Email" {...field} />
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
										disabled={!form.formState.isValid}
									>
										Apply
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
