import { Section, Reveal, SectionTitle } from './Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="pengalaman">
      <SectionTitle eyebrow="perjalanan" title="Pengalaman & Pendidikan" />
      <div className="relative">
        <span className="absolute bottom-2 left-2 top-2 w-px bg-line" aria-hidden />
        {experience.map((e, i) => {
          const color = e.type === 'education' ? '#8b5cf6' : '#22d3ee'
          return (
            <Reveal key={e.id} delay={i * 0.05} className="relative mb-9 pl-10">
              <span
                className="absolute left-2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full"
                style={{ background: color, boxShadow: `0 0 14px ${color}` }}
                aria-hidden
              />
              <p className="font-mono text-xs text-ink-3">{e.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-cyan">
                {e.org} · {e.type === 'education' ? 'Pendidikan' : 'Kerja'}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2">{e.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-ink-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}