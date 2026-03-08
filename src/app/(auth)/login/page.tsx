"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, ArrowLeft, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const formData = new FormData(e.currentTarget)
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            await signIn("credentials", {
                email,
                password,
                redirectTo: "/dashboard",
            })
        } catch (error) {
            console.error("Login failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDemoLogin = async (email: string) => {
        setIsLoading(true)
        try {
            await signIn("credentials", {
                email,
                password: "password123", // Any password works for demo
                redirectTo: "/dashboard",
            })
        } catch (error) {
            console.error("Demo login failed:", error)
        } finally {
            setIsLoading(false)
        }
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
                        <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to access your school dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
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
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                        Password
                                    </label>
                                    <Link href="#" className="text-xs text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
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
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-muted-foreground">Demo Accounts</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <Button variant="outline" className="text-xs" onClick={() => handleDemoLogin("admin@school.edu.ng")} disabled={isLoading}>
                                Admin Demo
                            </Button>
                            <Button variant="outline" className="text-xs" onClick={() => handleDemoLogin("parent@example.com")} disabled={isLoading}>
                                Parent Demo
                            </Button>
                        </div>
                        <p className="text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-primary font-medium hover:underline">
                                Register School
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
