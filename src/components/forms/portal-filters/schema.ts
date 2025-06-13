import { z } from 'zod'

const optionSchema = z
	.array(z.union([z.string(), z.number()]))
	.refine(
		(value) =>
			value.some((item) => item !== undefined && item !== null && item !== ''),
		{
			message: 'You have to select at least one item.',
		},
	)

export const formSchema = z.object({
	categories: z.array(z.string()),
	companies: z.array(z.string()),
	jobTypes: z.array(z.string()),
	workplaces: z.array(z.string()),
})
