"use client"

import { FileText, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const reports = [
    { title: "Student Report Cards", desc: "Term 1, 2024/2025 Session", type: "Academic" },
    { title: "Fee Collection Report", desc: "Financial summary for Jan 2026", type: "Financial" },
    { title: "Staff Attendance Log", desc: "Monthly staff punctuality report", type: "HR" },
    { title: "Class Performance Analysis", desc: "Subject-wise performance breakdown", type: "Academic" },
]

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Reports</h1>
                <p className="text-muted-foreground">Generate and download school reports</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {reports.map((report, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full uppercase font-medium">
                                    {report.type}
                                </span>
                            </div>
                            <CardTitle className="mt-4">{report.title}</CardTitle>
                            <CardDescription>{report.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex gap-2">
                            <Button variant="outline" className="w-full">
                                <Printer className="w-4 h-4 mr-2" />
                                Print
                            </Button>
                            <Button className="w-full bg-primary hover:bg-primary/90">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
