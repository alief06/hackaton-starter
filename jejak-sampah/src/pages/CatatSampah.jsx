/**
 * Halaman Catat Sampah – /catat
 *
 * Halaman ini belum diimplementasikan.
 * Peserta harus melengkapi halaman ini dengan form input catatan harian.
 */
function CatatSampah() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 800,
          marginBottom: '0.5rem',
        }}
      >
        ✏️ Catat Sampah Hari Ini
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        Masukkan berat sampah yang kamu hasilkan hari ini dalam gram.
      </p>

      {/* TODO: buat form input catatan sampah harian dengan field:
          - tanggal (date picker)
          - organik (gram, angka)
          - plastik (gram, angka)
          - kertas (gram, angka)
          Lalu simpan catatan ke localStorage dengan key "catatan-sampah" */}

      <div
        style={{
          background: '#f0fdf4',
          border: '2px dashed #86efac',
          borderRadius: 14,
          padding: '2.5rem',
          textAlign: 'center',
          color: '#9ca3af',
        }}
      >
        <p style={{ fontSize: '2rem' }}>📝</p>
        <p style={{ marginTop: '0.5rem' }}>
          Form input catatan sampah belum diimplementasikan.
          <br />
          Tambahkan form di sini dan simpan ke localStorage.
        </p>
      </div>
    </div>
  )
}

export default CatatSampah
