import { deleteCategoryAction } from "../actions/category-actions"
import type { Category } from "../types"
import { Button } from "@/components/ui/button"

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:bg-gray-50/50">
      <div>
        <h4 className="font-semibold text-gray-900">
          {category.name}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          Created {new Date(category.created_at).toLocaleDateString()}
        </p>
      </div>

      <form action={deleteCategoryAction}>
        <input type="hidden" name="id" value={category.id} />
        <Button type="submit" variant="danger" className="!py-1 !px-3 !w-auto text-xs">
          Delete
        </Button>
      </form>
    </div>
  )
}
