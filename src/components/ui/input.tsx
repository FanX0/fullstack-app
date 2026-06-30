import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({
  label,
  id,
  className = "",
  type = "text",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-gray-950 focus:ring-1 focus:ring-gray-950 ${className}`}
        {...props}
      />
    </div>
  )
}
