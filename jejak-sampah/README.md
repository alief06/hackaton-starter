# Jejak Sampah Harian – Pelacak Sampah Anak Kos

> **Starter Project Hackathon** – Aplikasi pelacak sampah harian berbasis web untuk penghuni kos

## 📖 Studi Kasus

Sampah rumah tangga adalah masalah nyata bagi penghuni kos yang sering kali tidak menyadari seberapa banyak sampah yang mereka hasilkan setiap hari. Tim kamu ditugaskan membangun **Jejak Sampah Harian** — aplikasi yang membantu penghuni kos mencatat, memantau, dan mengurangi sampah harian mereka dengan cara yang menyenangkan.

Data contoh 14 hari dan 12 tips pengurangan sampah sudah tersedia. Chart.js sudah ter-register. Tugasmu adalah membangun fitur input, visualisasi grafik, dan sistem skor.

---

## 🗂 Struktur Folder

```
jejak-sampah/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ✅ Sudah jadi
│   │   ├── KartuRingkasan.jsx   ✅ Sudah jadi (menampilkan total dari data contoh)
│   │   └── chartSetup.js        ✅ Chart.js sudah ter-register
│   ├── pages/
│   │   ├── Beranda.jsx          ⚠️  Sebagian (ringkasan berfungsi; grafik & skor belum ada)
│   │   ├── CatatSampah.jsx      ❌  Perlu diimplementasikan
│   │   └── Tips.jsx             ✅ Sudah jadi
│   ├── data/
│   │   ├── tips.json            ✅ 12 tips pengurangan sampah
│   │   └── contoh-catatan.json  ✅ 14 hari data contoh
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.module.css
│   │   ├── KartuRingkasan.module.css
│   │   └── Beranda.module.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka browser di `http://localhost:5173`

---

## 🏗 MVP yang Harus Dibangun (Fitur Wajib)

Berikut bagian yang **sengaja belum diimplementasikan** dan harus diselesaikan tim:

### 1. ✏️ Form Input Catatan Sampah
- Form di halaman `/catat` dengan field: tanggal, berat organik (gram), berat plastik (gram), berat kertas (gram).
- Tombol simpan yang menyimpan catatan ke `localStorage` (key: `"catatan-sampah"`).
- Validasi dasar: tanggal wajib diisi, minimal salah satu kategori berat > 0.
- Lokasi: `src/pages/CatatSampah.jsx`

### 2. 💾 Penyimpanan ke localStorage
- Baca dan tulis catatan ke `localStorage`.
- Data di halaman Beranda harus menggunakan data dari localStorage (bukan hanya data contoh).
- Lokasi: `src/pages/Beranda.jsx` dan `src/pages/CatatSampah.jsx`

### 3. 📊 Grafik Mingguan
- Grafik batang atau garis (bar/line chart) menggunakan `react-chartjs-2`.
- Menampilkan berat organik, plastik, dan kertas per hari dalam 7 hari terakhir.
- `chartSetup.js` sudah mengurus registrasi Chart.js — cukup import file tersebut.
- Lokasi: `src/pages/Beranda.jsx`

### 4. 🏆 Skor "Kos Paling Hijau"
- Hitung skor berdasarkan total sampah dan proporsi plastik (semakin sedikit plastik = skor lebih tinggi).
- Tampilkan skor sebagai angka, label (Hijau/Sedang/Merah), dan peringkat deskriptif.
- Lokasi: `src/pages/Beranda.jsx`

---

## ⭐ Fitur Bonus (Opsional)

- **Edit & Hapus Catatan** – Memungkinkan pengguna mengubah atau menghapus catatan yang sudah tersimpan.
- **Ekspor CSV** – Tombol unduh data catatan dalam format CSV.
- **Perbandingan Minggu** – Bandingkan total sampah minggu ini vs minggu lalu.
- **Notifikasi Pengingat** – Ingatkan pengguna untuk mencatat setiap malam (menggunakan browser notification API).

---

## 📝 Catatan Teknis

- Chart.js sudah ter-register di `src/components/chartSetup.js`. Cukup `import '../components/chartSetup.js'` sebelum menggunakan komponen chart.
- Gunakan komponen `Bar` atau `Line` dari `react-chartjs-2`.
- localStorage key untuk catatan: `"catatan-sampah"` (array JSON).
- Tidak ada backend — semua data dari JSON statis dan `localStorage`.
