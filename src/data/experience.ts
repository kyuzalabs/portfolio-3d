// ────────────────────────────────────────────────────────────
//  DATA PENGALAMAN & PENDIDIKAN — ganti sesuai riwayatmu.
// ────────────────────────────────────────────────────────────
import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer (Freelance)', // GANTI
    org: 'Kyuza Labs',
    period: '2024 — Sekarang',
    description:
      'Membangun aplikasi web & bot untuk klien: kasir POS coffee shop, toko top-up game, dashboard crypto, dan bot otomatisasi. Full siklus dari desain UI sampai deploy.',
    tech: ['React', 'TypeScript', 'Python', 'Tailwind', 'Flask'],
    type: 'work',
  },
  {
    id: 'exp-2',
    role: 'Web3 & Automation Builder', // GANTI
    org: 'Proyek Independen',
    period: '2023 — 2024',
    description:
      'Merancang bot untuk otomatisasi airdrop, scanner mint NFT, dan monitoring harga. Eksplorasi integrasi wallet agentic dan API game web3.',
    tech: ['Web3', 'Node.js', 'Telegram Bot', 'REST API'],
    type: 'work',
  },
  {
    id: 'exp-3',
    role: 'Peserta & Kontributor Open Source', // GANTI
    org: 'Komunitas Open Source',
    period: '2022 — 2023',
    description:
      'Kontribusi terjemahan dan dokumentasi pada proyek open source, belajar alur kerja kolaboratif lewat GitHub.',
    tech: ['Git', 'GitHub', 'Markdown'],
    type: 'work',
  },
  {
    id: 'edu-1',
    role: 'Belajar Otodidak — Software Engineering', // GANTI
    org: 'Online (self-paced)',
    period: '2021 — Sekarang',
    description:
      'Belajar full-stack development secara mandiri: JavaScript/TypeScript, React, Python, database, dan deployment.',
    tech: ['JavaScript', 'React', 'Python', 'SQL'],
    type: 'education',
  },
]