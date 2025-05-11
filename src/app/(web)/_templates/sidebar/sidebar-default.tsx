import { Sidebar, type SidebarProps } from './sidebar'

export function SidebarDefault({ children, ...props }: SidebarProps) {
	return <Sidebar {...props}>{children}</Sidebar>
}
