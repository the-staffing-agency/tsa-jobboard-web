'use client'

import { createContext, useContext, useState } from 'react'

interface NavToggleContextProps {
	isOpen: boolean
	handleToggle: () => void
	handleCloseNav: () => void
}

const NavToggleContext = createContext({} as NavToggleContextProps)

export function NavToggleProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	function handleToggle() {
		setIsOpen((state) => !state)
	}

	function handleCloseNav() {
		setIsOpen(false)
	}

	return (
		<NavToggleContext.Provider value={{ isOpen, handleToggle, handleCloseNav }}>
			{children}
		</NavToggleContext.Provider>
	)
}

export const useNavToggle = () => useContext(NavToggleContext)
