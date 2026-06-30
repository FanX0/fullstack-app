import { NoteItem } from "./note-item"
import type { Note } from "../types"

type NoteListProps = {
  notes: Note[]
}

export function NoteList({
  notes,
}: NoteListProps) {
  if (notes.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <h2 className="text-xl font-semibold">
          No notes yet
        </h2>

        <p className="mt-2 text-gray-600">
          Create your first note using the form.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </section>
  )
}
