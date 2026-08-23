import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 ${className}`}
    >
      {children}
    </span>
  )
}
