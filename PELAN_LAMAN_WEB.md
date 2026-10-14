# 🏫 PELAN PEMBANGUNAN LAMAN WEB RASMI SK SUNGAI MAS (JHEOA), KUANTAN, PAHANG

> **Identiti Sekolah:** Sekolah Kebangsaan Sungai Mas (JHEOA), Kuantan, Pahang Darul Makmur  
> **Kod Sekolah:** CBBA091 | **PPD:** Pejabat Pendidikan Daerah Kuantan | **JPN:** Jabatan Pendidikan Negeri Pahang  
> **Tema Visual:** *Ultra-Modern Frosted Glassmorphism, Emerald Forest & Royal Gold Glow, Deep Aurora Mesh Gradient*  
> **Moto:** "Berilmu, Berbudaya, Berbakti"  
> **Status:** Selesai Sepenuhnya & Beroperasi (100% Completed & Live)

---

## 1. 🎯 Objektif & Konsep Reka Bentuk

Laman web sekolah ini direka khas dengan gaya **Glassmorphism Premium** bertaraf antarabangsa yang memukau pandangan pertama (*wow factor*), padat dengan elemen interaktif, responsif untuk semua peranti (desktop, tablet, telefon pintar), serta mematuhi piawaian portal pendidikan moden Malaysia.

### Ciri-Ciri Khas Glassmorphism & UI/UX:
- **Frosted Glass Cards:** Menggunakan `backdrop-filter: blur(16px) saturate(180%)` dengan sempadan kaca lembut (`border: 1px solid rgba(255, 255, 255, 0.18)`).
- **Latar Belakang Aurora Mesh Gradient:** Animasi kecerunan warna terapung (*floating animated glowing orbs*) yang memberikan efek kedalaman (*depth perception*).
- **Floating Glass Navbar:** Navigasi terapung dengan status aktif bercahaya (*glow effect*), carian pintar (*smart search modal*), dan pensuisan mod tema (Gelap/Terang).
- **Interaktiviti Tinggi:**
  - Kad 3D tilt effect semasa kursor digerakkan.
  - Penapis dinamik (*filter system*) untuk galeri gambar & direktori staf.
  - Ticker pengumuman terkini (*live announcement ticker*).
  - Modal paparan penuh (*lightbox zoom*) untuk gambar aktiviti.
  - Kaunter statistik interaktif beranimasi (kiraan automatik bila diskrol).
  - Carta organisasi interaktif dengan butiran profil guru.

---

## 2. 📑 Struktur Halaman Utama (6 Modul Utama)

| Bil | Halaman | Fail | Kandungan Utama & Elemen Interaktif |
|---|---|---|---|
| **1** | **Muka Utama** | `index.html` | • Hero Section dengan butang CTA & kad kaca pengenalan<br>• Ticker Berita & Pengumuman Penting<br>• Perutusan Pengetua dengan tandatangan digital<br>• Kaunter Statistik (Murid, Guru, Kelab, Kejayaan)<br>• Pautan Pantas Rasmi (DELIMa, APDM, SPLKPM, SPBT, Portal SPM)<br>• Takwim Acara Terkini & Kalendar Mini interaktif<br>• Suapan Berita & Pencapaian Sekolah Terkini |
| **2** | **Pentadbiran** | `pentadbiran.html` | • Visi, Misi, Moto & Piagam Pelanggan<br>• Carta Organisasi Interaktif (Pengetua, PK Pentadbiran, PK HEM, PK Kokurikulum, GKMP)<br>• Direktori Guru & Anggota Kumpulan Pelaksana (AKP) dengan fungsi carian & penapis bidang<br>• Waktu Urusan Pejabat & Polisi Integriti Sekolah |
| **3** | **Kurikulum** | `kurikulum.html` | • 4 Bidang Akademik: Bahasa, Sains & Matematik, Sains Sosial, Teknik & Vokasional<br>• Program Peningkatan Akademik & Kelas Bimbingan SPM<br>• Takwim Peperiksaan & Pentaksiran Berasaskan Sekolah (PBD)<br>• Portal Pusat Sumber Digital & E-Bahan Pembelajaran |
| **4** | **Kokurikulum** | `kokurikulum.html` | • 3 Cabang Utama Kokurikulum:<br>&nbsp;&nbsp;1. Pasukan Badan Beruniform (KRS, Pengakap, Kadet Polis, BSMM, Bomba)<br>&nbsp;&nbsp;2. Kelab & Persatuan (Robotik, STEM, Komputer, Seni & Kebudayaan, Bahasa)<br>&nbsp;&nbsp;3. Sukan & Permainan (Bola Sepak, Badminton, Bola Jaring, Ping Pong, Olahraga)<br>• Jadual Latihan Mingguan interaktif mengikut hari/kumpulan<br>• Dewan Kemasyhuran Kokurikulum (Hall of Fame) & Arkib Pingat |
| **5** | **Hal Ehwal Murid (HEM)** | `hem.html` | • Struktur Badan Pengawas, Majlis Ketua Tingkatan (MKT) & Pembimbing Rakan Sebaya (PRS)<br>• Disiplin, Peraturan Sekolah & Panduan Sistem Sahsiah Diri Murid (SSDM)<br>• Unit Bimbingan & Kaunseling (UBK) dengan borang temujanji kaunseling interaktif<br>• Skim Bantuan Kebajikan (Biasiswa BAP, SPBT, RMT, EMK)<br>• Program Sekolah Selamat, Kesihatan & Kebersihan (3K) |
| **6** | **Galeri Gambar** | `galeri.html` | • Penapis Kategori Interaktif (Semua, Sukan, Akademik, Kebudayaan, Perkhemahan, Hari Guru)<br>• Grid Masonry Glassmorphism responsif<br>• Modal Lightbox interaktif (pandangan resolusi tinggi + navigasi seterusnya/sebelumnya)<br>• Video Sorotan Aktiviti Sekolah |

---

## 3. 🛠️ Seni Bina Teknologi & Struktur Fail

Menggunakan **HTML5 Semantik**, **CSS3 Moden (Vanilla CSS Glassmorphism)**, dan **JavaScript ES6+** tanpa kebergantungan luar yang berat agar sangat pantas, lancar dan mudah dikendalikan.

```text
Web Sekolah/
├── PELAN_LAMAN_WEB.md         # Dokumentasi pelan projek
├── index.html                 # Muka Utama
├── pentadbiran.html           # Pengurusan & Pentadbiran
├── kurikulum.html             # Akademik & Kurikulum
├── kokurikulum.html           # Pasukan, Kelab & Sukan
├── hem.html                   # Hal Ehwal Murid (HEM)
├── galeri.html                # Galeri Foto Interaktif Lightbox
├── css/
│   ├── glassmorphism.css      # Token reka bentuk kaca, warna, aurora glow & gradient
│   ├── style.css              # Susun atur asas, tipografi, navbar & footer
│   └── components.html.css    # Kad, tab, modal, jadual, lencana & butang
├── js/
│   ├── main.js                # Navigasi responsif, mod gelap, ticker, statistik beranimasi
│   ├── gallery.js             # Logik penapis kategori galeri & popup lightbox
│   └── interactive.js         # 3D Tilt effect, carian pantas, tab bertukar, accordion
└── assets/
    ├── images/                # Imej banner, logo sekolah, staf, aktiviti
    └── icons/                 # Ikon SVG moden
```

---

## 4. 🎨 Palet Warna & Rekaan Glassmorphism

| Elemen | Kod Warna / Nilai CSS | Peranan Visual |
|---|---|---|
| **Latar Belakang Gelap** | `#0a0f1d` hingga `#111827` | Memberi kontras tinggi untuk efek kaca bercahaya |
| **Warna Utama (Primary)** | `#3b82f6` (Sapphire Blue) & `#8b5cf6` (Electric Violet) | Identiti kecemerlangan ilmu dan teknologi |
| **Warna Aksen Emas** | `#f59e0b` / `#fbbf24` (Royal Amber) | Anugerah, pencapaian & logo rasmi |
| **Kaca Frosted (Cards)** | `rgba(255, 255, 255, 0.08)` (Gelap) / `rgba(255, 255, 255, 0.65)` (Terang) | Efek panel lutsinar moden |
| **Bayang & Sempadan** | `border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);` | Kedalaman 3D terapung |
| **Tipografi** | Google Fonts: `'Outfit'` (Tajuk) & `'Plus Jakarta Sans'` (Kandungan) | Bersih, profesional dan berkarisma |

---

## 5. 🚀 Fasa Pelaksanaan

1. **Fasa 1: Asas Sistem Reka Bentuk (Design System & Tokens)**
   - Penyediaan fail CSS `glassmorphism.css` dan `style.css` lengkap dengan pembolehubah CSS (*CSS custom properties*), efek aurora, kad kaca, butang neon/glow, dan tipografi.
2. **Fasa 2: Pembangunan Navigasi Bersama & Footer**
   - Floating glass navigation bar dengan logo, pautan ke 6 halaman, pemilih tema mod malam/siang, dan laci navigasi mudah alih (*mobile menu*).
3. **Fasa 3: Pembangunan Halaman Muka Utama (`index.html`)**
   - Hero banner, statistik interaktif beranimasi, perutusan pengetua, ticker berita, pautan pantas rasmi dan kalendar mini.
4. **Fasa 4: Pembangunan Halaman Pentadbiran & Kurikulum (`pentadbiran.html` & `kurikulum.html`)**
   - Carta organisasi guru interaktif, direktori staf dengan penapis, jadual waktu, program kecemerlangan dan modul PSS.
5. **Fasa 5: Pembangunan Halaman Kokurikulum & HEM (`kokurikulum.html` & `hem.html`)**
   - Kad unit beruniform, persatuan, kelab sukan, dewan anugerah, portal kaunseling interaktif, dan panduan sahsiah murid.
6. **Fasa 6: Pembangunan Galeri Gambar Interaktif (`galeri.html`)**
   - Penapis kategori segera (*instant filtering*), grid estetik, modal zoom lightbox dengan kawalan slaid seterusnya/sebelumnya.
7. **Fasa 7: Pengujian & Kemasan Akhir**
   - Ujian responsif pada paparan mudah alih, pengesahan kesan interaktif (*smooth scroll, 3D tilt, animation*), dan prestasi optimum.
