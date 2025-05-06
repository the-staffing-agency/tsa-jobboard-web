import { Header } from "@/components/header";

export default function WebLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
