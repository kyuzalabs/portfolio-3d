import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { MathUtils } from 'three'
import type { Group } from 'three'

function DriftingStars({ count }: { count: number }) {
  const ref = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    const g = ref.current
    if (!g) return
    g.rotation.y += 0.0004
    g.rotation.x = MathUtils.lerp(g.rotation.x, pointer.current.y * 0.06, 0.03)
    g.rotation.z = MathUtils.lerp(g.rotation.z, pointer.current.x * 0.04, 0.03)
  })

  return (
    <group ref={ref}>
      <Stars radius={90} depth={50} count={count} factor={4} saturation={0} fade speed={0.6} />
    </group>
  )
}

export default function Starfield() {
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 1500 : 4000
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false }}
      style={{ pointerEvents: 'none' }}
    >
      <DriftingStars count={count} />
    </Canvas>
  )
}