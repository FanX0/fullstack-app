import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
            Fullstack Next.js Practice Project
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Build a complete learning dashboard.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mindory combines authentication, dashboard layout, notes CRUD, Supabase database, and protected routes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-50"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
