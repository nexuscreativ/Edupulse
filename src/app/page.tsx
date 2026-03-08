"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Brain, TrendingUp, Users, ArrowRight, Menu, Shield, Sparkles, BarChart3, BookOpen, Award, Target, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Navigation */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-white/10 fixed w-full bg-black/50 backdrop-blur-xl z-50 shadow-sm transition-all">
        <Link className="flex items-center gap-3" href="#">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 transform hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-black"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-white leading-none">
              EduPulse
            </span>
            <span className="text-xs font-semibold text-gray-300 tracking-wider">SMART SCHOOL OS</span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-8 items-center">
          <Link className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group" href="#features">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group" href="#solutions">
            Solutions
          </Link>
          <Link className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group" href="#testimonials">
            Testimonials
          </Link>
          <Link href="/login">
            <Button variant="ghost" className="font-semibold text-gray-300 hover:text-white hover:bg-white/10">Login</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all text-white border-0">
              Try Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </nav>
        <Button className="ml-4 md:hidden text-white hover:bg-white/10" variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section - Bold Dark Theme */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  AI-Powered School Management for Nigeria
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
              >
                Transform Your School with{" "}
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Intelligent Automation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              >
                The complete operating system for modern Nigerian schools. Automate attendance, streamline finances, and engage parents—all powered by AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105">
                    <Brain className="mr-2 w-5 h-5" />
                    Launch Demo Dashboard
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-2 hover:bg-secondary">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="font-semibold">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="font-semibold">50+ Schools Trust Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-semibold">98% Uptime SLA</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Bold Red Theme */}
        <section className="w-full py-16 bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Schools Onboarded", icon: GraduationCap },
                { value: "15K+", label: "Active Students", icon: Users },
                { value: "98%", label: "Attendance Rate", icon: TrendingUp },
                { value: "₦2B+", label: "Fees Processed", icon: BarChart3 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <div className="text-4xl md:text-5xl font-black">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Card-Based Premium Design */}
        <section id="features" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-black">
                Everything Your School Needs
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Powerful features designed specifically for Nigerian educational institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Smart Attendance",
                  description: "Automated tracking with real-time parent notifications via SMS and WhatsApp",
                  color: "from-primary to-accent"
                },
                {
                  icon: BarChart3,
                  title: "Financial Intelligence",
                  description: "Complete fee management with automated reminders and detailed analytics",
                  color: "from-black to-neutral-800"
                },
                {
                  icon: Brain,
                  title: "AI-Powered Insights",
                  description: "Predictive analytics to identify at-risk students and optimize performance",
                  color: "from-accent to-primary"
                },
                {
                  icon: Shield,
                  title: "Parent Portal",
                  description: "Mobile-first interface for parents to track progress and communicate",
                  color: "from-success to-emerald-600"
                },
                {
                  icon: BookOpen,
                  title: "Academic Management",
                  description: "Complete gradebook, report cards, and curriculum planning tools",
                  color: "from-neutral-800 to-black"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics",
                  description: "Real-time dashboards and reports for data-driven decision making",
                  color: "from-primary to-accent"
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative p-8 rounded-2xl bg-white border-2 border-neutral-200 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Timeline Design */}
        <section id="solutions" className="w-full py-20 md:py-32 bg-neutral-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-black">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Simple onboarding process designed for busy school administrators
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: "01", title: "Sign Up & Setup", description: "Create your account and configure your school profile in under 5 minutes" },
                { step: "02", title: "Import Your Data", description: "Easily upload student records, staff data, and fee structures via CSV or manual entry" },
                { step: "03", title: "Go Live", description: "Start managing your school with AI-powered insights from day one" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  {index !== 2 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
                  )}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-lg text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Premium Card Design */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-black">
                Trusted by Leading Schools
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                See what educators across Nigeria are saying about EduPulse AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "EduPulse AI has completely transformed how we manage our school. Fee collection is now seamless, and parents love the real-time updates.",
                  author: "Mrs. Adebayo",
                  role: "Principal, Grace Academy Lagos",
                  rating: 5
                },
                {
                  quote: "The attendance tracking feature alone saved us 10 hours per week. The AI insights help us identify at-risk students early.",
                  author: "Mr. Okonkwo",
                  role: "Admin, Bright Future School Abuja",
                  rating: 5
                },
                {
                  quote: "Finally, a school management system built for Nigerian schools. The WhatsApp integration is a game-changer for parent communication.",
                  author: "Dr. Eze",
                  role: "Director, Excellence Schools PH",
                  rating: 5
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-transparent border-2 border-neutral-200 hover:border-black transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-neutral-900 mb-6 italic leading-relaxed font-medium">"{testimonial.quote}"</p>
                  <div className="border-t border-neutral-200 pt-4">
                    <div className="font-bold text-black">{testimonial.author}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Gradient */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-black via-neutral-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">Ready to Transform Your School?</h2>
              <p className="text-xl text-gray-300">
                Join the growing network of forward-thinking Nigerian schools using EduPulse AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 text-white font-bold text-base transition-all">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-2 border-gray-700 text-white hover:bg-white/10 font-semibold text-base">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="w-full border-t border-white/10 bg-neutral-950">
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white">EduPulse</span>
                  <span className="text-xs font-semibold text-gray-400">SMART SCHOOL OS</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering Nigerian schools with AI-driven insights and intelligent automation.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-400">
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Integrations", "API"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h3>
              <p className="text-sm text-gray-400">
                Get the latest updates and insights delivered to your inbox.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 EduPulse AI. All rights reserved.</p>
            <nav className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link key={item} className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
