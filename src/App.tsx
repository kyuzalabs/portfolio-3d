import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const Starfield = lazy(() => import('./components/Starfield'))

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Latar 3D tetap (bintang + glow), selalu di belakang konten */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% -20%, #0b1020 0%, #05060f 60%)' }}
        />
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Starfield />
          </Suspense>
        </div>
        <div
          className="absolute -left-40 top-1/3 hidden h-96 w-96 rounded-full opacity-20 blur-3xl md:block"
          style={{ background: '#8b5cf6' }}
        />
        <div
          className="absolute -right-40 top-1/4 hidden h-96 w-96 rounded-full opacity-20 blur-3xl md:block"
          style={{ background: '#22d3ee' }}
        />
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Socials />
        </main>
        <Footer />
      </div>
    </div>
  )
}