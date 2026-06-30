import { LogoutButton } from "@/components/auth/logout-button"

type DashboardHeaderProps = {
  email: string
}

export function DashboardHeader({
  email,
}: DashboardHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <p className="text-sm text-gray-500">
          Welcome back
        </p>

        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <p className="hidden text-sm text-gray-600 md:block">
          {email}
        </p>

        <LogoutButton />
      </div>
    </header>
  )
}
