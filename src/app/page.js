import KartuProdi from "@/components/KartuProdi";
import PengumumanKampus from '@/components/PengumumanKampus';
export default function HalamanEksperimen() {

  const daftarProdi = [
    {
      id: 1,
      namaProdi: 'Teknologi Informasi (TI)',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Full-Stack Web Developer, Cloud Engineer, Mobile App Developer'
    },
    {
      id: 2,
      namaProdi: 'Mekatronika & Robotika',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Automation Engineer, IoT Specialist, Robotics Programmer'
    },
    {
      id: 3,
      namaProdi: 'Bisnis Digital & Bahasa Jepang',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Digital Marketer, IT Bridge Engineer (BrSE) Jepang, Business Analyst'
    }
  ];

    const listPengumuman = [
    { id: 1, judul: "Pendaftaran Beasiswa Berprestasi Gelombang 2 Dibuka", tanggal: "29 Oktober 2026", kategori: "Penting" },
    { id: 2, judul: "Jadwal Ujian Tengah Semester (UTS) Ganjil", tanggal: "02 November 2026", kategori: "Akademik" },
    { id: 3, judul: "Pemilihan Ketua BEM Periode Terbaru", tanggal: "05 November 2026", kategori: "Kemahasiswaan" }
  ];


  // 1. Kita cetak pesan rahasia menggunakan console.log
  console.log("🚀 HALO DARI SERVER! Pesan ini muncul di mana ya?");

  // 2. Kita ambil informasi waktu dan sistem operasi tempat kode ini berjalan
  const waktuRender = new Date().toLocaleTimeString('id-ID');
  const versiNodeServer = process.version; // Mengambil versi Node.js di komputer server

  return (
   <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 20px' }}>
      {/* Bagian Hero Banner */}
      <section style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '36px',
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <h1 style={{ margin: '0 0 12px 0', fontSize: '28px' }}>
          Selamat Datang di Portal Akademik Politeknik Takumi
        </h1>
        <p style={{ margin: 0, fontSize: '16px', color: '#dbeafe' }}>
          Mencetak talenta teknologi siap kerja dengan kurikulum berbasis industri dan arsitektur web modern.
        </p>
      </section>

      {/* Bagian Daftar Program Studi */}
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pilihan Program Studi Unggulan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {daftarProdi.map((item) => (
          <KartuProdi
            key={item.id}
            namaProdi={item.namaProdi}
            jenjang={item.jenjang}
            akreditasi={item.akreditasi}
            prospekKarir={item.prospekKarir}
          />
        ))}
      </div>
      <br/>

      <h2>Pengumuman Kampus</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {listPengumuman.map((pengumuman) => (
          <PengumumanKampus
            key={pengumuman.id}
            judul={pengumuman.judul}
            tanggal={pengumuman.tanggal}
            kategori={pengumuman.kategori}
          />
        ))}
      </div>
      {/* <PengumumanKampus daftarPengumuman={listPengumuman} /> */}
    </main>
  );
}