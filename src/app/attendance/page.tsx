"use client"

import { CheckCircle2, XCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock daily data for a month view
const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.1 ? 'present' : Math.random() > 0.5 ? 'absent' : 'late'
}))

export default function AttendancePage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Attendance</h1>
                    <p className="text-muted-foreground">Track student and staff daily attendance</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Mark Today&apos;s Attendance
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <p className="text-xs text-muted-foreground">462/490 students</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Absent</CardTitle>
                        <XCircle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4%</div>
                        <p className="text-xs text-muted-foreground">20 students</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Late Arrival</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2%</div>
                        <p className="text-xs text-muted-foreground">8 students</p>
                    </CardContent>
                </Card>
            </div>

            {/* Visual Calendar/Heatmap */}
            <Card>
                <CardHeader>
                    <CardTitle>Attendance Overview (February 2026)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-7 gap-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                                {day}
                            </div>
                        ))}
                        {/* Offset for start of month (mock) */}
                        <div className="col-span-2"></div>

                        {days.map((d) => (
                            <div
                                key={d.day}
                                className={`
                  aspect-square rounded-md flex items-center justify-center text-sm font-medium border
                  ${d.status === 'present' ? 'bg-green-100 border-green-200 text-green-700' : ''}
                  ${d.status === 'absent' ? 'bg-red-100 border-red-200 text-red-700' : ''}
                  ${d.status === 'late' ? 'bg-orange-100 border-orange-200 text-orange-700' : ''}
                `}
                            >
                                {d.day}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-6 text-sm justify-center">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div> Present</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div> Absent</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-100 border border-orange-200 rounded"></div> Late</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
