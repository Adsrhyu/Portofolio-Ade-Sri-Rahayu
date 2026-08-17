# Portofolio Profesional — Ade Sri Rahayu

Selamat datang di repositori portofolio resmi **Ade Sri Rahayu** (Mahasiswa S1 Pendidikan Ekonomi, Universitas Siliwangi — IPK 3.82 / 4.00). Repositori ini telah dirancang dengan arsitektur modern berbasis **React 18, Tailwind CSS, dan Modular Component Structure**, siap pakai dan siap dikembangkan lebih lanjut.

---

## 🌟 Fitur Utama Portofolio

1. **Desain Elegan & Tipografi Kontras Tinggi**:
   - Memadukan font modern **Plus Jakarta Sans** (teks tajam, sangat mudah dibaca, standar WCAG) dan **Playfair Display** (judul mewah).
   - Menghilangkan warna font yang samar/pudar, digantikan dengan kontras tegas (*Dark Slate* & *Rose Velvet*).
2. **Kategori & Showcase Portofolio Interaktif**:
   - Filter proyek: *Semua*, *Kewirausahaan*, *Keuangan*, *Desain & Branding*, *Edukasi*.
   - Pop-up **Modal Detail Proyek** (latar belakang inisiatif, perangkat kerja, dan metrik hasil terukur).
3. **Showcase Sertifikat & Lisensi Formal**:
   - Menampilkan pencapaian organisasi (HMJ DIKMI), kepanitiaan nasional (RAKERNAS), pelatihan literasi digital, dan workshop FOE.
4. **Interactive Curriculum Vitae (CV) Viewer & Print**:
   - Pratinjau CV profesional dalam format siap cetak/simpan PDF (*One-Click Print/PDF Export*).
5. **Direct WhatsApp Chat & Fast Contact**:
   - Tombol kirim pesan langsung via WhatsApp (`wa.me/6285603475908`), formulir interaktif, dan tombol salin nomor/email satu-klik.
6. **Dark / Light Mode**:
   - Pilihan tema *Soft Rose Light* & *Velvet Midnight Dark*.
7. **Elemen Ornamen Interaktif**:
   - Partikel mengambang halus dengan efek parallax dan opsi toggle On/Off.

---

## 📁 Struktur Folder Proyek

```plaintext
Portofolio/
├── index.html                  # File utama (Langsung dibuka via double-click di browser)
├── package.json                # Dependensi React, Vite, Tailwind CSS, Lucide
├── vite.config.js              # Konfigurasi Vite bundler
├── tailwind.config.js          # Konfigurasi token warna, font, dan shadow
├── postcss.config.js           # Konfigurasi PostCSS
├── README.md                   # Dokumentasi proyek
├── src/
│   ├── App.jsx                 # Root component & state modal/tema
│   ├── main.jsx                # Entry point Vite React
│   ├── data/
│   │   └── portfolioData.js    # Data profil, skill, organisasi, proyek, sertifikat
│   ├── styles/
│   │   └── main.css            # Stylesheet utama, glassmorphism, & print rules
│   └── components/
│       ├── Navbar.jsx          # Navigasi responsif & dark mode toggle
│       ├── Hero.jsx            # Banner perkenalan & ilustrasi avatar
│       ├── Stats.jsx           # Counter prestasi & data ringkas
│       ├── About.jsx           # Profil komitmen, nilai kerja, & info kontak
│       ├── Skills.jsx          # Visualisasi hard & soft skills
│       ├── Experience.jsx      # Timeline pendidikan, organisasi, & kepanitiaan
│       ├── Projects.jsx        # Galeri proyek & filter kategori
│       ├── Certificates.jsx    # Galeri sertifikat penghargaan
│       ├── ProjectModal.jsx    # Pop-up modal detail proyek
│       ├── CVModal.jsx         # Pop-up modal Curriculum Vitae & print
│       ├── Contact.jsx         # Formulir & integrasi WhatsApp
│       ├── InteractiveDecorations.jsx # Ornamen interaktif
│       └── Footer.jsx          # Footer & tombol kembali ke atas
├── CV/                         # Folder penyimpanan berkas PDF CV
├── Proyek/                     # Folder dokumentasi berkas karya
├── Sertifikat/                 # Folder arsip sertifikat
└── Dokumen Pendukung/          # Folder berkas transkrip nilai & surat rekomendasi
```

---

## 🚀 Cara Menjalankan

### Cara 1: Buka Langsung (Tanpa Install Apa pun / Zero-Config)
1. Cukup klik ganda (double-click) file **`index.html`** pada folder ini.
2. File akan langsung terbuka di peramban (Chrome, Edge, Firefox) dengan tampilan penuh, animasi, modal, dan filter yang langsung aktif 100%!

### Cara 2: Menjalankan via Node.js / Vite (Development Mode)
Jika Anda memiliki Node.js terpasang:
```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk produksi
npm run build
```

---

## ✏️ Cara Mengubah Data Portofolio
Seluruh data (nama, bio, foto, riwayat kepanitiaan, proyek, sertifikat, nomor kontak) tersimpan rapi di:
- **`src/data/portfolioData.js`** dan disinkronkan pada **`index.html`**.
Anda cukup mengedit teks di file tersebut untuk memperbarui data portofolio kapan saja!
