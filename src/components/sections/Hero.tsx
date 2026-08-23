import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import Button from '../ui/Button'
import { phoneHref } from '../../lib/site'

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
        .from('[data-hero="eyebrow"]', { opacity: 0, y: 20 })
        .from('[data-hero="title"]', { opacity: 0, y: 32 }, '-=0.6')
        .from('[data-hero="subtitle"]', { opacity: 0, y: 24 }, '-=0.6')
        .from('[data-hero="cta"]', { opacity: 0, y: 20 }, '-=0.6')
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p
          data-hero="eyebrow"
          className="text-base font-medium tracking-wide text-gray-500 sm:text-lg"
        >
          피엔엘바이오 정품 안내
        </p>

        <h1
          data-hero="title"
          className="mt-5 text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight"
        >
          매일의 생활에 더하는
          <br />
          <span className="text-brand">건강한 케어</span>
        </h1>

        <p
          data-hero="subtitle"
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-relaxed"
        >
          피부와 생활 곳곳을 순하게 관리하는 피엔엘바이오 제품을
          정품으로 안내해 드립니다. 궁금한 점은 편하게 문의해 주세요.
        </p>

        <div data-hero="cta" className="mt-10 flex justify-center">
          <Button href={phoneHref} variant="neutral" size="lg" className="w-full sm:w-auto">
            전화 문의
          </Button>
        </div>
      </div>
    </section>
  )
}
