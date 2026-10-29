import { Link } from 'react-router-dom'
import styles from '../styles/KartuCerita.module.css'

/**
 * Komponen KartuCerita – menampilkan ringkasan cerita rakyat
 *
 * Props:
 *   cerita {object} – objek cerita dari cerita.json
 */
function KartuCerita({ cerita }) {
  return (
    <article className={styles.kartu}>
      <div className={styles.banner}>
        <span className={styles.sampul}>{cerita.sampul}</span>
        <span className={styles.asalBadge}>📍 Asal: {cerita.asal}</span>
      </div>

      <div className={styles.body}>
        <h2 className={styles.judul}>{cerita.judul}</h2>
        <span className={styles.tema}>✨ {cerita.tema}</span>
        <p className={styles.ringkasan}>{cerita.ringkasan}</p>
      </div>

      <div className={styles.footer}>
        <Link to={`/cerita/${cerita.id}`} className={styles.btnMulai}>
          Mulai Petualangan 🚀
        </Link>
      </div>
    </article>
  )
}

export default KartuCerita
