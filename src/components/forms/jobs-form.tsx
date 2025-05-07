"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const formSchema = z.object({
	query: z.string().min(2, {
		message: "Please enter a job title or keyword",
	}),
	type: z.string().min(2),
});

type JobFromProps = z.infer<typeof formSchema>;

export function JobsFrom() {
	const form = useForm<JobFromProps>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			query: "",
			type: "all",
		},
	});

	function onSubmit(data: JobFromProps) {
		console.log("Form submitted:", data);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full relative flex gap-2 items-start lg:w-[800px] shadow-sm py-2 px-3 bg-white rounded-lg"
			>
				<FormField
					control={form.control}
					name="query"
					render={({ field }) => (
						<FormItem className="flex-2/3">
							<FormControl>
								<div className="flex items-center relative h-12">
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

				<div className="lg:flex-1/3 lg:flex items-center justify-end gap-2 h-12">
					<div className="hidden lg:flex h-full w-full">
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem className="grow h-full">
									<FormControl>
										<Select onValueChange={field.onChange}>
											<SelectTrigger className="min-h-full w-full">
												<SelectValue
													className="block w-full h-full"
													placeholder="All Jobs"
												/>
											</SelectTrigger>

											<SelectContent>
												<SelectGroup>
													<SelectItem value="full-time">Full-time</SelectItem>
													<SelectItem value="part-time">Part-time</SelectItem>
													<SelectItem value="contract">Contract</SelectItem>
													<SelectItem value="internship">Internship</SelectItem>
													<SelectItem value="Remote">Remote</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" size="lg">
						<Search className="h-6 w-6 lg:hidden" />
						<span className="sr-only lg:inline-flex lg:not-sr-only">
							Search
						</span>
					</Button>
				</div>
			</form>
		</Form>
	);
}
