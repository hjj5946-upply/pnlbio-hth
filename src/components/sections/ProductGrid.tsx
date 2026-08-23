import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import { ScrollTrigger } from '../../lib/gsap'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import { products } from '../../lib/products'
import { SHOW_PRICE } from '../../lib/site'

type MobileColumns = 1 | 2

interface ProductGridProps {
  /** 가격 노출 여부. 기본값은 src/lib/site.ts의 SHOW_PRICE (현재 false) */
  showPrice?: boolean
}

const columnOptions: { value: MobileColumns; label: string }[] = [
  { value: 1, label: '한개씩 보기' },
  { value: 2, label: '두개씩 보기' },
]

/** 열 수 선택 버튼에 쓰는 아이콘 (한개씩: 넓은 칸 하나, 두개씩: 좁은 칸 둘) */
function ColumnsIcon({ columns }: { columns: MobileColumns }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {columns === 1 ? (
        <rect x="2" y="2" width="12" height="12" rx="2" />
      ) : (
        <>
          <rect x="2" y="2" width="5" height="12" rx="1.5" />
          <rect x="9" y="2" width="5" height="12" rx="1.5" />
        </>
      )}
    </svg>
  )
}

export default function ProductGrid({ showPrice = SHOW_PRICE }: ProductGridProps) {
  // 모바일에서만 적용되는 열 수. 태블릿은 2열, PC(lg 이상)는 항상 3열 유지.
  const [mobileColumns, setMobileColumns] = useState<MobileColumns>(2)

  const rootRef = useScrollFadeIn<HTMLElement>({
    selector: '[data-product-card]',
    stagger: 0.08,
  })

  // 열 수가 바뀌면 카드 높이가 달라지므로 ScrollTrigger 위치를 다시 계산한다.
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [mobileColumns])

  const isSingle = mobileColumns === 1

  return (
    <section
      id="products"
      ref={rootRef}
      className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-base font-medium text-gray-500">제품 안내</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            생활 곳곳에서 쓰는 <span className="text-brand">피엔엘바이오</span> 제품
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            아래 제품 외에도 문의 주시면 자세히 안내해 드립니다.
          </p>
        </header>

        {/* 열 수 선택 — 모바일에서만 노출 */}
        <div
          role="group"
          aria-label="제품 목록 열 수 선택"
          className="mt-8 flex items-center justify-end gap-1 rounded-full bg-gray-200/70 p-1 sm:hidden"
        >
          {columnOptions.map((option) => {
            const active = mobileColumns === option.value
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={active}
                onClick={() => setMobileColumns(option.value)}
                className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-2 text-base font-medium transition-colors ${
                  active ? 'bg-white text-brand shadow-sm' : 'text-gray-600'
                }`}
              >
                <ColumnsIcon columns={option.value} />
                {option.label}
              </button>
            )
          })}
        </div>

        <ul
          className={`mt-6 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${
            isSingle ? 'grid-cols-1' : 'grid-cols-2'
          }`}
        >
          {products.map((product) => (
            <li key={product.id} data-product-card>
              <Link
                to={`/products/${product.id}`}
                className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                aria-label={`${product.name} 자세히 보기`}
              >
                <Card className="flex h-full cursor-pointer flex-col group-hover:border-gray-300">
                {/*
                  제품 이미지 자리.
                  실제 파일 컨벤션: src/assets/images/product-{id}.webp (webp로 변환해 사용)
                  예) product-neck-sol.webp → import 후 아래 div를 <img alt="{제품명} 제품 이미지" />로 교체
                */}
                <div
                  role="img"
                  aria-label={`${product.name} 제품 이미지 (준비 중)`}
                  className={`flex aspect-square w-full items-center justify-center bg-gray-200 px-2 text-center text-gray-500 sm:text-base ${
                    isSingle ? 'text-base' : 'text-sm'
                  }`}
                >
                  {product.name}
                </div>

                <div
                  className={`flex flex-1 flex-col sm:p-6 ${isSingle ? 'p-6' : 'p-4'}`}
                >
                  {/* 모바일 2열에서는 폭이 좁아 제품명과 용량을 세로로 쌓는다. */}
                  <div
                    className={`flex sm:flex-row sm:items-start sm:justify-between sm:gap-3 ${
                      isSingle
                        ? 'flex-row items-start justify-between gap-3'
                        : 'flex-col gap-2'
                    }`}
                  >
                    <h3
                      className={`font-bold text-gray-900 sm:text-xl ${
                        isSingle ? 'text-xl' : 'text-lg'
                      }`}
                    >
                      {product.name}
                    </h3>
                    <Badge className="shrink-0 self-start">{product.volume}</Badge>
                  </div>

                  <p
                    className={`mt-3 flex-1 leading-relaxed text-gray-600 sm:text-base ${
                      isSingle ? 'text-base' : 'text-sm'
                    }`}
                  >
                    {product.description}
                  </p>

                  {showPrice && product.price !== undefined && (
                    <p className="mt-5 text-base font-semibold text-gray-900 sm:text-lg">
                      {product.price.toLocaleString('ko-KR')}원
                    </p>
                  )}

                  <span
                    className={`mt-4 inline-flex items-center gap-1 font-medium text-gray-500 transition-colors group-hover:text-gray-900 sm:text-sm ${
                      isSingle ? 'text-sm' : 'text-xs'
                    }`}
                  >
                    자세히 보기
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
