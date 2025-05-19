import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		// APP_URL: z.string().url(),
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
	},

	client: {
		// NEXT_PUBLIC_NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
		NEXT_PUBLIC_API_BASE_URL: z.string().url(),
		NEXT_PUBLIC_LOCAL_STORAGE_NAME: z.string(),
	},

	runtimeEnv: {
		// APP_URL: process.env.APP_URL,
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		NEXT_PUBLIC_LOCAL_STORAGE_NAME: process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME,
	},
})
