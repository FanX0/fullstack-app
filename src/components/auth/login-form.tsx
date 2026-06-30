import Link from "next/link"
import { loginAction } from "@/features/auth/actions/auth-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  return (
    <form
      action={loginAction}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Login
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Login to manage your learning notes.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          required
        />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Do not have an account?{" "}
        <Link href="/register" className="font-semibold text-gray-950 underline">
          Register
        </Link>
      </p>
    </form>
  )
}
