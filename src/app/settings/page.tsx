"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Save } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">School Configuration</h1>
                    <p className="text-muted-foreground">Manage system settings and preferences</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </div>

            <div className="grid gap-6">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>General Information</CardTitle>
                        <CardDescription>Basic school details displayed on reports and portal</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">School Name</label>
                                <Input defaultValue="EduPulse Model College" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Motto</label>
                                <Input defaultValue="Knowledge for Service" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <Input defaultValue="admin@edupulse.ng" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <Input defaultValue="+234 800 123 4567" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Academic Session */}
                <Card>
                    <CardHeader>
                        <CardTitle>Academic Session</CardTitle>
                        <CardDescription>Configure current term and session details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Current Session</label>
                                <Input defaultValue="2025/2026" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Current Term</label>
                                <Input defaultValue="2nd Term" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
