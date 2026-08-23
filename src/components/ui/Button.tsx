import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'brand' | 'neutral' | 'outline' | 'subtle'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'

const variants: Record<Variant, string> = {
  // 브랜드 컬러는 페이지에서 가장 강조할 CTA 한두 곳에만 사용한다.
  brand: 'bg-brand text-white hover:bg-brand/90',
  neutral: 'bg-gray-900 text-white hover:bg-gray-800',
  outline: 'border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50',
  subtle: 'bg-white text-gray-900 hover:bg-gray-100',
}

// 중장년층 터치를 고려해 최소 높이를 넉넉히 잡는다.
const sizes: Record<Size, string> = {
  md: 'min-h-12 px-5 py-3 text-base',
  lg: 'min-h-14 px-7 py-4 text-lg',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type AsLink = BaseProps & { to: string; href?: never } & Omit<
    ComponentProps<typeof Link>,
    'to' | 'className' | 'children'
  >
type AsAnchor = BaseProps & { href: string; to?: never } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'className' | 'children'
  >
type AsButton = BaseProps & { href?: never; to?: never } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  >

type Props = AsLink | AsAnchor | AsButton

/**
 * 공용 버튼.
 * - `to`가 있으면 react-router <Link> (앱 내부 이동)
 * - `href`가 있으면 <a> (tel:, 외부 링크)
 * - 둘 다 없으면 <button>
 */
export default function Button(props: Props) {
  const { variant = 'brand', size = 'md', className = '', children, ...rest } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (typeof props.to === 'string') {
    return (
      <Link {...(rest as ComponentProps<typeof Link>)} className={classes}>
        {children}
      </Link>
    )
  }

  if (typeof props.href === 'string') {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  )
}
