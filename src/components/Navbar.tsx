'use client'
import { useState } from 'react'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="border-b bg-background">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Desktop Navigation */}
				</div>
			</div>
		</nav>
	)
}
