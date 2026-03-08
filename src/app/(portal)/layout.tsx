import { ReactNode } from "react"
import { Home, User, Bell, Menu } from "lucide-react"

export default function ParentLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Mobile Header */}
            <header className="bg-white border-b border-border p-4 flex justify-between items-center sticky top-0 z-50">
                <div className="font-bold text-primary text-lg flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center">E</span>
                    EduPulse
                </div>
                <div className="flex gap-4 text-muted-foreground">
                    <Bell className="w-6 h-6" />
                    <Menu className="w-6 h-6" />
                </div>
            </header>

            {/* Content */}
            <main className="flex-1 container mx-auto p-4 pb-20">
                {children}
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around p-3 z-50">
                <div className="flex flex-col items-center gap-1 text-primary">
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Profile</span>
                </div>
            </nav>
        </div>
    )
}
