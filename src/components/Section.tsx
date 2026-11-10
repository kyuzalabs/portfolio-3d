import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 md:px-6 md:py-28 ${className ?? ''}`}
    >
      {children}
    </section>
  )
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <Reveal className="mb-10">
      {eyebrow && <p className="font-mono text-sm text-cyan">// {eyebrow}</p>}
      <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">{title}</h2>
    </Reveal>
  )
}