import styles from '../styles/KartuRingkasan.module.css'

/**
 * KartuRingkasan – menampilkan ringkasan statistik sampah.
 *
 * Props:
 *   data  {Array}  – array catatan sampah harian (dari JSON atau localStorage)
 *
 * Komponen ini sudah menghitung total dari data yang diberikan
 * dan menampilkan kartu ringkasan untuk masing-masing kategori.
 */
function KartuRingkasan({ data }) {
  // Hitung total dari semua catatan yang diberikan
  const total = data.reduce(
    (acc, catatan) => ({
      organik: acc.organik + (catatan.organik || 0),
      plastik: acc.plastik + (catatan.plastik || 0),
      kertas: acc.kertas + (catatan.kertas || 0),
    }),
    { organik: 0, plastik: 0, kertas: 0 }
  )

  const totalKeseluruhan = total.organik + total.plastik + total.kertas

  const kartuData = [
    {
      key: 'total',
      label: 'Total Sampah',
      icon: '⚖️',
      angka: (totalKeseluruhan / 1000).toFixed(2),
      satuan: 'kg',
      subInfo: `${data.length} hari dicatat`,
      kelas: styles.total,
    },
    {
      key: 'organik',
      label: 'Organik',
      icon: '🥕',
      angka: total.organik,
      satuan: 'gram',
      subInfo: `${Math.round((total.organik / totalKeseluruhan) * 100) || 0}% dari total`,
      kelas: styles.organik,
    },
    {
      key: 'plastik',
      label: 'Plastik',
      icon: '🧴',
      angka: total.plastik,
      satuan: 'gram',
      subInfo: `${Math.round((total.plastik / totalKeseluruhan) * 100) || 0}% dari total`,
      kelas: styles.plastik,
    },
    {
      key: 'kertas',
      label: 'Kertas',
      icon: '📄',
      angka: total.kertas,
      satuan: 'gram',
      subInfo: `${Math.round((total.kertas / totalKeseluruhan) * 100) || 0}% dari total`,
      kelas: styles.kertas,
    },
  ]

  return (
    <div className={styles.wrapper}>
      {kartuData.map((item) => (
        <div key={item.key} className={`${styles.kartu} ${item.kelas}`}>
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
          <div>
            <span className={styles.angka}>{item.angka}</span>{' '}
            <span className={styles.satuan}>{item.satuan}</span>
          </div>
          <span className={styles.subInfo}>{item.subInfo}</span>
        </div>
      ))}
    </div>
  )
}

export default KartuRingkasan
