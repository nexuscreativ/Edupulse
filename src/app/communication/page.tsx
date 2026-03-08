"use client"

import { useState } from "react"
import { Search, PenSquare, MessageSquare, Smartphone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const messages = [
    { id: 1, sender: "Mrs. Adebayo", subject: "Chioma's Absence", preview: "Good morning, Chioma will not be in school today due to...", time: "10:30 AM", type: "whatsapp", read: false },
    { id: 2, sender: "Mr. Ibrahim", subject: "Fee Payment", preview: "I have just transferred the school fees via...", time: "Yesterday", type: "email", read: true },
    { id: 3, sender: "System", subject: "Attendance Alert", preview: "Your child Emeka was marked late today.", time: "Yesterday", type: "sms", read: true },
]

export default function CommunicationPage() {
    const [activeTab, setActiveTab] = useState("all")

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Messages</h1>
                    <p className="text-muted-foreground">Manage communications with parents and staff</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <PenSquare className="w-4 h-4 mr-2" />
                    Compose Message
                </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
                {/* Sidebar / List */}
                <Card className="lg:col-span-1 flex flex-col h-full">
                    <div className="p-4 border-b border-border space-y-4">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search messages..." className="pl-8" />
                        </div>
                        <div className="flex gap-2">
                            {['all', 'whatsapp', 'sms'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setActiveTab(type)}
                                    className={cn(
                                        "px-3 py-1 rounded-full text-xs font-medium capitalize border transition-colors",
                                        activeTab === type
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-background text-muted-foreground border-border hover:bg-muted"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {messages
                            .filter(m => activeTab === 'all' || m.type === activeTab)
                            .map(msg => (
                                <div key={msg.id} className={cn("p-4 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors", !msg.read && "bg-blue-50/50")}>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={cn("font-medium text-sm", !msg.read && "font-bold text-foreground")}>{msg.sender}</span>
                                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                                    </div>
                                    <div className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-2">
                                        {msg.type === 'whatsapp' && <MessageSquare className="w-3 h-3 text-green-600" />}
                                        {msg.type === 'sms' && <Smartphone className="w-3 h-3 text-blue-600" />}
                                        {msg.type === 'email' && <Mail className="w-3 h-3 text-orange-600" />}
                                        {msg.subject}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-1">{msg.preview}</p>
                                </div>
                            ))}
                    </div>
                </Card>

                {/* Message Content (Placeholder) */}
                <Card className="lg:col-span-3 flex flex-col items-center justify-center text-muted-foreground h-full bg-muted/5">
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="font-medium text-foreground">Select a message to view</h3>
                        <p className="text-sm">Choose a conversation from the list to see details.</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
