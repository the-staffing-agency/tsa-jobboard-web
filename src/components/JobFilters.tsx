import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote'
type Education = 'high-school' | 'bachelors' | 'masters' | 'phd' | 'none'

interface JobFiltersProps {
	onJobTypeChange: (types: JobType[]) => void
	onSalaryChange: (min: number, max: number) => void
	onEducationChange: (edu: Education) => void
	selectedTypes: JobType[]
}

export default function JobFilters({
	onJobTypeChange,
	onSalaryChange,
	onEducationChange,
	selectedTypes,
}: JobFiltersProps) {
	const [salaryRange, setSalaryRange] = useState([0, 200000])
	const [education, setEducation] = useState<Education>('none')

	const jobTypes: JobType[] = [
		'full-time',
		'part-time',
		'contract',
		'internship',
		'remote',
	]
	const educationLevels: Education[] = [
		'high-school',
		'bachelors',
		'masters',
		'phd',
		'none',
	]

	const handleJobTypeToggle = (type: JobType) => {
		const newTypes = selectedTypes.includes(type)
			? selectedTypes.filter((t) => t !== type)
			: [...selectedTypes, type]
		onJobTypeChange(newTypes)
	}

	const handleSalaryChange = (value: number[]) => {
		setSalaryRange(value)
		onSalaryChange(value[0], value[1])
	}

	const handleEducationChange = (edu: Education) => {
		setEducation(edu)
		onEducationChange(edu)
	}

	return (
		<div className="space-y-6">
			<div>
				<h3 className="mb-4 font-semibold text-lg">Job Type</h3>
				<div className="space-y-2">
					{jobTypes.map((type) => (
						<div key={type} className="flex items-center space-x-2">
							<Checkbox
								id={type}
								checked={selectedTypes.includes(type)}
								onCheckedChange={() => handleJobTypeToggle(type)}
							/>
							<Label htmlFor={type} className="capitalize">
								{type.replace('-', ' ')}
							</Label>
						</div>
					))}
				</div>
			</div>

			<div>
				<h3 className="mb-4 font-semibold text-lg">Salary Range</h3>
				<div className="space-y-4">
					<Slider
						value={salaryRange}
						onValueChange={handleSalaryChange}
						min={0}
						max={200000}
						step={10000}
						className="w-full"
					/>
					<div className="flex justify-between text-muted-foreground text-sm">
						<span>${salaryRange[0].toLocaleString()}</span>
						<span>${salaryRange[1].toLocaleString()}</span>
					</div>
				</div>
			</div>

			<div>
				<h3 className="mb-4 font-semibold text-lg">Education Level</h3>
				<div className="space-y-2">
					{educationLevels.map((level) => (
						<div key={level} className="flex items-center space-x-2">
							<Checkbox
								id={level}
								checked={education === level}
								onCheckedChange={() => handleEducationChange(level)}
							/>
							<Label htmlFor={level} className="capitalize">
								{level === 'none' ? 'Any' : level.replace('-', ' ')}
							</Label>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
