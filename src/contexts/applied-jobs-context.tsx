'use client'

import { env } from '@/config/env'
import { createContext, useEffect, useState } from 'react'

export interface AppliedJobs {
	name: string
	lastname: string
	email: string
	jobsId: number[]
}

interface JobInput {
	name: string
	lastname: string
	email: string
	jobId: number
}

interface AppliedJobsContextType {
	items: AppliedJobs[]
	addToApplied: ({ email, jobId }: JobInput) => void
}

export const AppliedJobsContext = createContext({} as AppliedJobsContextType)

export function AppliedJobsProvider({
	children,
}: { children: React.ReactNode }) {
	const [jobItems, setJobItems] = useState<AppliedJobs[]>([])

	useEffect(() => {
		const stored = localStorage.getItem(env.NEXT_PUBLIC_LOCAL_STORAGE_NAME)
		if (stored) {
			setJobItems(JSON.parse(stored))
		}
	}, [])

	useEffect(() => {
		const stateJSON = JSON.stringify(jobItems)
		localStorage.setItem(env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, stateJSON)
	}, [jobItems])

	function addToApplied({ name, lastname, email, jobId }: JobInput) {
		setJobItems((state) => {
			const emailAlreadApplied = jobItems.some((item) => item.email === email)

			if (emailAlreadApplied) {
				return state.map((item) => {
					if (item.email === email) {
						return {
							...item,
							jobsId: [...item.jobsId, jobId],
						}
					}

					return item
				})
			}

			return [
				...state,
				{
					email,
					name,
					lastname,
					jobsId: Array.of(jobId),
				},
			]
		})
	}

	return (
		<AppliedJobsContext.Provider
			value={{
				items: jobItems,
				addToApplied,
			}}
		>
			{children}
		</AppliedJobsContext.Provider>
	)
}
