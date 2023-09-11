const handler = async (m) => {
  const hari = new Date().getDay(); // Mendapatkan hari saat ini (0 untuk Minggu, 1 untuk Senin, dst.)

  let jadwal = '';

  switch (hari) {
    case 0: // Minggu
      jadwal = 'lu.';
      break;
    case 1: // Senin
      jadwal = 'Hari ini adalah Senin.\nPelajaran:\n1. Matematika\n2. Bahasa Inggris\n3. Sejarah';
      break;
    case 2: // Selasa
      jadwal = 'Hari ini adalah Selasa.\nPelajaran:\n1. Fisika\n2. Kimia\n3. Bahasa Indonesia';
      break;
    case 3: // Rabu
      jadwal = 'Hari ini adalah Rabu.\nPelajaran:\n1. Biologi\n2. Olahraga\n3. Seni';
      break;
    case 4: // Kamis
      jadwal = 'Hari ini adalah Kamis.\nPelajaran:\n1. Geografi\n2. Ekonomi\n3. Sosiologi';
      break;
    case 5: // Jumat
      jadwal = 'Hari ini adalah Jumat.\nPelajaran:\n1. Matematika\n2. Bahasa Inggris\n3. Agama';
      break;
    case 6: // Sabtu
      jadwal = 'Hari ini adalah Sabtu.\nPelajaran:\n1. Komputer\n2. Bahasa Jepang\n3. Musik';
      break;
  }

  m.react('🕘');
  m.reply(jadwal);
}

handler.command = /^(asu)$/i;

export default handler;