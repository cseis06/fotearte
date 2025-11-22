"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPReveal({ children, y = 30, delay = 0, duration = 0.8 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { autoAlpha: 0, y }, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [y, delay, duration])
  return <div ref={ref}>{children}</div>
}
