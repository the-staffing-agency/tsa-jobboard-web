"use client";

import { useNavToggle } from "@/contexts/nav-toggle-context";
import { MenuIcon, X } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";

export function MenuHamburger() {
	const { isOpen, handleToggle } = useNavToggle();

	return (
		<Button
			className="lg:hidden"
			variant={"ghost"}
			size={"icon"}
			onClick={handleToggle}
		>
			{isOpen ? (
				<X className="size-7 text-slate-50" />
			) : (
				<MenuIcon className="size-7 text-slate-50" />
			)}
		</Button>
	);
}
