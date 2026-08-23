import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function App() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <h1 ref={textRef} className="text-3xl font-bold text-blue-600">
      Tailwind + GSAP 작동 확인
    </h1>
  )
}

export default App