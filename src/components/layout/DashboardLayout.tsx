import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-white">
            <Sidebar />
            <main className="md:pl-64 min-h-screen">
                <div className="container mx-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
