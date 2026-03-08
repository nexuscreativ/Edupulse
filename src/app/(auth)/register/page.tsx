"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, ArrowLeft, Mail, Lock, Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate registration
        setTimeout(() => {
            window.location.href = "/dashboard"
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-secondary/30 flex flex-col items-center justify-center p-4">
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-foreground">EduPulse <span className="text-primary">AI</span></span>
                    </div>
                </div>

                <Card className="border-border/50 shadow-xl shadow-primary/5">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">Register Your School</CardTitle>
                        <CardDescription className="text-center">
                            Start your 30-day free trial. No credit card required.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="school-name">
                                    School Name
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="school-name"
                                        placeholder="St. Mary's Secondary School"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="admin-name">
                                    Admin Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="admin-name"
                                        placeholder="John Doe"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        placeholder="admin@school.edu.ng"
                                        type="email"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11" type="submit" disabled={isLoading}>
                                {isLoading ? "Creating account..." : "Create Account"}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-center text-sm text-muted-foreground w-full">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
