describe('Test latihan array object', () => {
  const siswa = [
    { nama: 'Alice', nilai: 95 },
    { nama: 'Bob', nilai: 88 },
    { nama: 'Charlie', nilai: 92 },
  ];

  const siswaKota = [
    { nama: 'Alice', kota: 'Jakarta' },
    { nama: 'Bob', kota: 'Bandung' },
    { nama: 'Charlie', kota: 'Jakarta' },
  ];

  //Fungsi yang akan digunakan: filter()
  test('Soal 1: Filter siswa dengan nilai lebih dari 90', () => {
    const hasil = filterSiswaDenganNilaiTinggi(siswa, 90);
    expect(hasil).toEqual([
      { nama: 'Alice', nilai: 95 },
      { nama: 'Charlie', nilai: 92 },
    ]);
  });

  //Fungsi yang akan digunakan: find()
  test('Soal 2: Cari siswa dengan nama "Bob"', () => {
    const hasil = cariSiswaDenganNama(siswa, 'Bob');
    expect(hasil).toEqual({ nama: 'Bob', nilai: 88 });
  });

  //Fungsi yang akan digunakan: every()
  test('Soal 3: Cek apakah semua siswa memiliki nilai di atas 80', () => {
    const hasil = cekSemuaNilaiDiAtas80(siswa);
    expect(hasil).toBe(true);
  });

  //Fungsi yang akan digunakan: sort()
  test('Soal 4: Urutkan siswa berdasarkan nilai', () => {
    const hasil = urutkanSiswaBerdasarkanNilai(siswa);
    expect(hasil).toEqual([
      { nama: 'Alice', nilai: 95 },
      { nama: 'Charlie', nilai: 92 },
      { nama: 'Bob', nilai: 88 },
    ]);
  });

  //Fungsi yang akan digunakan: map() dan join()
  test('Soal 5: Gabungkan alamat siswa', () => {
    const hasil = gabungkanAlamatSiswa(siswa);
    expect(hasil).toEqual('Jalan A, Jalan B, Jalan C');
  });

  //Fungsi yang akan digunakan: filter() dan length
  test('Soal 6: Hitung jumlah siswa dengan nilai lebih dari 90', () => {
    const hasil = hitungSiswaDenganNilaiTinggi(siswa, 90);
    expect(hasil).toBe(2);
  });

  //Fungsi yang akan digunakan: filter()
  test('Soal 7: Cari siswa dengan nama depan lebih dari 4 huruf', () => {
    const hasil = cariSiswaDenganNamaDepanPanjang(siswa, 4);
    expect(hasil).toEqual([
      { nama: 'Alice', nilai: 95 },
      { nama: 'Charlie', nilai: 92 },
    ]);
  });

  //Fungsi yang akan digunakan: filter()
  test('Soal 8: Filter siswa yang berasal dari Jakarta', () => {
    const hasil = filterSiswaDariKota(siswaKota, 'Jakarta');
    expect(hasil).toEqual([
      { nama: 'Alice', kota: 'Jakarta' },
      { nama: 'Charlie', kota: 'Jakarta' },
    ]);
  });

  //Fungsi yang akan digunakan: reduce()
  test('Soal 9: Hitung rata-rata nilai siswa', () => {
    const hasil = hitungRataRataNilai(siswa);
    expect(hasil).toBe(91.67); // Anda mungkin perlu menggunakan pembulatan sesuai kebijakan });
  });

  // Fungsi yang akan digunakan: sort()
  test('Soal 10: Sort dan balik siswa berdasarkan nilai', () => {
    const hasil = sortDanBalikSiswaBerdasarkanNilai(siswa);
    expect(hasil).toEqual([
      { nama: 'Bob', nilai: 88 },
      { nama: 'Charlie', nilai: 92 },
      { nama: 'Alice', nilai: 95 },
    ]);
  });
});
