# 🚀 Hackathon Starter Repositories

Repositori ini berisi **3 proyek starter frontend React** yang disiapkan untuk hackathon mahasiswa (durasi koding ~5 jam, tim 2-3 orang). 

Setiap proyek merupakan aplikasi web yang **sudah dapat dijalankan langsung** dengan styling responsif, navigasi routing, dan data awal, namun bagian logika intinya sengaja belum ditulis untuk diselesaikan oleh peserta.

---

## 📦 Daftar Proyek

| No | Folder Proyek | Tema & Nama Aplikasi | Fokus Fitur yang Harus Diselesaikan |
|:--:|:---|:---|:---|
| 1 | [`arsip-pangan/`](./arsip-pangan) | **Arsip Pangan Tradisional Nusantara** | Pencarian teks, filter daerah/bahan, halaman detail `/makanan/:id`, dan fitur favorit (`localStorage`). |
| 2 | [`jejak-sampah/`](./jejak-sampah) | **Pelacak Jejak Sampah Harian Anak Kos** | Form input sampah harian, penyimpanan `localStorage`, visualisasi grafik mingguan (`Chart.js`), dan kalkulator skor kos hijau. |
| 3 | [`cerita-rakyat/`](./cerita-rakyat) | **Pustaka Cerita Rakyat Interaktif untuk Anak** | Logika navigasi alur bercabang di `/cerita/:id`, rendering tombol pilihan aksi, dan status akhir cerita (ending). |

---

## 🛠 Spesifikasi Teknis Bersama

Seluruh proyek dibangun dengan arsitektur yang konsisten dan mudah dipahami:
- **Build Tool**: Vite + React (JavaScript standar, tanpa TypeScript).
- **Arsitektur**: 100% Frontend (tanpa database dan backend terpisah).
- **Data Layer**: Berkas data statis `.json` terstruktur dan penyimpanan persisten sisi klien via browser `localStorage`.
- **Styling**: Vanilla CSS & CSS Modules murni (tanpa framework eksternal) dengan desain visual ramah pengguna dan mobile-responsive.
- **Routing**: `react-router-dom` v6.
- **Visualisasi** *(Khusus Proyek 2)*: `chart.js` dan `react-chartjs-2` (sudah terkonfigurasi).
- **Bahasa Antarmuka**: 100% Bahasa Indonesia.

---

## 🏃 Cara Menjalankan Proyek

Setiap folder proyek bersifat independen (*standalone*). Pilih salah satu proyek yang akan dikerjakan oleh tim, lalu buka terminal:

```bash
# Contoh untuk proyek Arsip Pangan:
cd arsip-pangan
npm install
npm run dev

# Contoh untuk proyek Jejak Sampah:
cd jejak-sampah
npm install
npm run dev

# Contoh untuk proyek Cerita Rakyat:
cd cerita-rakyat
npm install
npm run dev
```

Buka URL lokal yang muncul pada terminal (biasanya `http://localhost:5173`) di peramban web Anda.

---

## 📂 Struktur Folder Umum

Tiap proyek mengikuti konvensi tata letak berkas yang seragam:

```
nama-proyek/
├── src/
│   ├── components/    # Komponen reusable (Navbar, Kartu, dsb.)
│   ├── pages/         # Halaman utama aplikasi (routing)
│   ├── data/          # Berkas data statis JSON
│   ├── styles/        # Berkas global CSS dan CSS Modules
│   ├── App.jsx        # Root component dan konfigurasi Routes
│   └── main.jsx       # Entry point Vite & ReactDOM
├── index.html
├── vite.config.js
├── package.json
└── README.md          # Petunjuk spesifik tiap studi kasus
```

---

## ⏱ Panduan Estimasi Waktu (5 Jam Koding)

Untuk tim 2-3 orang:
1. **Jam 1 (Eksplorasi & Pembagian Tugas)**:
   - Jalankan proyek, pahami data JSON dan struktur komponen yang ada.
   - Baca berkas `README.md` pada proyek terkait dan bagi tugas MVP.
2. **Jam 2 - 4 (Implementasi MVP)**:
   - Selesaikan bagian berkode `// TODO: ...` yang tercantum.
   - Sambungkan state lokal / `localStorage` dengan antarmuka pengguna.
3. **Jam 4.5 - 5 (Penyempurnaan & Fitur Bonus)**:
   - Uji responsivitas di resolusi mobile.
   - Tambahkan animasi halus atau fitur bonus opsional.
   - Jalankan `npm run build` untuk memastikan tidak ada kesalahan kompilasi sebelum dikumpulkan.
