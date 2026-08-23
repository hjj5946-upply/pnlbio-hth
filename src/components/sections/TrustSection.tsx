import type { ReactNode } from 'react'
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import Card from '../ui/Card'

interface TrustItem {
  title: string
  description: string
  icon: ReactNode
  /** 브랜드 컬러 포인트는 이 목록에서 딱 한 곳만 true */
  accent?: boolean
}

const iconClass = 'h-7 w-7'

const items: TrustItem[] = [
  {
    title: '정품만 취급합니다',
    description: '피엔엘바이오 정식 유통 제품만 안내해 드립니다.',
    accent: true,
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '빠른 상담',
    description: '전화 한 통이면 됩니다. 궁금한 점을 바로 확인해 드립니다.',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15.5v2.6a2 2 0 0 1-2.2 2 18.5 18.5 0 0 1-8-2.9 18 18 0 0 1-5.5-5.5 18.5 18.5 0 0 1-2.9-8.1A2 2 0 0 1 4.4 1.5H7a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.2a15 15 0 0 0 5.5 5.5l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
  },
  {
    title: '사용법 안내',
    description: '어떤 제품을 어떻게 쓰면 좋은지 사용 방법까지 함께 알려드립니다.',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h4.5A1.5 1.5 0 0 1 20 5.5v12a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 0 0-2 1 2 2 0 0 0-2-1H5.5A1.5 1.5 0 0 1 4 17.5z" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  {
    title: '구매 후에도 함께',
    description: '사용하시면서 생기는 질문도 언제든 편하게 물어보실 수 있습니다.',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 6.5a4 4 0 0 0-6-.5L12 8.4 9.5 6a4 4 0 0 0-5.7 5.7l7.5 7.6a1 1 0 0 0 1.4 0l7.5-7.6a4 4 0 0 0 .3-5.2z" />
      </svg>
    ),
  },
]

export default function TrustSection() {
  const rootRef = useScrollFadeIn<HTMLElement>({
    selector: '[data-trust-card]',
    stagger: 0.1,
  })

  return (
    <section ref={rootRef} className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-base font-medium text-gray-500">이용 안내</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            문의해 주시면 이렇게 도와드립니다
          </h2>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} data-trust-card>
              <Card className="h-full p-7">
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                    item.accent
                      ? 'bg-brand/10 text-brand'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
