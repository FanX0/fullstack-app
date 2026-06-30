import { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({
  label,
  id,
  className = "",
  rows = 5,
  ...props
}: TextareaProps) {
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
      <textarea
        id={id}
        rows={rows}
        className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-gray-950 focus:ring-1 focus:ring-gray-950 ${className}`}
        {...props}
      />
    </div>
  )
}
