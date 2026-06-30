"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function registerAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const name = String(formData.get("name") || "")
  const email = String(formData.get("email") || "")
  const password = String(formData.get("password") || "")

  if (!name.trim() || !email.trim() || !password.trim()) {
    return { error: "Please fill all fields." }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (data?.user && !data.session) {
    return { success: true, message: "Registration successful! Please check your email to confirm your account before logging in." }
  }

  redirect("/dashboard")
}

export async function loginAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const email = String(formData.get("email") || "")
  const password = String(formData.get("password") || "")

  if (!email.trim() || !password.trim()) {
    return { error: "Please fill all fields." }
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/dashboard")
}

export async function logoutAction() {
  const supabase = await createClient()

  await supabase.auth.signOut()

  redirect("/login")
}
