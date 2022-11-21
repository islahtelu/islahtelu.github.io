const fakulJurusan = {
  "Fakultas Teknik Elektro": ["S1 Teknik Telekomunikasi", "S1 Teknik Elektro", "S1 Teknik Fisika", "S1 Teknik Komputer", "S1 Teknik Biomedis"],
  "Fakultas Rekayasa Industri": ["S1 Teknik Industri", "S1 Sistem Informasi", "S1 Teknik Logistik"],
  "Fakultas Informatika": ["S1 Informatika", "S1 Teknologi Informasi", "S1 Rekayasa Perangkat Lunak", "S1 PJJ Informatika", "S1 Sains Data"],
  "Fakultas Ekonomi dan Bisnis": ["S1 Manajemen Bisnis Telekomunikasi Informatika", "S1 Akuntansi"],
  "Fakultas Komunikasi dan Bisnis": ["S1 Administrasi Bisnis", "S1 Ilmu Komunikasi", "S1 Hubungan Masyarakat Digital"],
  "Fakultas Industri Kreatif": ["S1 Desain Komunikasi Visual", "S1 Desain Produk", "S1 Desain Interior", "S1 Kriya Tekstil dan Fashion", "S1 Seni Rupa"],
  "Fakultas Ilmu Terapan": [
    "D3 Teknologi Telekomunikasi",
    "D3 Rekayasa Perangkat Lunak Aplikasi",
    "D3 Sistem Informasi",
    "D3 Sistem Informasi Akuntansi",
    "D3 Teknologi Komputer",
    "D3 Manajemen Pemasaran",
    "D3 Perhotelan",
    "D4 Teknologi Rekayasa Multimedia",
  ],
};

window.onload = function () {
  const pilihFakultas = document.querySelector("#validationFakultas");
  const pilihJurusan = document.querySelector("#validationJurusan");

  pilihJurusan.disabled = true;

  for (let fakultas in fakulJurusan) {
    pilihFakultas.options[pilihFakultas.options.length] = new Option(fakultas, fakultas);
  }

  pilihFakultas.onchange = (e) => {
    pilihJurusan.disabled = false;

    pilihJurusan.length = 1;

    let jurusan = fakulJurusan[pilihFakultas.value];

    for (let i = 0; i < jurusan.length; i++) {
      pilihJurusan.options[pilihJurusan.options.length] = new Option(jurusan[i], jurusan[i]);
    }
  };
};
