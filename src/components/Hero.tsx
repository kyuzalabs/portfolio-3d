import { lazy, Suspense } from 'react'
import { ArrowDown, Download, Eye } from 'lucide-react'
import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import { isWebGLAvailable } from '../lib/device'

const PhotoCard3D = lazy(() => import('./PhotoCard3D'))

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const webgl = isWebGLAvailable()

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-24 pt-28 md:grid-cols-2 md:px-6">
        <div className="order-2 md:order-1">
          <p className="font-mono text-sm text-cyan">Halo, saya 👋</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 flex min-h-[1.6em] items-center font-display text-xl font-semibold md:text-2xl">
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan" />
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-2">{profile.bio}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#project"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-black transition hover:opacity-90"
              style={{ background: 'linear-gradient(120deg,#22d3ee,#8b5cf6)' }}
            >
              Lihat Project <Eye size={18} />
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 font-medium text-ink transition hover:border-cyan hover:text-cyan"
            >
              Unduh CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto h-[380px] w-full max-w-sm md:h-[520px]">
            {webgl ? (
              <Suspense fallback={<PhotoFallback />}>
                <PhotoCard3D url={profile.photo} />
              </Suspense>
            ) : (
              <PhotoFallback />
            )}
          </div>
        </div>
      </div>

      <a
        href="#tentang"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-3 transition hover:text-cyan md:block"
        aria-label="Scroll ke bawah"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}

function PhotoFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <img
        src={profile.photo}
        alt="Foto profil"
        className="h-full w-auto rounded-3xl border border-line object-cover shadow-[0_0_60px_rgba(139,92,246,0.35)]"
      />
    </div>
  )
}