import { useParams, Link } from 'react-router-dom'
import foods from '../data/foods.json'

/**
 * Halaman Detail Makanan – /makanan/:id
 *
 * Halaman ini belum diimplementasikan.
 * Peserta harus melengkapi halaman ini.
 */
function DetailMakanan() {
  const { id } = useParams()

  // Ambil data makanan berdasarkan id dari URL
  const makanan = foods.find((f) => f.id === id)

  if (!makanan) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <h2>😕 Makanan tidak ditemukan</h2>
        <p style={{ color: '#6b6b6b', marginTop: '0.5rem' }}>
          ID <code>{id}</code> tidak ada dalam data.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.6rem 1.5rem',
            background: '#c0392b',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <Link
        to="/"
        style={{ color: '#c0392b', fontWeight: 600, fontSize: '0.9rem' }}
      >
        ← Kembali
      </Link>

      <h1 style={{ fontFamily: 'Playfair Display, serif', marginTop: '1rem', fontSize: '2rem' }}>
        {makanan.nama}
      </h1>
      <p style={{ color: '#6b6b6b', marginBottom: '2rem' }}>
        📍 {makanan.daerah} • {makanan.pulau}
      </p>

      {/* TODO: tampilkan seluruh informasi detail makanan:
          sejarah, daftar bahan, cara membuat, tingkat kesulitan, dan tombol favorit */}

      <div
        style={{
          background: '#fdf6f0',
          border: '1px dashed #e8d5c4',
          borderRadius: 12,
          padding: '2rem',
          textAlign: 'center',
          color: '#aaa',
        }}
      >
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>📋</p>
        <p>
          Konten halaman detail belum diimplementasikan.
          <br />
          Tampilkan sejarah, bahan, cara membuat, dan tombol favorit di sini.
        </p>
      </div>
    </div>
  )
}

export default DetailMakanan
