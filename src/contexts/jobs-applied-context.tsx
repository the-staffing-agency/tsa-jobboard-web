'use client'

import { env } from '@/config/env'
import { createContext, useEffect, useState } from 'react'

interface IApplicant {
	name: string
	lastname: string
	email: string
}

export interface IJobsApplied {
	applicant: IApplicant
	jobIds: string[]
}

interface IJobApplicationInput {
	id: string
	applicant: IApplicant
}

interface JobsAppliedContextType {
	store: IJobsApplied[]
	addToApplied: ({ applicant, id }: IJobApplicationInput) => void
}

export const JobsAppliedContext = createContext({} as JobsAppliedContextType)

export function JobApplicationProvider({
	children,
}: { children: React.ReactNode }) {
	const [jobsApplied, setJobsApplied] = useState<IJobsApplied[]>([])

	useEffect(() => {
		const stored = localStorage.getItem(env.NEXT_PUBLIC_LOCAL_STORAGE_NAME)

		if (!stored) {
			return
		}

		setJobsApplied(JSON.parse(stored))
	}, [])

	useEffect(() => {
		const stateJSON = JSON.stringify(jobsApplied)
		localStorage.setItem(env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, stateJSON)
	}, [jobsApplied])

	function addToApplied({ applicant, id }: IJobApplicationInput) {
		setJobsApplied((state) => {
			const emailAlreadyApplied = state.some(
				(item) => item.applicant.email === applicant.email,
			)

			if (emailAlreadyApplied) {
				return state.map((item) => {
					if (item.applicant.email === applicant.email) {
						return {
							...item,
							jobIds: [...item.jobIds, id],
						}
					}

					return item
				})
			}

			return [
				...state,
				{
					applicant,
					jobIds: [id],
				},
			]
		})
	}

	return (
		<JobsAppliedContext.Provider
			value={{
				store: jobsApplied,
				addToApplied,
			}}
		>
			{children}
		</JobsAppliedContext.Provider>
	)
}
