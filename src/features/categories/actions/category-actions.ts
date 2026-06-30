"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export async function createCategoryAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Unauthorized" }
  }

  const name = String(formData.get("name") || "")

  if (!name.trim()) {
    return { error: "Category name is required." }
  }

  const { error } = await supabase.from("categories").insert({
    user_id: user.id,
    name: name.trim(),
  })

  if (error) {
    if (error.code === "23505") {
      return { error: "You already have a category with this name." }
    }
    return { error: error.message }
  }

  revalidatePath("/dashboard/categories")
  revalidatePath("/dashboard/notes")
  return { success: true }
}

export async function deleteCategoryAction(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const id = String(formData.get("id") || "")

  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/categories")
  revalidatePath("/dashboard/notes")
}
