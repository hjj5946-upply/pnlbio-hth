import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import { site, ownerLabel } from '../../lib/site'
import brandCard from '../../assets/images/main-bc.webp'

// 실제 인물 사진이 준비되면 위 import를 사진 파일로 교체하세요.
// 파일 위치 예: src/assets/images/owner.webp → alt은 "홍태환 이사 사진" 형태로 작성
// 이미지는 항상 webp로 변환해 사용합니다 (원본 png/jpg는 저장소에 두지 않음)

export default function AboutOwner() {
  const rootRef = useScrollFadeIn<HTMLElement>({
    selector: '[data-fade]',
    stagger: 0.15,
  })

  return (
    <section
      id="about"
      ref={rootRef}
      className="bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div data-fade>
          <img
            src={brandCard}
            alt={`${site.brandNameKo} 브랜드 이미지 — 인류의 건강을 연구하는 기업`}
            width={1200}
            height={748}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-gray-200"
          />
        </div>

        <div data-fade>
          <p className="text-base font-medium text-gray-500">담당자 소개</p>
          <h2 className="mt-3 text-2xl leading-snug font-bold text-gray-900 sm:text-3xl sm:leading-snug">
            {site.brandNameKo} 제품을 안내해 드리는
            <br />
            {ownerLabel}입니다
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {site.ownerTagline}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            제품을 권하기 전에 먼저 이야기를 듣습니다. 지금 어떤 제품이 필요한지,
            어떻게 사용하는 것이 좋은지 차분히 안내해 드리고, 사용하신 뒤에도
            편하게 물어보실 수 있도록 연락을 이어갑니다.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            모든 제품은 {site.brandNameKo} 정품으로만 안내해 드립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
