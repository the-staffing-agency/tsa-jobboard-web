export interface CategoryInterface {
	name: string
	categoryId: number
	subCategory: {
		name: string
		subCategoryId: number
	}
}
