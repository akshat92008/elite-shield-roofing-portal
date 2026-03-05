import React, { useState, useEffect } from 'react';
import {
    BarChart3,
    Users,
    FileText,
    Camera,
    LayoutDashboard,
    Settings,
    Bell,
    Search,
    CheckCircle2,
    Clock,
    TrendingUp,
    MapPin,
    Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

export function AdminDashboard() {
    const [leads, setLeads] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/leads/u4');
                if (response.ok) {
                    const data = await response.json();
                    setLeads(data);
                }
            } catch (error) {
                console.error("Failed to fetch leads:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchLeads();
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D1A] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#0A0A14] p-6 flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-none">Elite Shield</h1>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Admin Portal</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" active />
                    <NavItem icon={<Users className="w-4 h-4" />} label="Leads Pipeline" />
                    <NavItem icon={<Camera className="w-4 h-4" />} label="Drone Photos" />
                    <NavItem icon={<FileText className="w-4 h-4" />} label="Document Vault" />
                    <NavItem icon={<BarChart3 className="w-4 h-4" />} label="Analytics" />
                </nav>

                <div className="mt-auto">
                    <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Header */}
                <header className="h-20 border-b border-white/5 bg-[#0D0D1A]/80 backdrop-blur-xl sticky top-0 z-30 px-8 flex items-center justify-between">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                            type="text"
                            placeholder="Search projects, leads, or documents..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0D0D1A]"></span>
                        </button>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden">
                            <img src="https://picsum.photos/seed/admin/100/100" alt="Admin" />
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {/* Welcome Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-black mb-2">Welcome Back, Admin</h2>
                        <p className="text-white/40">Here is what's happening with Elite Shield Roofing today.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-10">
                        <StatCard icon={<Users className="text-orange-500" />} label="Total Leads" value="124" change="+12.5%" />
                        <StatCard icon={<TrendingUp className="text-emerald-500" />} label="Avg. ROI" value="48.2%" change="+5.2%" />
                        <StatCard icon={<Clock className="text-blue-500" />} label="Active Projects" value="18" change="+2" />
                        <StatCard icon={<CheckCircle2 className="text-purple-500" />} label="Closed Deals" value="42" change="+8%" />
                    </div>

                    {/* Recent Leads Table */}
                    <section className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Real-Time Lead Pipeline</h3>
                            <button className="text-sm text-orange-500 font-semibold hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-white/30 text-xs uppercase tracking-widest border-b border-white/5">
                                        <th className="px-6 py-4 font-semibold">Property Address</th>
                                        <th className="px-6 py-4 font-semibold">Value</th>
                                        <th className="px-6 py-4 font-semibold">Phone</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                        <th className="px-6 py-4 font-semibold">Type</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {isLoading ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-white/20">Loading pipeline data...</td>
                                        </tr>
                                    ) : leads.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-white/20">No leads found in the pipeline.</td>
                                        </tr>
                                    ) : (
                                        leads.map((lead) => (
                                            <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                                            <MapPin className="w-4 h-4 text-orange-500" />
                                                        </div>
                                                        <span className="font-medium text-sm">{lead.property_address || lead.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-semibold">${(lead.estimated_value || 0).toLocaleString()}</td>
                                                <td className="px-6 py-4 text-sm text-white/60">{lead.phone || 'N/A'}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${lead.status === 'New' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                                                            'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                                        }`}>
                                                        {lead.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-xs text-white/40 font-mono">{lead.tenant_id}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}>
            {icon}
            {label}
        </button>
    );
}

function StatCard({ icon, label, value, change }: { icon: React.ReactNode, label: string, value: string, change: string }) {
    return (
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <span className={`text-xs font-bold ${change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {change}
                </span>
            </div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">{label}</p>
            <p className="text-2xl font-black">{value}</p>
        </div>
    );
}
