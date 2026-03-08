"use client"

import { Users, CreditCard, CalendarCheck, type LucideIcon } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { name: 'Mon', attendance: 450 },
    { name: 'Tue', attendance: 455 },
    { name: 'Wed', attendance: 448 },
    { name: 'Thu', attendance: 460 },
    { name: 'Fri', attendance: 462 },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8 bg-white min-h-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-black">Dashboard</h1>
                    <p className="text-neutral-500 mt-1">Welcome to your school overview.</p>
                </div>
                <div className="text-sm font-medium text-neutral-400">
                    Terms 2024/2025 • Week 12
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Total Students"
                    value="1,240"
                    icon={Users}
                    description="+12% from last term"
                />
                <MetricCard
                    title="Attendance Today"
                    value="94%"
                    icon={CalendarCheck}
                    description="462 check-ins"
                />
                <MetricCard
                    title="Fees Collected"
                    value="₦4.2M"
                    icon={CreditCard}
                    description="Last 30 days"
                />
                <MetricCard
                    title="Active Staff"
                    value="45"
                    icon={Users}
                    description="Teachers & Admin"
                />
            </div>

            {/* Charts Area */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 bg-white rounded-2xl border-2 border-neutral-100 shadow-sm">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-black">Weekly Attendance</h3>
                        <p className="text-sm text-neutral-500">Student check-ins overview</p>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: '#737373' }} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} tick={{ fill: '#737373' }} />
                                <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="attendance" fill="#b91c1c" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-2xl border-2 border-neutral-100 shadow-sm">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-black">Fee Collection Trends</h3>
                        <p className="text-sm text-neutral-500">Monthly revenue inflow</p>
                    </div>
                    <div className="h-[300px] flex items-center justify-center text-neutral-400 bg-neutral-50 rounded-xl border border-dashed border-neutral-200">
                        Placeholder for Revenue Chart
                    </div>
                </div>
            </div>
        </div>
    )
}

interface MetricCardProps {
    title: string
    value: string
    icon: LucideIcon
    description: string
}

function MetricCard({ title, value, icon: Icon, description }: MetricCardProps) {
    return (
        <div className="p-8 bg-white rounded-2xl border-2 border-neutral-100 shadow-sm hover:border-black transition-all">
            <div className="flex items-center justify-between space-y-0 pb-4">
                <h3 className="tracking-tight text-sm font-bold text-neutral-500 uppercase">{title}</h3>
                <div className="p-2 bg-neutral-50 rounded-lg">
                    <Icon className="h-5 w-5 text-black" />
                </div>
            </div>
            <div className="pt-2">
                <div className="text-3xl font-black text-black">{value}</div>
                <p className="text-xs font-semibold text-primary mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {description}
                </p>
            </div>
        </div>
    )
}
