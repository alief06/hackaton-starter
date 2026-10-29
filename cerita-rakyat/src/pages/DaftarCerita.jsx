import ceritaList from '../data/cerita.json'
import KartuCerita from '../components/KartuCerita'
import styles from '../styles/DaftarCerita.module.css'

function DaftarCerita() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroIcon}>🌈</span>
          <h1 className={styles.heroTitle}>Pustaka Cerita Rakyat Interaktif</h1>
          <p className={styles.heroSub}>
            Pilih cerita rakyat nusantara kesukaanmu dan tentukan sendiri jalan ceritanya!
          </p>
        </div>
      </section>

      <main className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Pilih Cerita Favoritmu</h2>
          <p className={styles.sectionDesc}>
            Setiap pilihan yang kamu buat akan membawa cerita ke akhir yang berbeda!
          </p>
        </div>

        <div className={styles.grid}>
          {ceritaList.map((cerita) => (
            <KartuCerita key={cerita.id} cerita={cerita} />
          ))}
        </div>
      </main>
    </>
  )
}

export default DaftarCerita
