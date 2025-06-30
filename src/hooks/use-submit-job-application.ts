import { submitJobApplication } from '@/http/submit-job-application'
import { queryClient } from '@/lib/query-client'
import { useMutation } from '@tanstack/react-query'

const JOB_APPLICATION_QUERY_KEY = ['job-application']

export function useSubmitJobApplication() {
	const { mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: submitJobApplication,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: JOB_APPLICATION_QUERY_KEY })
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
