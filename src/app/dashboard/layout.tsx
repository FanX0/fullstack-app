import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950">
      <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-col">
          <DashboardHeader email={user.email ?? ""} />

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
