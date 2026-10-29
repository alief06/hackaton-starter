import { Link } from 'react-router-dom'
import styles from '../styles/KartuMakanan.module.css'

/**
 * KartuMakanan – menampilkan ringkasan satu makanan tradisional.
 *
 * Props:
 *   makanan  {object}  – objek data dari foods.json
 *   isFavorit {boolean} – apakah makanan ini sudah difavoritkan
 *   onToggleFavorit {function} – callback untuk toggle favorit
 */
function KartuMakanan({ makanan, isFavorit = false, onToggleFavorit }) {
  const kesultanClass =
    makanan.tingkatKesulitan === 'Mudah'
      ? styles.mudah
      : makanan.tingkatKesulitan === 'Sedang'
      ? styles.sedang
      : styles.sulit

  return (
    <article className={styles.kartu}>
      <div className={styles.header}>
        <h2 className={styles.nama}>{makanan.nama}</h2>
        <span className={styles.pulauBadge}>{makanan.pulau}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.daerah}>
          <span className={styles.daerahIcon}>📍</span>
          {makanan.daerah}
        </p>

        <span className={`${styles.kesulitan} ${kesultanClass}`}>
          {makanan.tingkatKesulitan}
        </span>

        <div className={styles.bahan}>
          {makanan.bahan.slice(0, 4).map((b) => (
            <span key={b} className={styles.bahanItem}>
              {b}
            </span>
          ))}
          {makanan.bahan.length > 4 && (
            <span className={styles.bahanItem}>
              +{makanan.bahan.length - 4} lainnya
            </span>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <Link to={`/makanan/${makanan.id}`} className={styles.linkDetail}>
          Lihat Detail →
        </Link>
      </div>
    </article>
  )
}

export default KartuMakanan
