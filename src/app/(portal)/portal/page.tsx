"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, AlertCircle, CreditCard } from "lucide-react"

export default function ParentPortalPage() {
    return (
        <div className="space-y-6 max-w-md mx-auto">
            {/* Child Profile Card */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-lg shadow-primary/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                        CA
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Chioma Adebayo</h2>
                        <p className="text-primary-foreground/80 text-sm">Class: JSS 2 • ID: STU-001</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                        <p className="text-xs opacity-70">Attendance</p>
                        <p className="text-lg font-bold">95%</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                        <p className="text-xs opacity-70">Avg. Score</p>
                        <p className="text-lg font-bold">78.5%</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-primary/20 bg-white hover:bg-primary/5">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium">Pay Fees</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-primary/20 bg-white hover:bg-primary/5">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium">Homework</span>
                </Button>
            </div>

            {/* Notices / Alerts */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground">Recent Updates</h3>

                <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-4 pt-4">
                        <div className="flex gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-sm">Fee Reminder</h4>
                                <p className="text-xs text-muted-foreground mt-1">Tuition fee for 2nd Term is due in 5 days. Please ensure payment to avoid service interruption.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 pt-4">
                        <div className="flex gap-3">
                            <BookOpen className="w-5 h-5 text-primary shrink-0" />
                            <div>
                                <h4 className="font-semibold text-sm">New Assignment Posted</h4>
                                <p className="text-xs text-muted-foreground mt-1">Integrated Science: &quot;Solar System Model&quot; project due on Friday.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
