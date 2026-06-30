import Link from "next/link"
import { loginAction, loginDemoAction } from "@/features/auth/actions/auth-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
      <form action={loginAction} className="space-y-4">
        <div>
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
      </form>

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <form action={loginDemoAction}>
        <Button type="submit" variant="secondary" className="w-full">
          Continue as Demo User
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Do not have an account?{" "}
        <Link href="/register" className="font-semibold text-gray-950 underline">
          Register
        </Link>
      </p>
    </div>
  )
}

