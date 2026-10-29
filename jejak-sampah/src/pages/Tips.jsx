import tips from '../data/tips.json'

const warnaBadge = {
  Plastik: { bg: '#dbeafe', text: '#1d4ed8' },
  Organik: { bg: '#dcfce7', text: '#15803d' },
  Kertas:  { bg: '#fef9c3', text: '#854d0e' },
  Umum:    { bg: '#f3f4f6', text: '#374151' },
}

function Tips() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem 3rem' }}>
      <h1
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 800,
          marginBottom: '0.25rem',
        }}
      >
        💡 Tips Kurangi Sampah
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        12 tips praktis yang bisa langsung diterapkan di kehidupan kos-kosanmu.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {tips.map((tip) => {
          const warna = warnaBadge[tip.kategori] || warnaBadge.Umum
          return (
            <div
              key={tip.id}
              style={{
                background: '#ffffff',
                borderRadius: 14,
                padding: '1.25rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <span style={{ fontSize: '1.75rem' }}>{tip.icon}</span>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.15rem 0.55rem',
                    borderRadius: 999,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: warna.bg,
                    color: warna.text,
                    marginBottom: '0.4rem',
                  }}
                >
                  {tip.kategori}
                </span>
                <h3
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#1c1c1c',
                    lineHeight: 1.3,
                  }}
                >
                  {tip.judul}
                </h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.55 }}>
                {tip.deskripsi}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tips
