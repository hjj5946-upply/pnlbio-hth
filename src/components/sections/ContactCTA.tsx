import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import Button from '../ui/Button'
import { site, ownerLabel, phoneHref } from '../../lib/site'

export default function ContactCTA() {
  const rootRef = useScrollFadeIn<HTMLElement>({
    selector: '[data-fade]',
    stagger: 0.12,
  })

  return (
    <section
      id="contact"
      ref={rootRef}
      className="bg-linear-to-b from-brand/10 to-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          data-fade
          className="text-2xl leading-snug font-bold text-gray-900 sm:text-4xl sm:leading-snug"
        >
          궁금한 점은
          <br className="sm:hidden" /> 편하게 물어보세요
        </h2>

        <p data-fade className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
          제품 선택부터 사용 방법까지, {ownerLabel}가 직접 안내해 드립니다.
        </p>

        <div
          data-fade
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href={phoneHref} size="lg" className="w-full sm:w-auto">
            전화 상담 {site.phone}
          </Button>

          {site.kakaoUrl && (
            <Button
              href={site.kakaoUrl}
              size="lg"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              카카오톡 상담
            </Button>
          )}
        </div>

        <p data-fade className="mt-8 text-base leading-relaxed text-gray-500">
          전화 연결이 어려울 때는 문자를 남겨주시면 확인 후 연락드립니다.
        </p>
      </div>
    </section>
  )
}
