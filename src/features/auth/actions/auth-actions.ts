"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function registerAction(formData: FormData) {
  const supabase = await createClient()

  const name = String(formData.get("name") || "")
  const email = String(formData.get("email") || "")
  const password = String(formData.get("password") || "")

  if (!name.trim() || !email.trim() || !password.trim()) {
    throw new Error("Please fill all fields.")
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) {
    throw new Error(error.message)
  }

  redirect("/dashboard")
}

export async function loginAction(formData: FormData) {
  const supabase = await createClient()

  const email = String(formData.get("email") || "")
  const password = String(formData.get("password") || "")

  if (!email.trim() || !password.trim()) {
    throw new Error("Please fill all fields.")
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  redirect("/dashboard")
}

export async function logoutAction() {
  const supabase = await createClient()

  await supabase.auth.signOut()

  redirect("/login")
}

export async function loginDemoAction() {
  const supabase = await createClient()

  const email = "demo@mindory.com"
  const password = "demouser123"

  let { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // If user does not exist, sign them up first and retry login
  if (error && (error.message.includes("Invalid login credentials") || error.status === 400)) {
    const signUpResult = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: "Demo User",
        },
      },
    })
    
    if (!signUpResult.error) {
      const retryResult = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      error = retryResult.error
    } else {
      error = signUpResult.error
    }
  }

  if (error) {
    throw new Error(error.message)
  }

  redirect("/dashboard")
}

