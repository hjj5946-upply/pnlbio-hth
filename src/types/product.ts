export interface Product {
  id: string
  name: string
  /** 용량 표기 (예: '200ml', '150g') */
  volume: string
  /** 화장품법 허용 범위 내의 순화된 설명 문구 */
  description: string
  /** 제품 이미지 (import한 URL). 아직 사진이 없는 제품은 비워둔다. */
  image?: string
  /** 가격 정책 확정 전까지는 비워둔다. (단위: 원) */
  price?: number
}
