import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Overview
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your learning notes and dashboard data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Main Feature
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Notes CRUD
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Auth Status
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Protected
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Database
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Supabase
          </h2>
        </div>
      </div>

      <Link
        href="/dashboard/notes"
        className="inline-flex rounded-lg bg-gray-950 px-4 py-2 text-sm font-semibold text-white cursor-pointer hover:bg-gray-800"
      >
        Manage Notes
      </Link>
    </div>
  )
}
