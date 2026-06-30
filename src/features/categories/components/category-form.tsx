"use client"

import { useActionState, useEffect, useRef } from "react"
import { createCategoryAction } from "../actions/category-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CategoryForm() {
  const [state, formAction, isPending] = useActionState(createCategoryAction, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-fit"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Create Category
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Add a new category for notes.
        </p>
      </div>

      {state?.error && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
          {state.error}
        </div>
      )}

      <div className="space-y-4">
        <Input
          name="name"
          placeholder="e.g. Work, Study, Personal"
          label="Category Name"
          required
          disabled={isPending}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating..." : "Create Category"}
        </Button>
      </div>
    </form>
  )
}
