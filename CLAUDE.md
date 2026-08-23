# 프로젝트 지침 (CLAUDE.md)

## 프로젝트 개요
- **목적**: 피엔엘바이오(PNL BIO) 대리점(판매권 보유자)의 제품 소개 랜딩페이지
- **단계**: MVP — 프론트엔드 전용, 결제/DB 없음 (추후 Supabase 연동 예정이나 지금은 미포함)
- **배포**: Cloudflare Pages (GitHub 연동 자동배포), 도메인은 완성 단계에서 구매

## 기술 스택
- React 19 + Vite + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인 방식, `tailwind.config.js` 불필요)
- GSAP (스크롤 애니메이션은 `ScrollTrigger` 사용)
- ESLint 적용됨
- 패키지 매니저: npm

## 폴더 구조 규칙
```
src/
├── components/
│   ├── sections/    # 페이지 섹션 단위 컴포넌트 (Hero.tsx, ProductGrid.tsx, AboutOwner.tsx 등)
│   ├── ui/          # 재사용 가능한 프리미티브 (Button.tsx, Badge.tsx, Card.tsx)
│   └── layout/       # Header.tsx, Footer.tsx
├── assets/images/    # 정적 이미지 (제품 사진, 로고)
├── hooks/            # 커스텀 훅 (예: useScrollFadeIn.ts)
├── lib/              # gsap 초기설정, 유틸 함수, 상수
├── types/            # 타입 정의 (product.ts 등)
├── App.tsx
├── main.tsx
└── index.css
```

## 브랜드 컬러 사용 원칙
- **메인 브랜드 컬러**: `#e10060`
- 이 색상은 **포인트/강조 요소에만 제한적으로 사용**한다. (예: CTA 버튼, 핵심 숫자/키워드 하이라이트, 활성 상태 표시, 브랜드 로고 포인트, 섹션 타이틀의 일부 강조 단어 등)
- **절대 남발하지 않는다.** 배경 전체, 본문 텍스트, 여러 아이콘 색상, 카드 배경 등 넓은 면적에 반복적으로 사용하지 말 것 — 오히려 피로감을 주고 강조 효과가 희석된다.
- 기본 팔레트는 무채색(흰색/그레이/블랙) 또는 뉴트럴 톤을 기본으로 하고, `#e10060`은 "여기를 봐야 한다"는 지점에서만 등장해야 한다.
- Tailwind에서 커스텀 컬러로 등록해서 사용: `index.css`의 `@theme` 블록에 아래처럼 정의하고 `text-brand`, `bg-brand`, `border-brand` 형태로 사용.
  ```css
  @theme {
    --color-brand: #e10060;
  }
  ```
- 컴포넌트 작성 시 "이 요소가 정말 강조가 필요한가?"를 먼저 판단하고, 애매하면 브랜드 컬러 대신 뉴트럴 톤을 우선한다.

## 코딩 컨벤션
- 컴포넌트는 함수형 + TypeScript, `export default function ComponentName()` 패턴 사용
- 섹션 컴포넌트는 `src/components/sections/`에 하나씩 분리, `App.tsx`에서는 섹션들을 순서대로 배치만 함
- Tailwind 클래스는 인라인으로 작성하되, 반복되는 조합은 `ui/` 컴포넌트로 추출
- GSAP 애니메이션은 반드시 `useEffect` + `useRef` 조합으로 작성하고, 컴포넌트 unmount 시 `gsap.context()`로 정리(cleanup)할 것
- 이미지는 `src/assets/images/`에 넣고 import해서 사용 (public 폴더는 favicon 등 최소한만)
- 타입은 `any` 지양, `src/types/`에 정의 후 재사용

## ⚠️ 콘텐츠/카피라이팅 준수 사항 (중요)
이 프로젝트는 화장품/건강 관련 제품을 다루므로, **아래 표현은 절대 사용하지 않는다.**
- 질병 치료/예방/완화를 암시하는 표현 (예: "암세포 억제", "염증 치료", "질환 예방")
- 의약품 수준의 효능 보장 표현 (예: "다시는 아프지 않습니다", "평생 보장")
- "줄기세포", "의료 시술급" 등 인체 재생의료 관련 과장 표현
- Before/After 사진을 활용한 단정적 효과 보장 문구

**허용되는 표현 범위 (화장품법 기준)**: "피부 진정에 도움", "보습감", "산뜻한 사용감", "탄력 케어에 도움을 줄 수 있음" 등 완곡하고 화장품법 허용 범위 내 표현만 사용.

콘텐츠(제품 설명 카피) 작성/수정 시 이 기준을 반드시 먼저 검토하고 진행할 것. 애매하면 보수적으로 순화한 표현을 우선한다.

## 현재 제외된 제품
아래 제품은 광고 문구 자체가 심각한 법적 리스크(무허가 의료광고 수준)를 포함하고 있어 **1차 MVP 랜딩페이지에서 제외**한다. 추후 별도 논의 후 문구를 완전히 재작성한 경우에만 포함 검토.
- 이뮤닉스(IMMUNIX) — 암 관련 문구 포함
- SCR 라인(SCR-I/II/III) — "줄기세포 대체" 주장 포함

## Git / 배포 워크플로우
- `main` 브랜치 = 배포 브랜치 (Cloudflare Pages와 연동)
- 기능 단위로 커밋 (섹션 단위 작업 후 커밋 권장)
- 커밋 메시지는 한글/영어 무관, 변경 내용이 명확하면 됨

## 아직 하지 않는 것 (Out of Scope for MVP)
- 결제 모듈
- Supabase DB 연동 (문의 폼조차 아직 미포함, 추후 논의)
- 회원가입/로그인
- 관리자 페이지