import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Form } from 'react-hook-form'
import { ApplyJobForm } from '../forms/apply-job-form'
import { Button } from '../ui/button'

export function JobApplyDialog() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button size={'lg'} className="w-full">
					{' '}
					Apply for this position{' '}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Forms</DialogTitle>
					<DialogDescription>Form</DialogDescription>

					<DialogContent>
						<ApplyJobForm />
					</DialogContent>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
