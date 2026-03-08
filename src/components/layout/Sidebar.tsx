"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {

  CreditCard,
  CalendarCheck,
  FileText,
  LayoutDashboard,
  Settings,
  Menu,
  X,
  School,
  GraduationCap,
  Baby,
  MessageSquare
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', href: '/students', icon: GraduationCap },
  { name: 'Fees & Finance', href: '/fees', icon: CreditCard },
  { name: 'Attendance', href: '/attendance', icon: CalendarCheck },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Communication', href: '/communication', icon: MessageSquare },
  { name: 'Parent View (Demo)', href: '/portal', icon: Baby },
  { name: 'School Config', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-border transform transition-transform duration-200 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Brand Header */}
        <div className="flex items-center h-16 px-6 border-b border-border">
          <School className="w-8 h-8 text-primary mr-2" />
          <span className="text-xl font-bold text-primary">EduPulse AI</span>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Stub */}
        <div className="absolute bottom-0 w-full p-4 border-t border-border">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">School Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
