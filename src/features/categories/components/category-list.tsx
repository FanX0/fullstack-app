import { CategoryItem } from "./category-item"
import type { Category } from "../types"

type CategoryListProps = {
  categories: Category[]
}

export function CategoryList({ categories }: CategoryListProps) {
  if (categories.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center w-full">
        <h2 className="text-xl font-semibold">
          No categories yet
        </h2>

        <p className="mt-2 text-gray-600">
          Create your first category using the form.
        </p>
      </section>
    )
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 content-start">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  )
}
