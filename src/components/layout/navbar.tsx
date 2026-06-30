import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { LogoutButton } from "@/components/auth/logout-button"

export async function Navbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="border-b border-gray-200 bg-white px-6">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Mindory
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-gray-600 hover:text-gray-950"
              >
                Dashboard
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-950"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
