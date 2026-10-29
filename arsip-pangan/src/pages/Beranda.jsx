import { useState, useMemo } from 'react'
import foods from '../data/foods.json'
import KartuMakanan from '../components/KartuMakanan'
import styles from '../styles/Beranda.module.css'

// Hitung jumlah pulau unik untuk statistik hero
const jumlahPulau = [...new Set(foods.map((f) => f.pulau))].length
const jumlahDaerah = [...new Set(foods.map((f) => f.daerah))].length

function Beranda() {
  // State untuk pencarian – diisi peserta
  const [query, setQuery] = useState('')

  // State untuk filter daerah – diisi peserta
  const [filterDaerah, setFilterDaerah] = useState('')

  // State untuk filter bahan – diisi peserta
  const [filterBahan, setFilterBahan] = useState('')

  // TODO: implementasikan logika filter dan pencarian berdasarkan query, filterDaerah, dan filterBahan
  // Saat ini seluruh data ditampilkan tanpa filter.
  const hasilFilter = foods

  // TODO: tampilkan daftar makanan hasil filter
  // (saat ini menampilkan semua makanan tanpa pencarian/filter)

  return (
    <>
      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>🍛 Arsip Pangan Nusantara</h1>
          <p className={styles.heroSub}>
            Dokumentasi kekayaan kuliner tradisional dari berbagai penjuru Indonesia
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statAngka}>{foods.length}</span>
              <span className={styles.statLabel}>Makanan</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statAngka}>{jumlahDaerah}</span>
              <span className={styles.statLabel}>Daerah</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statAngka}>{jumlahPulau}</span>
              <span className={styles.statLabel}>Pulau</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Filter Bar --- */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <span className={styles.filterLabel}>Filter:</span>
          {/* TODO: ganti elemen-elemen placeholder di bawah ini dengan komponen pencarian
              dan filter yang sebenarnya (input teks, dropdown daerah, dropdown bahan). */}
          <input
            className={styles.filterPlaceholder}
            type="text"
            placeholder="Cari makanan... (belum diimplementasikan)"
            disabled
          />
          <input
            className={styles.filterPlaceholder}
            type="text"
            placeholder="Filter daerah... (belum diimplementasikan)"
            disabled
          />
        </div>
      </div>

      {/* --- Daftar Makanan --- */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Semua Makanan</h2>
          <span className={styles.jumlahLabel}>
            Menampilkan {hasilFilter.length} makanan
          </span>
        </div>

        <div className={styles.grid}>
          {hasilFilter.map((makanan) => (
            <KartuMakanan
              key={makanan.id}
              makanan={makanan}
              isFavorit={false}
              onToggleFavorit={() => {
                // TODO: implementasikan toggle favorit dan simpan ke localStorage
              }}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Beranda
