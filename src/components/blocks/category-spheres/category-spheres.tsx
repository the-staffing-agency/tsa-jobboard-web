'use client'

import { CATEGORY_PARAM_NAME } from '@/components/forms'
import { Container } from '@/components/ui/container'
import { usePortalFilters } from '@/hooks/use-portal-filters'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { CategorySphereButton } from './category-sphere-button'
import { CategorySphereSkeleton } from './category-sphere-skeleton'

export function CategorySpheres() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [, startTransition] = useTransition()
	const [currentCategoryValue, setCurrentCategoryValue] =
		useState<string>('all')

	const params = new URLSearchParams(searchParams)

	const { categories, isLoading } = usePortalFilters()

	const categoriesWithAll = [{ value: 'all', label: 'All' }, ...categories]

	useEffect(() => {
		const categoryFromParams = searchParams.get(CATEGORY_PARAM_NAME) || 'all'
		setCurrentCategoryValue(categoryFromParams)
	}, [searchParams])

	const updateParams = ({
		name,
		values,
	}: { name: string; values: string | string[] }) => {
		const valueArray = Array.isArray(values) ? values : [values]
		const filteredValues = valueArray.filter(Boolean)

		if (filteredValues.length === 0) {
			params.delete(name)
			return
		}

		const paramValue = Array.isArray(values)
			? filteredValues.join(',')
			: filteredValues[0]
		params.set(name, paramValue)
	}

	function handleOnClickCategory(value: string) {
		setCurrentCategoryValue(value)

		if (value === 'all') {
			params.delete(CATEGORY_PARAM_NAME)
			params.delete('page')

			startTransition(() => {
				router.push(`/search/jobs?${params.toString()}`, {
					scroll: false,
				})
			})

			return
		}

		updateParams({ name: CATEGORY_PARAM_NAME, values: value })

		params.delete('page')
		params.append('page', '1')

		startTransition(() => {
			router.push(`/search/jobs?${params.toString()}`, {
				scroll: false,
			})
		})
	}

	return (
		<Container className="flex overflow-y-hidden overflow-x-scroll pt-4 lg:justify-center lg:overflow-hidden lg:pt-6">
			<div className="flex gap-4 lg:gap-8">
				{isLoading
					? Array.from({ length: 8 }).map(() => (
							<CategorySphereSkeleton key={Math.random()} />
						))
					: categoriesWithAll.map((category) => (
							<CategorySphereButton
								key={category.value}
								label={category.label}
								value={category.value}
								isActive={currentCategoryValue === String(category.value)}
								onClick={() => handleOnClickCategory(String(category.value))}
							/>
						))}
			</div>
		</Container>
	)
}
