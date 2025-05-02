import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Culinary Jobs - Find Your Next Culinary Position",
	description:
		"Browse and apply for culinary and hospitality jobs. Find your dream job in the food industry.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
