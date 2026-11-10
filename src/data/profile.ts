// ────────────────────────────────────────────────────────────
//  DATA PROFIL — ganti isi di file ini sesuai data kamu.
//  Cari tulisan "GANTI" untuk tahu bagian mana yang harus diubah.
// ────────────────────────────────────────────────────────────
import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Kyuza', // GANTI DENGAN NAMAMU
  role: 'Full-Stack Developer', // GANTI DENGAN JABATAN
  roles: [
    'Full-Stack Developer',
    'Creative Front-End',
    'Web3 Enthusiast',
    'Problem Solver',
  ], // teks bergantian di hero
  bio: 'Saya developer yang suka membangun aplikasi web dan web3 — dari kasir POS, toko online, sampai bot otomatisasi. Fokus pada tampilan yang bersih, cepat, dan kode yang rapi. Senang bereksperimen dengan teknologi baru dan mengubah ide jadi produk yang beneran jalan.',
  photo: './images/profile.jpg',
  cvUrl: '#', // GANTI: link CV / resume (misal Google Drive)
  location: 'Indonesia', // GANTI: lokasimu
}