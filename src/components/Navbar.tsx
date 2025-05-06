"use client";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-background border-b">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Desktop Navigation */}
				</div>
			</div>
		</nav>
	);
}
