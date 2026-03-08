"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Download, Plus } from "lucide-react"

const feeStructure = [
    {
        id: "FEE-T1-2025",
        title: "1st Term Tuition 2024/2025",
        amount: 150000,
        dueDate: "2024-09-15"
    },
    {
        id: "FEE-BUS-2025",
        title: "School Bus Service (Term 1)",
        amount: 45000,
        dueDate: "2024-09-15"
    },
    {
        id: "FEE-UNI-2025",
        title: "Uniform & Books",
        amount: 35000,
        dueDate: "2024-09-01"
    }
]

const recentTransactions = [
    { id: "TRX-8823", student: "Musa Ibrahim", amount: 45000, date: "2024-02-08", status: "Success", type: "Bus Fee" },
    { id: "TRX-8822", student: "Chioma Adebayo", amount: 150000, date: "2024-02-07", status: "Success", type: "Tuition" },
    { id: "TRX-8821", student: "Emeka Okonkwo", amount: 35000, date: "2024-02-06", status: "Failed", type: "Uniform" },
]

export default function FeesPage() {
    return (
        <div className="space-y-8 bg-white min-h-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-black">Fees & Finance</h1>
                    <p className="text-neutral-500 mt-1">Manage school fees, invoices, and payments</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-12 border-2 border-neutral-200 font-bold px-6 rounded-xl hover:bg-neutral-50 transition-all">
                        <Download className="w-5 h-5 mr-2" />
                        Export Report
                    </Button>
                    <Button className="bg-black hover:bg-neutral-800 text-white font-bold h-12 px-8 rounded-xl transition-all shadow-lg shadow-black/10">
                        <Plus className="w-5 h-5 mr-2" />
                        Create Invoice
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Outstanding Balance Widget */}
                <div className="bg-rose-50 border-2 border-rose-100 p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-16 h-16 text-rose-900" />
                    </div>
                    <h3 className="text-rose-900 font-black text-xs uppercase tracking-widest relative z-10">Outstanding Fees</h3>
                    <p className="text-4xl font-black text-rose-950 mt-4 relative z-10">₦1,250,500</p>
                    <div className="mt-4 flex items-center gap-2 relative z-10">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        <p className="text-sm font-bold text-rose-700">45 Students owing</p>
                    </div>
                </div>
                {/* Collected Widget */}
                <div className="bg-emerald-50 border-2 border-emerald-100 p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-16 h-16 text-emerald-900" />
                    </div>
                    <h3 className="text-emerald-900 font-black text-xs uppercase tracking-widest relative z-10">Collected (This Term)</h3>
                    <p className="text-4xl font-black text-emerald-950 mt-4 relative z-10">₦12,450,000</p>
                    <div className="mt-4 flex items-center gap-2 relative z-10">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <p className="text-sm font-bold text-emerald-700">85% Collection Rate</p>
                    </div>
                </div>
                {/* Net Revenue */}
                <div className="bg-neutral-50 border-2 border-neutral-100 p-8 rounded-2xl relative overflow-hidden group">
                    <h3 className="text-neutral-500 font-black text-xs uppercase tracking-widest relative z-10">Expenses (Est.)</h3>
                    <p className="text-4xl font-black text-black mt-4 relative z-10">₦4,200,000</p>
                    <p className="text-sm font-bold text-neutral-400 mt-4 relative z-10">Salaries & Maintenance</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Fee Structure List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-black">Current Fee Structure</h2>
                    <div className="bg-white border-2 border-neutral-100 rounded-2xl shadow-sm overflow-hidden">
                        {feeStructure.map((fee, i) => (
                            <div key={fee.id} className={`p-6 flex justify-between items-center transition-colors hover:bg-neutral-50 ${i !== feeStructure.length - 1 ? 'border-b-2 border-neutral-50' : ''}`}>
                                <div>
                                    <p className="font-bold text-black text-lg">{fee.title}</p>
                                    <p className="text-sm font-medium text-neutral-400">Due: {fee.dueDate}</p>
                                </div>
                                <div className="text-xl font-black text-black">₦{fee.amount.toLocaleString()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-black">Recent Transactions</h2>
                    <div className="bg-white border-2 border-neutral-100 rounded-2xl shadow-sm overflow-hidden">
                        {recentTransactions.map((trx, i) => (
                            <div key={trx.id} className={`p-6 flex justify-between items-center transition-colors hover:bg-neutral-50 ${i !== recentTransactions.length - 1 ? 'border-b-2 border-neutral-50' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform hover:scale-105 ${trx.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-black">{trx.student}</p>
                                        <p className="text-sm font-medium text-neutral-400 uppercase tracking-tighter">{trx.type} • {trx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-black">₦{trx.amount.toLocaleString()}</p>
                                    <p className={`text-xs font-black uppercase tracking-widest ${trx.status === 'Success' ? 'text-emerald-500' : 'text-rose-500'}`}>{trx.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
