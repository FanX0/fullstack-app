import { createClient } from "@/lib/supabase/server"
import type { Note } from "../types"

export async function getNotes(): Promise<Note[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", {
      ascending: false,
    })

  if (error) {
    throw new Error(error.message)
  }

  return (data || []) as Note[]
}
