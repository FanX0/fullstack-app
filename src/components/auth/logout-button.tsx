import { logoutAction } from "@/features/auth/actions/auth-actions"

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-gray-50 cursor-pointer"
      >
        Logout
      </button>
    </form>
  )
}
