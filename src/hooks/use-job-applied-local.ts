import { JobsAppliedContext } from '@/contexts/jobs-applied-context'
import { useContext } from 'react'

export const useAppliedJobsLocal = () => useContext(JobsAppliedContext)
