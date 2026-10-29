import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.brandIcon}>📚</span>
          <div>
            <span className={styles.brandName}>Pustaka Cerita</span>
            <span className={styles.brandSub}>Cerita Rakyat Interaktif Anak</span>
          </div>
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            🏠 Beranda Cerita
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
