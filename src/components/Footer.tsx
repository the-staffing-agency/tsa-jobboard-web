import { ChefHat, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Brand Section */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<ChefHat className="h-6 w-6 text-primary" />
							<span className="font-bold text-xl">Culinary Jobs</span>
						</Link>
						<p className="text-muted-foreground">
							Connecting culinary professionals with their dream jobs since
							2024.
						</p>
						<div className="flex space-x-4">
							{/* <a href="#" className="text-muted-foreground hover:text-primary">
								<Facebook className="h-5 w-5" />
							</a>
							<a href="#" className="text-muted-foreground hover:text-primary">
								<Twitter className="h-5 w-5" />
							</a>
							<a href="#" className="text-muted-foreground hover:text-primary">
								<Instagram className="h-5 w-5" />
							</a>
							<a href="#" className="text-muted-foreground hover:text-primary">
								<Linkedin className="h-5 w-5" />
							</a> */}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 font-semibold">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-primary"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/search"
									className="text-muted-foreground hover:text-primary"
								>
									Browse Jobs
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-primary"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Job Categories */}
					<div>
						<h3 className="mb-4 font-semibold">Job Categories</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/search?category=chef"
									className="text-muted-foreground hover:text-primary"
								>
									Chef Positions
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=management"
									className="text-muted-foreground hover:text-primary"
								>
									Management
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=service"
									className="text-muted-foreground hover:text-primary"
								>
									Service Staff
								</Link>
							</li>
							<li>
								<Link
									href="/search?category=kitchen"
									className="text-muted-foreground hover:text-primary"
								>
									Kitchen Staff
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="mb-4 font-semibold">Contact Us</h3>
						<ul className="space-y-2 text-muted-foreground">
							<li>123 Culinary Street</li>
							<li>Food City, FC 12345</li>
							<li>Email: info@culinaryjobs.com</li>
							<li>Phone: (123) 456-7890</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 border-t pt-8 text-center text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} Culinary Jobs. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
