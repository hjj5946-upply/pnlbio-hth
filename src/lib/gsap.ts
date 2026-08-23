import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** 앱 전역에서 한 번만 플러그인을 등록한다. */
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
