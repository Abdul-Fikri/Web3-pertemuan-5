export default function PengumumanKampus({ judul, tanggal, kategori }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #cbd5e1",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      <span
        style={{
          backgroundColor: "#dbeafe",
          color: "#1e40af",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {tanggal}
      </span>

      <h3 style={{ marginTop: "12px", marginBottom: "8px", color: "#0f172a" }}>
        {judul}
      </h3>


          <span
            style={{
              backgroundColor:
                kategori === "Penting"
                  ? "#ef4444"
                  : kategori === "Akademik"
                    ? "#3b82f6"
                    : "#10b981",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {kategori}
          </span>

      {/* <p style={{ fontSize: '14px', color: '#475569', marginBottom: 0 }}>
        <strong>Kategori:</strong> {kategori}
      </p> */}
    </div>
  );
}

// MATERI

// // src/components/PengumumanKampus.js
// export default function PengumumanKampus({ daftarPengumuman }) {
//   return (
//     <div style={{ marginTop: '30px', padding: '20px', borderTop: '1px solid #ccc' }}>
//       <h2>Pengumuman Akademik</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
//         {daftarPengumuman.map((item, index) => (
//           <div key={index} style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
//             <span style={{
//               backgroundColor: item.kategori === 'Penting' ? '#ef4444' : item.kategori === 'Akademik' ? '#3b82f6' : '#10b981',
//               color: 'white',
//               padding: '4px 8px',
//               borderRadius: '4px',
//               fontSize: '12px',
//               fontWeight: 'bold'
//             }}>
//               {item.kategori}
//             </span>
//             <span style={{ marginLeft: '10px', color: '#6b7280', fontSize: '14px' }}>{item.tanggal}</span>
//             <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: '500' }}>{item.judul}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
