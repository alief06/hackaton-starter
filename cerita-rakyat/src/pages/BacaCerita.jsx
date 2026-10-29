import { useParams, Link } from 'react-router-dom'
import ceritaList from '../data/cerita.json'
import styles from '../styles/BacaCerita.module.css'

function BacaCerita() {
  const { id } = useParams()

  // Cari cerita berdasarkan parameter URL
  const cerita = ceritaList.find((c) => c.id === id)

  if (!cerita) {
    return (
      <div className={styles.container} style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <p style={{ fontSize: '3rem' }}>😿</p>
        <h2>Cerita Tidak Ditemukan</h2>
        <p style={{ color: '#5f6c72', marginTop: '0.5rem' }}>
          Maaf, cerita dengan id <code>{id}</code> tidak ada di pustaka.
        </p>
        <Link to="/" className={styles.btnKembali} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          ← Kembali ke Pustaka
        </Link>
      </div>
    )
  }

  // TODO: buat state dan logika untuk membaca serta berpindah antar bagian cerita

  return (
    <div className={styles.container}>
      <div className={styles.navAtas}>
        <Link to="/" className={styles.btnKembali}>
          ← Pilih Cerita Lain
        </Link>
        <span style={{ fontSize: '1.8rem' }}>{cerita.sampul}</span>
      </div>

      <header className={styles.headerCerita}>
        <span className={styles.badgeAsal}>📍 Asal: {cerita.asal}</span>
        <h1 className={styles.judulCerita}>{cerita.judul}</h1>
      </header>

      {/* Kotak Membaca Cerita */}
      <div className={styles.bukuCard}>
        <div className={styles.placeholderBox}>
          <div className={styles.placeholderIcon}>📖</div>
          <h2 className={styles.placeholderTitle}>Petualangan Menantimu!</h2>
          <p className={styles.placeholderDesc}>
            Logika pembaca cerita belum diimplementasikan.
            <br />
            Silakan lengkapi bagian ini agar cerita dapat dibaca dan berpindah alur sesuai pilihan anak.
          </p>

          {/* TODO: tampilkan teks bagian cerita yang sedang aktif */}

          {/* TODO: tampilkan pilihan yang tersedia untuk bagian cerita saat ini */}

          {/* TODO: tampilkan penanda akhir cerita ketika pilihan sudah habis */}
        </div>
      </div>
    </div>
  )
}

export default BacaCerita
