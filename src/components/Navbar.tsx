"use client";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-background border-b">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Desktop Navigation */}

					{/* Mobile menu button */}
					<button
						className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden py-4 space-y-4">
						<Link
							href="/"
							className="block text-foreground hover:text-primary transition-colors"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/search"
							className="block text-foreground hover:text-primary transition-colors"
							onClick={() => setIsOpen(false)}
						>
							Browse Jobs
						</Link>
						<Link
							href="/about"
							className="block text-foreground hover:text-primary transition-colors"
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
						<Link
							href="/contact"
							className="block text-foreground hover:text-primary transition-colors"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
						<Button asChild className="w-full">
							<Link href="/post-job" onClick={() => setIsOpen(false)}>
								Post a Job
							</Link>
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
}
