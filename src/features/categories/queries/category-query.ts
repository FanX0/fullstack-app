import { createClient } from "@/lib/supabase/server"
import type { Category } from "../types"

export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name", {
      ascending: true,
    })

  if (error) {
    // If table doesn't exist yet, return empty array to prevent complete crash
    if (error.code === "PGRST116" || error.message.includes("relation \"public.categories\" does not exist") || error.message.includes("does not exist")) {
      return []
    }
    throw new Error(error.message)
  }

  return (data || []) as Category[]
}
