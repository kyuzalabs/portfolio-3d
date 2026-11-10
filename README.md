# Kyuza — Portofolio 3D Interaktif ⚡

Website portofolio satu halaman bergaya **gelap futuristik** dengan **kartu foto 3D interaktif** (bisa digerakkan & diputar pakai mouse / layar sentuh). Dibangun premium, ringan, responsif 360px–1920px.

## Tech Stack
- **React + Vite + TypeScript**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` (kartu foto 3D, latar bintang)
- **Framer Motion** (animasi masuk saat scroll, tilt kartu project)
- **Tailwind CSS v4** (tema gelap + aksen neon cyan `#22D3EE` & ungu `#8B5CF6`)
- **lucide-react** (ikon)

## Cara Menjalankan (lokal)

```bash
npm install        # install dependency
npm run dev        # mode development → http://localhost:5173
npm run build      # build produksi → folder dist/
npm run preview    # pratinjau hasil build
```

## Mengubah Foto & Data (tanpa ngoding)
Semua konten ada di `src/data/` — edit file, simpan, refresh:
- **Foto profil:** ganti file `public/images/profile.jpg` (nama file sama)
- `src/data/profile.ts` — nama, jabatan, bio, teks ketik, link CV
- `src/data/skills.ts` — kelompok skill
- `src/data/experience.ts` — riwayat pengalaman & pendidikan
- `src/data/projects.ts` — daftar project (judul, deskripsi, tag, link demo/GitHub)
- `src/data/socials.ts` — link sosial media

Setiap file ada penanda `// GANTI` pada bagian yang perlu diubah.

## Fitur
- **Hero + kartu foto 3D:** foto di kartu berbingkai neon, melayang, miring mengikuti kursor, bisa diputar (drag/touch) lalu spring balik; fallback 2D jika WebGL mati.
- **Latar bintang 3D** yang bereaksi lembut ke kursor.
- **Tentang:** bio + skill berkelompok.
- **Pengalaman:** timeline interaktif bercahaya.
- **Project:** grid + tilt 3D saat hover, filter kategori, modal detail.
- **Sosial & Kontak:** ikon glow + form kontak (fallback `mailto:`; siap diganti Formspree/EmailJS).
- **Navbar glass sticky** + smooth scroll + penanda aktif + hamburger di HP.
- **Kursor kustom** (desktop), hormati `prefers-reduced-motion`.

## Cara Deploy
1. **Vercel/Netlify:** sambungkan repo, build command `npm run build`, output `dist`.
2. **GitHub Pages:** jalankan `bash deploy.sh` (build lalu push `dist` ke branch gh-pages).

## Struktur Folder

```
src/
  data/            # profile, skills, experience, projects, socials (semua konten)
  components/      # Hero, PhotoCard3D, Starfield, Navbar, About, Experience, Projects, Socials, Footer
  hooks/           # useTypewriter
  lib/             # device.ts (deteksi WebGL/mobile)
  types.ts
```