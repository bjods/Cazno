"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, FileText, TrendingUp, Clock } from "lucide-react";

interface DashboardData {
  totalClients: number;
  activeAutomations: number;
  totalSubmissions: number;
  weeklyHoursSaved: number;
  recentSubmissions: Array<{
    id: string;
    name: string;
    email: string;
    company: string;
    created_at: string;
  }>;
  clientGrowth: Array<{
    month: string;
    clients: number;
  }>;
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData>({
    totalClients: 0,
    activeAutomations: 0,
    totalSubmissions: 0,
    weeklyHoursSaved: 0,
    recentSubmissions: [],
    clientGrowth: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const init = async () => {
      await checkAuth();
      await fetchDashboardData();
    };
    init();
  }, []);

  const checkAuth = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    const { data: userData } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (userData?.role !== "admin") {
      router.push("/dashboard/client");
    }
  }, [router, supabase]);

  const fetchDashboardData = useCallback(async () => {
    try {
      // Fetch total clients
      const { count: clientCount } = await supabase
        .from("clients")
        .select("*", { count: "exact", head: true });

      // Fetch active automations
      const { count: automationCount } = await supabase
        .from("automations")
        .select("*", { count: "exact", head: true })
        .eq("status", "active");

      // Fetch form submissions
      const { data: submissions, count: submissionCount } = await supabase
        .from("form_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      // Mock data for demo
      const mockClientGrowth = [
        { month: "Jan", clients: 45 },
        { month: "Feb", clients: 52 },
        { month: "Mar", clients: 58 },
        { month: "Apr", clients: 65 },
        { month: "May", clients: 72 },
        { month: "Jun", clients: 78 },
      ];

      setData({
        totalClients: clientCount || 0,
        activeAutomations: automationCount || 0,
        totalSubmissions: submissionCount || 0,
        weeklyHoursSaved: 35 * (clientCount || 0), // 35 hours per client average
        recentSubmissions: submissions || [],
        clientGrowth: mockClientGrowth,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="container mx-auto max-w-7xl">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <Users className="text-muted-foreground" size={24} />
                <span className="text-sm text-green-500">+12%</span>
              </div>
              <h3 className="text-2xl font-bold">{data.totalClients}</h3>
              <p className="text-muted-foreground">Total Clients</p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="text-muted-foreground" size={24} />
                <span className="text-sm text-green-500">Active</span>
              </div>
              <h3 className="text-2xl font-bold">{data.activeAutomations}</h3>
              <p className="text-muted-foreground">Active Automations</p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <FileText className="text-muted-foreground" size={24} />
                <span className="text-sm text-blue-500">New</span>
              </div>
              <h3 className="text-2xl font-bold">{data.totalSubmissions}</h3>
              <p className="text-muted-foreground">Form Submissions</p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <Clock className="text-muted-foreground" size={24} />
                <span className="text-sm text-purple-500">Weekly</span>
              </div>
              <h3 className="text-2xl font-bold">{data.weeklyHoursSaved}</h3>
              <p className="text-muted-foreground">Hours Saved</p>
            </div>
          </div>

          {/* Client Growth Chart */}
          <div className="bg-card p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Client Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.clientGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}
                  labelStyle={{ color: "#888" }}
                />
                <Bar dataKey="clients" fill="#667eea" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Submissions */}
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Form Submissions</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Company</th>
                    <th className="text-left py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentSubmissions.map((submission) => (
                    <tr key={submission.id} className="border-b border-border">
                      <td className="py-3 px-4">{submission.name}</td>
                      <td className="py-3 px-4">{submission.email}</td>
                      <td className="py-3 px-4">{submission.company}</td>
                      <td className="py-3 px-4">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}