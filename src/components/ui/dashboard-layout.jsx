import * as React from "react"
import { cn } from "@/lib/utils"
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarItem, SidebarDivider } from "./sidebar"
import { Navbar, NavbarBrand, NavbarActions } from "./navbar"
import { Avatar, AvatarImage, AvatarFallback, getInitials } from "./avatar"
import { ThemeToggle } from "./theme-toggle"
import {
    LayoutDashboard,
    Users,
    Settings,
    BarChart3,
    FileText,
    Bell,
    LogOut,
    Menu
} from "lucide-react"
import { Button } from "./button"

const DashboardLayout = React.forwardRef(({
    className,
    children,
    user,
    logo,
    navigationItems,
    onLogout,
    ...props
}, ref) => {
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    const defaultNavItems = navigationItems || [
        { icon: <LayoutDashboard className="h-5 w-5" />, label: "Дашборд", href: "#", active: true },
        { icon: <BarChart3 className="h-5 w-5" />, label: "Аналитика", href: "#" },
        { icon: <Users className="h-5 w-5" />, label: "Пользователи", href: "#" },
        { icon: <FileText className="h-5 w-5" />, label: "Документы", href: "#" },
        { icon: <Settings className="h-5 w-5" />, label: "Настройки", href: "#" },
    ]

    return (
        <div ref={ref} className={cn("flex h-screen bg-background", className)} {...props}>
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Sidebar collapsed={sidebarCollapsed}>
                    <SidebarHeader className="justify-between">
                        {!sidebarCollapsed && (
                            <span className="font-inter font-bold text-lg text-primary">{logo || "myVibe"}</span>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        >
                            <Menu className="h-4 w-4" />
                        </Button>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup>
                            {defaultNavItems.map((item, index) => (
                                <SidebarItem
                                    key={index}
                                    icon={item.icon}
                                    active={item.active}
                                    collapsed={sidebarCollapsed}
                                    href={item.href}
                                >
                                    {item.label}
                                </SidebarItem>
                            ))}
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <SidebarDivider />
                        <SidebarItem
                            icon={<LogOut className="h-5 w-5" />}
                            collapsed={sidebarCollapsed}
                            onClick={onLogout}
                            className="text-destructive hover:text-destructive"
                        >
                            Выход
                        </SidebarItem>
                    </SidebarFooter>
                </Sidebar>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top navbar */}
                <Navbar variant="default" className="border-b">
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>

                    <NavbarBrand className="md:hidden">{logo || "myVibe"}</NavbarBrand>

                    <NavbarActions className="ml-auto">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Avatar size="sm">
                            {user?.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
                            <AvatarFallback>{getInitials(user?.name || "User")}</AvatarFallback>
                        </Avatar>
                    </NavbarActions>
                </Navbar>

                {/* Page content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
})
DashboardLayout.displayName = "DashboardLayout"

export { DashboardLayout }
