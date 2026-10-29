import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.brandIcon}>♻️</span>
          <span className={styles.brandName}>Jejak Sampah</span>
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Dasbor
          </NavLink>
          <NavLink
            to="/catat"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            ✏️ Catat
          </NavLink>
          <NavLink
            to="/tips"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            💡 Tips
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
