'use client'

import { submitJobApplication } from '@/http/submit-job-application'
import { queryClient } from '@/lib/query-client'
import { useMutation } from '@tanstack/react-query'
import { useAppliedJobsLocal } from './use-job-applied-local'

const JOB_APPLICATION_QUERY_KEY = ['job-application']

export function useSubmitJobApplication() {
	const { addToApplied } = useAppliedJobsLocal()

	const { mutateAsync, isSuccess, isPending, isError } = useMutation({
		mutationFn: submitJobApplication,
		onSuccess: (_response, variables) => {
			addToApplied({
				applicant: {
					name: variables.data.first_name,
					lastname: variables.data.last_name,
					email: variables.data.email,
				},
				id: variables.id.toString(),
			})
			queryClient.cancelQueries({ queryKey: JOB_APPLICATION_QUERY_KEY })
		},
		onError: () => {
			queryClient.invalidateQueries({ queryKey: JOB_APPLICATION_QUERY_KEY })
		},
	})

	return {
		submitApplication: mutateAsync,
		isSuccess,
		isPending,
		isError,
	}
}
