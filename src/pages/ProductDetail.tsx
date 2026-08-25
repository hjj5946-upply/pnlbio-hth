import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { products } from '../lib/products'
import { SHOW_PRICE, phoneHref, site, ownerLabel } from '../lib/site'

const DEFAULT_TITLE = '피엔엘바이오 제품 안내 | 홍태환 이사'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  useEffect(() => {
    document.title = product
      ? `${product.name} ${product.volume} | 피엔엘바이오 제품 안내`
      : `제품을 찾을 수 없습니다 | ${DEFAULT_TITLE}`

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [product])

  if (!product) {
    return (
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            찾으시는 제품이 없습니다
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            주소가 잘못되었거나 목록에서 내려간 제품일 수 있습니다.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/#products" variant="neutral" size="lg">
              제품 목록 보기
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <article className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#products"
          className="inline-flex min-h-11 items-center text-base text-gray-500 transition-colors hover:text-gray-900"
        >
          ← 제품 목록으로
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-14">
          {/*
            제품 이미지 (아직 사진이 없는 제품은 준비 중 placeholder).
            상세에서는 잘림 없이 원본 전체를 보여주므로 높이를 비율에 맡긴다.
          */}
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.name} 제품 이미지`}
              className="block h-auto w-full rounded-2xl"
            />
          ) : (
            <div
              role="img"
              aria-label={`${product.name} 제품 이미지 (준비 중)`}
              className="flex aspect-5/6 w-full items-center justify-center rounded-2xl bg-gray-200 px-4 text-center text-base text-gray-500"
            >
              {product.name}
            </div>
          )}

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4">
              <Badge>{product.volume}</Badge>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {product.description}
            </p>

            {SHOW_PRICE && product.price !== undefined && (
              <p className="mt-6 text-xl font-semibold text-gray-900">
                {product.price.toLocaleString('ko-KR')}원
              </p>
            )}

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-base leading-relaxed text-gray-600">
                제품의 자세한 성분과 사용 방법, 구매 방법은 {ownerLabel}가 직접
                안내해 드립니다. 편하게 전화 주세요.
              </p>
              <div className="mt-5">
                <Button href={phoneHref} size="lg" className="w-full sm:w-auto">
                  전화 문의 {site.phone}
                </Button>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              본 제품은 화장품이며, 질병의 예방이나 치료를 목적으로 하는 의약품이
              아닙니다.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
