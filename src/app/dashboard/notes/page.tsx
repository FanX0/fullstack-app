import { NoteForm } from "@/features/notes/components/note-form"
import { NoteList } from "@/features/notes/components/note-list"
import { getNotes } from "@/features/notes/queries/note-query"

export default async function NotesPage() {
  const notes = await getNotes()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Notes
        </h1>

        <p className="mt-2 text-gray-600">
          Create and manage your learning notes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <NoteForm />
        <NoteList notes={notes} />
      </div>
    </div>
  )
}
