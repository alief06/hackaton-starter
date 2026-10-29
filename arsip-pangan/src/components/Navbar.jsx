import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.brandIcon}>🍛</span>
          <div>
            <span className={styles.brandName}>Arsip Pangan</span>
            <span className={styles.brandSub}>Tradisional Nusantara</span>
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
            Beranda
          </NavLink>
          <NavLink
            to="/favorit"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            ❤ Favorit
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
