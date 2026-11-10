import { Section, Reveal, SectionTitle } from './Section'
import { skillGroups } from '../data/skills'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="tentang">
      <SectionTitle eyebrow="tentang saya" title="Siapa saya" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <Reveal>
          <p className="leading-relaxed text-ink-2">{profile.bio}</p>
          <p className="mt-4 leading-relaxed text-ink-2">
            Saya percaya teknologi terbaik adalah yang terasa sederhana di tangan pengguna.
            Selain menulis kode, saya suka bereksperimen dengan web3 dan membangun alat
            yang benar-benar menghemat waktu.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {skillGroups.map((g) => (
              <div key={g.group} className="glass rounded-2xl p-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-cyan">
                  {g.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink-2 transition hover:border-cyan hover:text-cyan"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}