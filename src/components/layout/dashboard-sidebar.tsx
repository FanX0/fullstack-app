import Link from "next/link"
import { dashboardNavItems } from "@/config/dashboard-nav"

export function DashboardSidebar() {
  return (
    <aside className="hidden border-r border-gray-200 bg-white md:block">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Link href="/dashboard" className="text-lg font-bold tracking-tight">
          Mindory
        </Link>
      </div>

      <nav className="space-y-1 p-4">
        {dashboardNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
