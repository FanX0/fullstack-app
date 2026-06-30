import { deleteNoteAction } from "../actions/note-actions"
import type { Note } from "../types"
import { Button } from "@/components/ui/button"

type NoteItemProps = {
  note: Note
}

export function NoteItem({
  note,
}: NoteItemProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {note.category}
        </span>

        <span className="text-xs text-gray-500">
          {new Date(note.created_at).toLocaleDateString()}
        </span>
      </div>

      <h3 className="text-xl font-semibold">
        {note.title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {note.content}
      </p>

      <form action={deleteNoteAction} className="mt-5">
        <input type="hidden" name="id" value={note.id} />

        <Button type="submit" variant="danger">
          Delete
        </Button>
      </form>
    </article>
  )
}
