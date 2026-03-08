"use client"

import { useState } from "react"
import { Search, MoreHorizontal, UserPlus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
// import students from "@/data/mocks/students.json" // Direct import might need resolveJsonModule or just use require/fetch. Let's direct import for PoC.

// Inline mock data to avoid module resolution issues during rapid PoC if config isn't perfect
interface Student {
    id: string
    firstName: string
    lastName: string
    class: string
    guardian: string
    contact: string
    status: string
    balance: number
}

const students: Student[] = [
    {
        id: "STU-001",
        firstName: "Chioma",
        lastName: "Adebayo",
        class: "JSS 2",
        guardian: "Mrs. Adebayo",
        contact: "08012345678",
        status: "Active",
        balance: 0
    },
    {
        id: "STU-002",
        firstName: "Musa",
        lastName: "Ibrahim",
        class: "SS 1",
        guardian: "Mr. Ibrahim",
        contact: "08087654321",
        status: "Active",
        balance: 45000
    },
    {
        id: "STU-003",
        firstName: "Emeka",
        lastName: "Okonkwo",
        class: "JSS 1",
        guardian: "Dr. Okonkwo",
        contact: "09011223344",
        "status": "Inactive",
        balance: 120000
    },
    {
        id: "STU-004",
        firstName: "Aisha",
        lastName: "Bello",
        class: "SS 2",
        guardian: "Hajia Bello",
        contact: "07055667788",
        status: "Active",
        balance: 0
    }
]

export default function StudentsPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredStudents = students.filter(student =>
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-8 bg-white min-h-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-black">Students</h1>
                    <p className="text-neutral-500 mt-1">Manage student records and directory</p>
                </div>
                <Button className="bg-black hover:bg-neutral-800 text-white font-bold px-6 h-12 rounded-xl transition-all shadow-lg shadow-black/10">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add Student
                </Button>
            </div>

            {/* Filters & Search */}
            {/* Filters & Search */}
            <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded-2xl border-2 border-neutral-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                    <Input
                        placeholder="Search students..."
                        className="pl-10 h-11 border-neutral-200 bg-white rounded-xl focus:ring-2 focus:ring-black focus:border-black"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-neutral-200 hover:bg-white hover:border-black transition-all">
                    <Filter className="w-5 h-5 text-neutral-600" />
                </Button>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="bg-white rounded-2xl border-2 border-neutral-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-neutral-500 font-black uppercase bg-neutral-50 border-b-2 border-neutral-100">
                            <tr>
                                <th className="px-6 py-4 tracking-wider">Student ID</th>
                                <th className="px-6 py-4 tracking-wider">Name</th>
                                <th className="px-6 py-4 tracking-wider">Class</th>
                                <th className="px-6 py-4 tracking-wider">Guardian</th>
                                <th className="px-6 py-4 tracking-wider">Status</th>
                                <th className="px-6 py-4 tracking-wider">Fees Owed</th>
                                <th className="px-6 py-4 tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b border-border hover:bg-muted/10 transition-colors">
                                    <td className="px-6 py-4 font-medium text-foreground">{student.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                                {student.firstName[0]}{student.lastName[0]}
                                            </div>
                                            <div>
                                                {student.firstName} {student.lastName}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{student.class}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-foreground">{student.guardian}</div>
                                        <div className="text-xs text-muted-foreground">{student.contact}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-xs font-bold border-2",
                                            student.status === "Active"
                                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                                : "bg-rose-50 text-rose-700 border-rose-100"
                                        )}>
                                            {student.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-foreground">
                                        {student.balance > 0 ? (
                                            <span className="text-destructive">₦{student.balance.toLocaleString()}</span>
                                        ) : (
                                            <span className="text-primary">Paid</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredStudents.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground">
                        No students found matching &quot;{searchTerm}&quot;
                    </div>
                )}
            </div>
        </div>
    )
}
