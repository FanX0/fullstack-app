import Link from "next/link"
import { createNoteAction } from "../actions/note-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Category } from "@/features/categories/types"

type NoteFormProps = {
  categories: Category[]
}

export function NoteForm({ categories }: NoteFormProps) {
  return (
    <form
      action={createNoteAction}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-fit"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Create Note
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Add a new learning note.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="title"
          placeholder="Title"
          label="Title"
          required
        />

        <div className="w-full">
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-gray-950 focus:ring-1 focus:ring-gray-950 cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled>Select a category</option>
            <option value="General">General</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {categories.length === 0 && (
            <p className="mt-1.5 text-xs text-gray-500">
              No custom categories. Add some in the{" "}
              <Link href="/dashboard/categories" className="text-gray-950 underline font-medium">
                Categories
              </Link>{" "}
              tab.
            </p>
          )}
        </div>

        <Textarea
          name="content"
          placeholder="Content"
          label="Content"
          rows={5}
          required
        />

        <Button type="submit" className="w-full">
          Create Note
        </Button>
      </div>
    </form>
  )
}
