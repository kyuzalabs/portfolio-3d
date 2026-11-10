import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PresentationControls, RoundedBox, useTexture } from '@react-three/drei'
import { MathUtils } from 'three'
import type { Group } from 'three'
import type { ReactNode } from 'react'

// Kemiringan halus mengikuti kursor (di luar kontrol drag, biar tidak bentrok).
function TiltFollow({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null)
  useFrame((state) => {
    const g = ref.current
    if (!g) return
    g.rotation.y = MathUtils.lerp(g.rotation.y, state.pointer.x * 0.16, 0.06)
    g.rotation.x = MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.1, 0.06)
  })
  return <group ref={ref}>{children}</group>
}

// Kartu foto: bingkai neon + foto dengan tekstur, diberi ketebalan.
function PhotoCard({ url }: { url: string }) {
  const texture = useTexture(url)
  const img = texture.image as { width: number; height: number }
  const aspect = img.width / img.height
  const w = 2.6
  let h = w / aspect
  h = Math.min(3.5, Math.max(2.1, h))

  return (
    <group>
      {/* bingkai neon di belakang */}
      <RoundedBox args={[w + 0.18, h + 0.18, 0.07]} radius={0.09} smoothness={5} position={[0, 0, -0.03]}>
        <meshStandardMaterial
          color="#0b1020"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
          roughness={0.15}
          metalness={0.7}
        />
      </RoundedBox>
      {/* kartu foto */}
      <RoundedBox args={[w, h, 0.1]} radius={0.05} smoothness={5} position={[0, 0, 0.03]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.3}
          metalness={0.15}
          emissive="#ffffff"
          emissiveIntensity={0.12}
          emissiveMap={texture}
        />
      </RoundedBox>
    </group>
  )
}

export default function PhotoCard3D({ url }: { url: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.7} />
      <pointLight position={[-4, -2, 3]} intensity={1.1} color="#22d3ee" />
      <pointLight position={[4, 3, 2]} intensity={1.0} color="#8b5cf6" />
      <Suspense fallback={null}>
        <TiltFollow>
          {/* PresentasiControls: drag (mouse/sentuh) -> spring balik */}
          <PresentationControls
            global={false}
            snap
            cursor
            polar={[-0.28, 0.28]}
            azimuth={[-0.75, 0.75]}
          >
            <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.4}>
              <PhotoCard url={url} />
            </Float>
          </PresentationControls>
        </TiltFollow>
      </Suspense>
    </Canvas>
  )
}