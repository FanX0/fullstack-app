import { redirect } from "next/navigation"
import { RegisterForm } from "@/components/auth/register-form"
import { createClient } from "@/lib/supabase/server"

export default async function RegisterPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </main>
  )
}
