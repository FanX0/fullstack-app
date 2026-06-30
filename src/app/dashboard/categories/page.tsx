import { getCategories } from "@/features/categories/queries/category-query"
import { CategoryForm } from "@/features/categories/components/category-form"
import { CategoryList } from "@/features/categories/components/category-list"

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Categories
        </h1>

        <p className="mt-2 text-gray-600">
          Create and manage categories to keep your notes organized.
        </p>
      </div>

      {/* Database Schema Reminder */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-sm text-blue-800">
        <h4 className="font-semibold mb-1">💡 Supabase Database Setup</h4>
        <p className="text-blue-700 mb-2">
          Make sure you have created the <code className="font-mono bg-blue-100/80 px-1 rounded text-blue-900 text-xs">categories</code> table in your Supabase project. If you haven't yet, open your Supabase SQL Editor and run this code:
        </p>
        <details className="cursor-pointer font-medium text-blue-900 hover:underline">
          <summary>Show SQL Query</summary>
          <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-xs font-mono font-normal select-all">
{`CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE (user_id, name)
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own categories" ON public.categories
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own categories" ON public.categories
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own categories" ON public.categories
    FOR DELETE USING (auth.uid() = user_id);`}
          </pre>
        </details>
      </div>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <CategoryForm />
        <CategoryList categories={categories} />
      </div>
    </div>
  )
}
