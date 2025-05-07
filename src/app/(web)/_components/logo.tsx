import { ChefHat } from "lucide-react";
import Link from "next/link";

export function Logo() {
	return (
		<Link href="/" className="flex items-center space-x-2 text-white/90">
			<ChefHat className="h-6 w-6 text-white/90" />
			<span className="font-bold text-xl">Culinary Jobs</span>
		</Link>
	);
}
