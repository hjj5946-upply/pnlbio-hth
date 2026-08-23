/**
 * 담당자 / 사이트 공통 정보.
 * 별도 매장 없이 담당자 개인이 안내하는 형태이므로 주소 정보는 두지 않는다.
 */
export const site = {
  /** 로고 대체 텍스트 등에 쓰는 브랜드 표기 */
  brandName: 'PNL BIO',
  brandNameKo: '피엔엘바이오',
  ownerName: '홍태환',
  ownerTitle: '이사',
  ownerTagline:
    '제품을 직접 써보고, 필요하신 분께 맞는 제품만 골라 안내해 드립니다.',
  phone: '010-7687-7878',
  /** TODO: 카카오톡 채널 / 오픈채팅 링크 (빈 문자열이면 카톡 버튼이 노출되지 않음) */
  kakaoUrl: '',
  /** TODO: 도메인 구매 후 실제 주소로 교체 (index.html의 메타 태그도 함께 수정) */
  siteUrl: 'https://pnlbio-hth.pages.dev',
} as const

/** "홍태환 이사" 형태의 표기 */
export const ownerLabel = `${site.ownerName} ${site.ownerTitle}`

/** `tel:` 링크용 하이픈 제거 번호 */
export const phoneHref = `tel:${site.phone.replace(/[^0-9+]/g, '')}`

/** 제품 가격 노출 여부 — 가격 정책 확정 전까지 false 유지 */
export const SHOW_PRICE = false
