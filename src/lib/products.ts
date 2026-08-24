import type { Product } from '../types/product'

/**
 * 제품 데이터.
 * 설명 문구는 화장품법 허용 범위 내로 순화된 버전이므로 임의 수정 금지.
 * (질병 치료/예방, 효능 보장, 줄기세포 등 표현 사용 불가 — CLAUDE.md 참조)
 *
 * 제품 이미지 파일 컨벤션: src/assets/images/product-{id}.jpg
 * 예) src/assets/images/product-neck-sol.jpg
 */
export const products: Product[] = [
  {
    id: 'neck-sol',
    name: '넥졸 오리지널',
    volume: '200ml',
    description: '목과 얼굴 부위에 수분감을 더해 산뜻하게 가꿔주는 케어 젤입니다.',
  },
  {
    id: 'body-comfort-gel',
    name: '몸이 편안한 젤',
    volume: '500ml',
    description: '따뜻한 사용감으로 몸을 편안하게 마사지하듯 사용할 수 있는 바디 젤입니다.',
  },
  {
    id: 'body-comfort-spray',
    name: '몸이 편한 스프레이',
    volume: '200ml',
    description: '가볍게 뿌려 사용하는 스프레이 타입으로, 언제 어디서든 편리하게 사용할 수 있습니다.',
  },
  {
    id: 'body-cleanser',
    name: '몸이 개운한 클렌저',
    volume: '500ml',
    description: '산뜻하게 씻어내는 바디 클렌저로, 자극 없이 순하게 사용할 수 있습니다.',
  },
  {
    id: 'pretty-chest',
    name: '예쁜 가슴 크림',
    volume: '500ml',
    description: '가슴 부위 피부결을 정돈하고 촉촉한 사용감을 더해주는 바디 크림입니다.',
  },
  {
    id: 'slim-belly',
    name: '날씬한 배 크림',
    volume: '500ml',
    description: '복부 피부를 부드럽게 가꿔주는 데 도움을 주는 바디 크림입니다.',
  },
  {
    id: 'tooth-gel',
    name: '이가 튼튼 젤',
    volume: '200ml',
    description: '불소 없이 자연 유래 성분으로 산뜻한 구강 사용감을 더해주는 젤입니다.',
  },
  {
    id: 'toothpaste-275',
    name: '무불소 안심치약 275',
    volume: '150g',
    description: '불소, 방부제 등을 배제하고 자연 성분으로 만들어 온 가족이 안심하고 사용할 수 있는 치약입니다.',
  },
  {
    id: 'eye-clear-spray',
    name: '눈이 맑은 스프레이',
    volume: '200ml',
    description: '눈 주변에 가볍게 분사해 촉촉함을 더해주는 미세 미스트 스프레이입니다.',
  },
  {
    id: 'nose-spray',
    name: '코 스프레이',
    volume: '30ml',
    description: '코 주변을 산뜻하고 촉촉하게 관리할 수 있도록 도와주는 스프레이입니다.',
  },
  {
    id: 'derma-balance-care',
    name: '더마 발란스 케어',
    volume: '200ml',
    description: '두피, 손, 손톱, 발톱 등 다양한 부위에 사용할 수 있는 영양 케어 제품입니다.',
  },
  {
    id: 'good-g',
    name: '굿지 (Y존케어)',
    volume: '100ml',
    description: '민감한 부위를 산뜻하고 편안하게 관리할 수 있도록 도와주는 케어 젤입니다. 남녀 모두 사용 가능합니다.',
  },
  {
    id: 'white-face',
    name: '하얀얼굴',
    volume: '100ml',
    description: '나이아신아마이드 성분을 담은 이너 톤업 크림으로, 맑고 화사한 피부 표현에 도움을 줍니다.',
  },
  {
    id: 'vital-clean-roll-gel',
    name: '바이탈크린 롤 젤',
    volume: '100ml',
    description: '쿨링감과 순환감을 동시에 느낄 수 있는 휴대용 롤 타입 젤로, 자극받은 피부를 순하게 케어합니다.',
  },
]
