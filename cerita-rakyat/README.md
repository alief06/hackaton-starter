# Pustaka Cerita Rakyat Interaktif untuk Anak

> **Starter Project Hackathon** – Aplikasi baca dongeng nusantara interaktif bercabang

## 📖 Studi Kasus

Cerita rakyat nusantara sarat akan nilai moral, kecerdikan, dan budaya lokal. Namun, anak-anak masa kini kerap merasa bosan dengan buku cerita yang statis dan linier. Tim kamu ditugaskan membangun **Pustaka Cerita Rakyat Interaktif untuk Anak** — aplikasi di mana pembaca cilik dapat memilih tindakan tokoh favorit mereka dan mengarahkan jalannya cerita ke berbagai akhir yang tak terduga!

Data 2 cerita rakyat dengan struktur bercabang (minimal 8 bagian, minimal 3 titik percabangan, dan beragam akhir) sudah tersedia. Kartu cerita dan routing sudah siap. Tugasmu adalah menghidupkan pengalaman membaca interaktif di halaman `/cerita/:id`!

---

## 🎨 Tema Visual

- **Warna Cerah**: Oranye, kuning hangat, toska, dan putih ceria.
- **Huruf Besar & Terbaca**: Tipografi ramah anak yang mudah dibaca di layar smartphone dan tablet.
- **Tombol Besar**: Elemen tombol tebal dan ramah sentuhan jemari anak-anak.

---

## 🗂 Struktur Folder

```
cerita-rakyat/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ✅ Sudah jadi
│   │   └── KartuCerita.jsx   ✅ Sudah jadi
│   ├── pages/
│   │   ├── DaftarCerita.jsx  ✅ Sudah jadi
│   │   └── BacaCerita.jsx    ⚠️  Perlu diimplementasikan
│   ├── data/
│   │   └── cerita.json       ✅ 2 cerita rakyat interaktif lengkap
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.module.css
│   │   ├── KartuCerita.module.css
│   │   ├── DaftarCerita.module.css
│   │   └── BacaCerita.module.css
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

### 1. 📖 Logika Membaca & Navigasi Antar Bagian Cerita
- Kelola state bagian cerita yang sedang aktif (dimulai dari `cerita.bagianAwal`).
- Saat pengguna memilih opsi tindakan, alur berpindah ke bagian dengan `id` yang sesuai (`idTujuan`).
- Lokasi: `src/pages/BacaCerita.jsx`

### 2. 🔀 Tampilan Pilihan Tindakan
- Render daftar tombol pilihan (`pilihan`) dengan teks yang jelas dan tombol berukuran besar.
- Menekan tombol pilihan memicu perpindahan ke bagian cerita berikutnya.
- Lokasi: `src/pages/BacaCerita.jsx`

### 3. 🏁 Penanda Akhir Cerita
- Ketika sebuah bagian tidak lagi memiliki pilihan (`pilihan: []`), tampilkan penanda bahwa cerita telah selesai (tamat).
- Sediakan tombol besar "Mulai Ulang Cerita" atau "Pilih Cerita Lain" agar anak dapat mengulang dan mencoba alur lainnya.
- Lokasi: `src/pages/BacaCerita.jsx`

---

## ⭐ Fitur Bonus (Opsional)

- **Riwayat Jejak Pilihan** – Breadcrumb atau daftar pilihan yang telah diambil pembaca di sepanjang jalan cerita.
- **Efek Suara / Audio Narasi** – Web Speech API (`speechSynthesis`) untuk membacakan teks cerita secara otomatis.
- **Galeri Akhir Cerita (Badge Koleksi)** – Kartu koleksi yang menandai akhir mana saja yang sudah berhasil dibuka anak (disimpan di `localStorage`).
- **Animasi Pergantian Bab** – Efek membalik halaman buku saat berpindah bagian cerita.

---

## 📝 Catatan Teknis

- Data cerita berada di `src/data/cerita.json` — seluruh `idTujuan` sudah tervalidasi dan terhubung.
- Routing sudah terkonfigurasi di `src/App.jsx` (`/cerita/:id`).
- Gunakan CSS Modules atau Vanilla CSS yang telah disediakan.
- Tidak ada backend — seluruh alur murni berjalan di frontend.
