import { AppliedJobsContext } from '@/contexts/applied-jobs-context'
import { useContext } from 'react'

export const useAppliedJobs = () => useContext(AppliedJobsContext)
