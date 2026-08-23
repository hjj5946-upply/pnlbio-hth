import { Link } from 'react-router-dom'
import { site, ownerLabel, phoneHref } from '../../lib/site'
import logo from '../../assets/images/pnlbio-logo.webp'

const links = [
  { to: '/#about', label: '담당자 소개' },
  { to: '/#products', label: '제품 안내' },
  { to: '/#contact', label: '문의하기' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src={logo}
              alt={site.brandName}
              width={800}
              height={162}
              loading="lazy"
              className="h-6 w-auto"
            />

            <p className="mt-5 text-base text-gray-700">
              {site.brandNameKo} 제품 안내 · {ownerLabel}
            </p>
            <p className="mt-1 text-base text-gray-600">
              문의{' '}
              <a
                href={phoneHref}
                className="font-medium underline underline-offset-4 hover:text-gray-900"
              >
                {site.phone}
              </a>
            </p>
          </div>

          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base text-gray-600">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8">
          <p className="text-sm leading-relaxed text-gray-500">
            본 페이지는 {site.brandNameKo} 제품을 안내해 드리기 위해 만든 개인 소개
            페이지입니다. 제품 설명은 화장품 표시·광고 기준에 따라 작성되었으며,
            질병의 예방이나 치료를 목적으로 하는 의약품이 아닙니다.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            © {new Date().getFullYear()} {site.ownerName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
