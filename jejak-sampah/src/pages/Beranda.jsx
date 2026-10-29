import { Link } from 'react-router-dom'
import contohCatatan from '../data/contoh-catatan.json'
import KartuRingkasan from '../components/KartuRingkasan'
import styles from '../styles/Beranda.module.css'

/**
 * Halaman Beranda / Dasbor utama.
 *
 * Yang sudah berfungsi:
 *   - KartuRingkasan menampilkan total dari data contoh
 *
 * Yang belum diimplementasikan:
 *   - Grafik mingguan
 *   - Skor "kos paling hijau"
 *   - Membaca catatan dari localStorage
 */
function Beranda() {
  // TODO: baca catatan dari localStorage dan gabungkan dengan contoh data,
  // atau ganti sepenuhnya dengan data dari localStorage bila sudah ada.
  // Saat ini KartuRingkasan menampilkan data dari contoh-catatan.json.
  const dataDitampilkan = contohCatatan

  return (
    <>
      {/* --- Hero --- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>♻️ Dasbor Jejak Sampahmu</h1>
          <p className={styles.heroSub}>
            Pantau sampah harianmu, kurangi jejak, dan jadilah penghuni kos paling hijau!
          </p>
          <div className={styles.heroActions}>
            <Link to="/catat" className={styles.btnPrimary}>
              ✏️ Catat Sampah Hari Ini
            </Link>
            <Link to="/tips" className={styles.btnSecondary}>
              💡 Baca Tips
            </Link>
          </div>
        </div>
      </section>

      {/* --- Konten Dasbor --- */}
      <div className={styles.content}>

        {/* Ringkasan Statistik – sudah berfungsi */}
        <h2 className={styles.sectionTitle}>📊 Ringkasan Data Contoh (14 Hari)</h2>
        <KartuRingkasan data={dataDitampilkan} />

        <hr className={styles.divider} />

        {/* --- Grafik Mingguan --- */}
        <h2 className={styles.sectionTitle}>📈 Grafik Sampah Mingguan</h2>
        <div className={styles.grafikPlaceholder}>
          <p style={{ fontSize: '2rem' }}>📊</p>
          <p>
            Grafik mingguan belum diimplementasikan.
            <br />
            Gunakan komponen <code>Bar</code> atau <code>Line</code> dari{' '}
            <code>react-chartjs-2</code> dan import <code>chartSetup.js</code>.
          </p>
          {/* TODO: tampilkan grafik batang mingguan sampah (organik, plastik, kertas) menggunakan react-chartjs-2 */}
        </div>

        <hr className={styles.divider} />

        {/* --- Skor Kos Hijau --- */}
        <h2 className={styles.sectionTitle}>🏆 Skor "Kos Paling Hijau"</h2>
        <div className={styles.skorPlaceholder}>
          <p style={{ fontSize: '2.5rem' }}>🌿</p>
          <p style={{ fontWeight: 600, color: '#374151', marginTop: '0.5rem' }}>
            Skor hijau belum dihitung
          </p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.3rem' }}>
            {/* TODO: hitung skor berdasarkan total sampah, tren penurunan, dan proporsi plastik */}
            Implementasikan formula skor dan tampilkan peringkat di sini.
          </p>
        </div>

      </div>
    </>
  )
}

export default Beranda
