import { useEffect, useRef } from 'react'

// Cincin cahaya yang mengikuti kursor (desktop saja, kursor asli tetap ada).
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let x = -100
    let y = -100
    let rx = -100
    let ry = -100

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`
      }
      requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    const raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ringRef} className="cursor-ring" />
}