"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export async function createNoteAction(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const title = String(formData.get("title") || "")
  const content = String(formData.get("content") || "")
  const category = String(formData.get("category") || "")

  if (!title.trim() || !content.trim() || !category.trim()) {
    throw new Error("Please fill all fields.")
  }

  const { error } = await supabase.from("notes").insert({
    user_id: user.id,
    title,
    content,
    category,
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/notes")
}

export async function deleteNoteAction(formData: FormData) {
  const supabase = await createClient()

  const id = String(formData.get("id") || "")

  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard/notes")
}
