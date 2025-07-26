'use client'
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { usePortalFilters } from '@/hooks/use-portal-filters'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { CATEGORY_PARAM_NAME } from '../../forms'
import { Skeleton } from '../../ui/skeleton'
import { CategorySphereButton } from './category-sphere-button'

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

	const shouldUseCarousel = categoriesWithAll.length > 8

	const categoryContent = isLoading
		? Array.from({ length: 8 }).map(() => {
				return (
					<div
						className="flex w-16 flex-col items-center gap-2"
						key={Math.random()}
					>
						<Skeleton className="size-14 animate-pulse rounded-full bg-foreground/20" />
						<Skeleton className="h-4 w-12 animate-pulse rounded bg-foreground/20" />
					</div>
				)
			})
		: categoriesWithAll.map((category) => (
				<CategorySphereButton
					key={category.value}
					label={category.label}
					value={category.value}
					isActive={currentCategoryValue === String(category.value)}
					onClick={() => handleOnClickCategory(String(category.value))}
				/>
			))

	return (
		<div>
			{shouldUseCarousel ? (
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent className="gap-4 lg:gap-6">
						{categoryContent}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			) : (
				<div className="flex w-full gap-4">{categoryContent}</div>
			)}
		</div>
	)
}
