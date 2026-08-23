import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}
