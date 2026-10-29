# Arsip Pangan Tradisional Nusantara

> **Starter Project Hackathon** – Aplikasi dokumentasi kekayaan kuliner tradisional Indonesia

## 📖 Studi Kasus

Indonesia memiliki ratusan makanan tradisional dari berbagai daerah yang terancam terlupakan di era modern. Tim kamu ditugaskan membangun aplikasi **Arsip Pangan Tradisional Nusantara** — sebuah perpustakaan digital interaktif yang memungkinkan pengguna menjelajahi, mencari, dan menyimpan makanan tradisional favorit mereka.

Data 18 makanan dari berbagai pulau di Indonesia sudah tersedia. Tugasmu adalah membangun fitur-fitur yang membuatnya bisa dicari, difilter, dan dijelajahi dengan nyaman.

---

## 🗂 Struktur Folder

```
arsip-pangan/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ✅ Sudah jadi
│   │   └── KartuMakanan.jsx  ✅ Sudah jadi
│   ├── pages/
│   │   ├── Beranda.jsx       ⚠️  Sebagian (filter & pencarian belum ada)
│   │   └── DetailMakanan.jsx ❌  Perlu diimplementasikan
│   ├── data/
│   │   └── foods.json        ✅ Data 18 makanan
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.module.css
│   │   ├── KartuMakanan.module.css
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

Berikut adalah bagian yang **sengaja belum diimplementasikan** dan harus diselesaikan tim:

### 1. 🔍 Pencarian Real-time
- Input teks di halaman Beranda yang memfilter daftar makanan secara langsung (real-time) berdasarkan nama makanan.
- Lokasi: `src/pages/Beranda.jsx`

### 2. 🗺 Filter Daerah & Bahan
- Dropdown atau tombol filter untuk memilih berdasarkan daerah asal atau bahan utama.
- Filter bisa dikombinasikan dengan pencarian teks.
- Lokasi: `src/pages/Beranda.jsx`

### 3. 📄 Halaman Detail `/makanan/:id`
- Menampilkan seluruh informasi makanan: sejarah (paragraf), daftar bahan lengkap, langkah-langkah cara membuat, dan tingkat kesulitan.
- Routing sudah terdaftar di `App.jsx`.
- Lokasi: `src/pages/DetailMakanan.jsx`

### 4. ❤ Fitur Favorit
- Tombol favorit di `KartuMakanan` dan halaman detail.
- Status favorit disimpan di `localStorage` (key: `"favorit-pangan"`).
- Halaman Beranda menampilkan jumlah favorit di navbar atau header.
- Lokasi: `src/components/KartuMakanan.jsx`, `src/pages/DetailMakanan.jsx`, dan `App.jsx`.

---

## ⭐ Fitur Bonus (Opsional)

- **Halaman `/favorit`** – Menampilkan daftar makanan yang telah difavoritkan.
- **Filter berdasarkan pulau** – Mengelompokkan makanan berdasarkan pulau (Jawa, Sumatera, dll.).
- **Urutkan** – Opsi mengurutkan makanan berdasarkan nama A-Z, daerah, atau tingkat kesulitan.
- **Animasi transisi** – Halaman detail dengan animasi masuk yang halus.
- **Bagikan ke Media Sosial** – Tombol salin link atau bagikan ke WhatsApp.

---

## 📝 Catatan Teknis

- Data makanan ada di `src/data/foods.json` — jangan ubah struktur field.
- Gunakan CSS Modules (sudah disiapkan) atau tambahkan file CSS baru.
- Routing menggunakan `react-router-dom` v6.
- Tidak ada backend — semua data dari JSON statis dan `localStorage`.
