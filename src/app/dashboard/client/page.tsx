"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle, Clock, AlertCircle, Activity } from "lucide-react";

interface Automation {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number;
  created_at: string;
}

interface Task {
  id: string;
  name: string;
  status: string;
  due_date: string;
}

export default function ClientDashboard() {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [clientData, setClientData] = useState<{
    id: string;
    contact_name: string;
    company_name: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkAuth();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const checkAuth = async () => {
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

    if (userData?.role === "admin") {
      router.push("/dashboard/admin");
      return;
    }

    fetchClientData(user.id);
  };

  const fetchClientData = async (userId: string) => {
    try {
      // Fetch client info
      const { data: client } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (client) {
        setClientData(client);

        // Fetch automations
        const { data: clientAutomations } = await supabase
          .from("automations")
          .select("*")
          .eq("client_id", client.id)
          .order("created_at", { ascending: false });

        setAutomations(clientAutomations || []);

        // Fetch tasks for active automations
        if (clientAutomations && clientAutomations.length > 0) {
          const automationIds = clientAutomations.map(a => a.id);
          const { data: clientTasks } = await supabase
            .from("tasks")
            .select("*")
            .in("automation_id", automationIds)
            .order("due_date", { ascending: true })
            .limit(10);

          setTasks(clientTasks || []);
        }
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={20} />;
      case "in_progress":
      case "active":
        return <Clock className="text-blue-500" size={20} />;
      case "failed":
        return <AlertCircle className="text-red-500" size={20} />;
      default:
        return <Activity className="text-gray-500" size={20} />;
    }
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
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {clientData?.contact_name}</h1>
            <p className="text-muted-foreground">{clientData?.company_name}</p>
          </div>
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
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Active Automations</h3>
              <p className="text-3xl font-bold">
                {automations.filter(a => a.status === "active").length}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
              <p className="text-3xl font-bold">
                {tasks.filter(t => t.status === "pending").length}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Hours Saved This Week</h3>
              <p className="text-3xl font-bold">35+</p>
            </div>
          </div>

          {/* Automations */}
          <div className="bg-card p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Automations</h2>
            {automations.length === 0 ? (
              <p className="text-muted-foreground">No automations yet. Contact us to get started!</p>
            ) : (
              <div className="space-y-4">
                {automations.map((automation) => (
                  <div key={automation.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold flex items-center gap-2">
                        {getStatusIcon(automation.status)}
                        {automation.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {automation.progress}% complete
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{automation.description}</p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${automation.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Tasks */}
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
            {tasks.length === 0 ? (
              <p className="text-muted-foreground">No tasks to display.</p>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(task.status)}
                      <span>{task.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Due: {new Date(task.due_date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}