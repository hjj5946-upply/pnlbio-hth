import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../lib/site'
import logo from '../../assets/images/pnlbio-logo.webp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link to="/" className="flex items-center" aria-label={`${site.brandName} 홈`}>
          <img
            src={logo}
            alt={site.brandName}
            width={800}
            height={162}
            className="h-5 w-auto sm:h-6"
          />
        </Link>

        <nav>
          <Link
            to="/#products"
            className="-mr-2 inline-flex min-h-11 items-center px-2 text-base font-medium text-gray-700 transition-colors hover:text-gray-900 sm:text-lg"
          >
            제품 안내
          </Link>
        </nav>
      </div>
    </header>
  )
}
