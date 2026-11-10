// ────────────────────────────────────────────────────────────
//  DATA PROJECT — contoh placeholder realistis, ganti dengan
//  project aslimu. Link demo/repo bisa kamu perbarui.
// ────────────────────────────────────────────────────────────
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'kasir-coffee',
    title: 'Kasir Coffee Shop (POS)',
    description: 'Aplikasi kasir POS untuk coffee shop — pilih menu, bayar (simulasi), struk otomatis, riwayat & pengaturan. PWA, jalan di HP & tablet.',
    longDescription:
      'Aplikasi kasir endpoint-to-end untuk coffee shop. Kasir bisa memilih menu dengan varian (ukuran, suhu, gula) dan tambahan, memproses pembayaran (tunai/QRIS/e-wallet/debit), lalu otomatis mendapat struk digital.',
    features: ['Katalog menu + varian & tambahan', 'Pembayaran simulasi (tunai, QRIS, e-wallet)', 'Struk otomatis + simpan PDF/bagikan', 'Riwayat & pengaturan', 'PWA jalan offline'],
    role: 'Full-stack — desain, logika, deploy',
    tags: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'PWA'],
    category: 'web',
    emoji: '☕',
    demoUrl: 'https://kyuzalabs.github.io/kasir-coffee/',
    repoUrl: 'https://github.com/kyuzalabs/kasir-coffee',
  },
  {
    id: 'kyuza-shop',
    title: 'Kyuza Shop — Top-up Game',
    description: 'Toko top-up game & voucher digital. Katalog 28 produk, keranjang, checkout crypto, dan admin panel pengelola stok.',
    longDescription:
      'Mini store yang dipivot jadi toko top-up game. Punya katalog produk, keranjang belanja, checkout (crypto), dan dashboard admin untuk kelola stok.',
    features: ['Katalog 28 produk / 7 kategori', 'Keranjang & checkout', 'Admin panel kelola stok', 'Desain futuristik ala marketplace'],
    role: 'Full-stack — build dari 0',
    tags: ['Flask', 'Python', 'SQLite', 'HTML/CSS', 'Crypto'],
    category: 'fullstack',
    emoji: '🛒',
    demoUrl: 'https://github.com/kyuzalabs/kasir-coffee', // GANTI: link demo toko
    repoUrl: 'https://github.com/kyuzalabs', // GANTI: link repo
  },
  {
    id: 'mint-radar',
    title: 'Mint Radar — Scanner NFT',
    description: 'Bot pemantau airdrop & mint NFT terbaru. Otomatis deteksi project free-mint dan katalog agentic di berbagai chain.',
    longDescription:
      'Sistem pemantau yang mengumpulkan project mint/airdrop NFT dari berbagai sumber, memfilter yang worth, lalu mencetak/mengeksekusi lewat wallet agentic.',
    features: ['Radar project mint/airdrop', 'Katalog agentic hub', 'Eksekusi via agentic wallet', 'Logging otomatis'],
    role: 'Builder — riset & otomasi',
    tags: ['Web3', 'Node.js', 'Automation', 'Telegram Bot'],
    category: 'other',
    emoji: '📡',
    demoUrl: 'https://github.com/kyuzalabs', // GANTI
    repoUrl: 'https://github.com/kyuzalabs', // GANTI
  },
  {
    id: 'crypto-dashboard',
    title: 'Crypto Dashboard',
    description: 'Dashboard pelacak harga & portofolio crypto dengan chart real-time dan notifikasi target harga.',
    longDescription:
      'Dashboard untuk memantau harga crypto, melacak portofolio, dan memberi notifikasi saat harga mencapai target tertentu.',
    features: ['Harga real-time', 'Chart interaktif', 'Notifikasi target harga', 'Portofolio tracker'],
    role: 'Full-stack — build dari 0',
    tags: ['React', 'Chart.js', 'REST API', 'TypeScript'],
    category: 'web',
    emoji: '📊',
    demoUrl: 'https://github.com/kyuzalabs', // GANTI
    repoUrl: 'https://github.com/kyuzalabs', // GANTI
  },
]

export const projectCategories = ['all', 'web', 'mobile', 'fullstack', 'other'] as const