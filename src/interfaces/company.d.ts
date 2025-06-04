export interface CompanyInterface {
	name: string
	status: {
		name: string
		active: boolean
		statusId: number
	}
	companyId: number
}
