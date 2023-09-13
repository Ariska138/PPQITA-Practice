# Catatan Debugging
Bagaimana menemunkan solusi dari Error

## Pahami Masalahnya
- Error / Aplikasi berhenti / tidak jalan
- Jalan tetapi hasil tidak sesuai

## Solusi Error:
- Baca pesan error di terminal
- cek info kesalahannya, 
- kesalahan terjadi bisa karena typo, tidak menemukan function, tidak meneumkan error
- cek di `google`/`stackoverflow` atau chatgpt dengan copy seluruh error (catatan: penggunaan chatgpt, ada perusahaan IT yg melarang menggunaannya karena takut terambil datanya)

## Solusi hasil tidak sesuai / Error (jika cara diatas tidak jalan):
- tracking error dari file yg pertama dijalankan. misal `app.js`
- kemudian cek masing-masing fungsi dengan `ctrl + klik`
- jika masih belum menemukan error, cek data yg masuk dengan menampilkan di `console.log(nilai1, nilai2, 'tag lokasi')`
- jika sudah selesai errornya. hapus seluruh `console.log` 

