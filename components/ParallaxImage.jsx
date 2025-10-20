"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxImage({ src, alt, height = 320, strength = 40, className = '', fit = 'cover' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const img = el.querySelector('img')
    const ctx = gsap.context(() => {
      gsap.to(img, {
        y: strength,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [strength])
  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover'
  return (
    <div ref={ref} className={`overflow-hidden rounded-xl ${className}`} style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={`w-full h-full ${fitClass} object-center will-change-transform`} />
    </div>
  )
}
