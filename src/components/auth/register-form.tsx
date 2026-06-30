"use client"

import Link from "next/link"
import { useActionState } from "react"
import { registerAction } from "@/features/auth/actions/auth-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null)

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Create account
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Register to access your dashboard.
        </p>
      </div>

      {state?.error && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
          {state.error}
        </div>
      )}

      <div className="space-y-4">
        <Input
          name="name"
          placeholder="Name"
          label="Name"
          required
          disabled={isPending}
        />

        <Input
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          required
          disabled={isPending}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          required
          disabled={isPending}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating account..." : "Register"}
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-gray-950 underline">
          Login
        </Link>
      </p>
    </form>
  )
}
