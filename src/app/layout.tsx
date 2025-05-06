import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { metadataConfig } from "@/data/website/metadata";

const inter = Inter({ subsets: ["latin"] });

const { title, description } = metadataConfig;

export const metadata: Metadata = {
	title,
	description,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
