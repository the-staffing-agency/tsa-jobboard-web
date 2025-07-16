import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		// NODE_ENV: z
		// 	.enum(['development', 'test', 'production'])
		// 	.default('development'),
	},

	client: {
		NEXT_PUBLIC_API_BASE_URL: z.string().url(),
		NEXT_PUBLIC_LOCAL_STORAGE_NAME: z.string(),
		NEXT_PUBLIC_PORTAL_DEFAULT: z
			.string()
			.min(1, 'Portal Default token is required'),
		NEXT_PUBLIC_PORTAL_CHEF_KEY: z
			.string()
			.min(1, 'Portal Chef token is required'),
		NEXT_PUBLIC_PORTAL_SUPERMARKET_KEY: z
			.string()
			.min(1, 'Portal Supermarket token is required'),
		NEXT_PUBLIC_PORTAL_ESTATE_KEY: z
			.string()
			.min(1, 'Portal Estate token is required'),
	},
	runtimeEnv: {
		NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		NEXT_PUBLIC_LOCAL_STORAGE_NAME: process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME,
		NEXT_PUBLIC_PORTAL_DEFAULT: process.env.NEXT_PUBLIC_PORTAL_DEFAULT,
		NEXT_PUBLIC_PORTAL_CHEF_KEY: process.env.NEXT_PUBLIC_PORTAL_CHEF_KEY,
		NEXT_PUBLIC_PORTAL_SUPERMARKET_KEY:
			process.env.NEXT_PUBLIC_PORTAL_SUPERMARKET_KEY,
		NEXT_PUBLIC_PORTAL_ESTATE_KEY: process.env.NEXT_PUBLIC_PORTAL_ESTATE_KEY,
	},
})
