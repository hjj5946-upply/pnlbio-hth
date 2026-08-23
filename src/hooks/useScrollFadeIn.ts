import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

interface ScrollFadeInOptions {
  /** 컨테이너 내부에서 애니메이션할 대상 셀렉터. 생략 시 컨테이너 자체가 대상 */
  selector?: string
  /** 여러 요소를 순차 등장시킬 때의 간격(초) */
  stagger?: number
  /** 시작 시 아래로 밀어둘 거리(px) */
  y?: number
  /** ScrollTrigger start 값 */
  start?: string
  /** 시작 지연(초) */
  delay?: number
}

/**
 * 스크롤 진입 시 fade-up 되는 애니메이션 훅.
 * gsap.context()로 감싸 unmount 시 자동 정리한다.
 */
export default function useScrollFadeIn<T extends HTMLElement = HTMLDivElement>({
  selector,
  stagger = 0.12,
  y = 32,
  start = 'top 85%',
  delay = 0,
}: ScrollFadeInOptions = {}) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const targets = selector
        ? gsap.utils.toArray<HTMLElement>(selector)
        : [container]
      if (targets.length === 0) return

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [selector, stagger, y, start, delay])

  return containerRef
}
