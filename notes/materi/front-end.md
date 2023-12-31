# Front End

bagaimana membuat tampilan frontend

- buat folder `public` di root
- buat tampilan html sederhana di dalam public `index.html`
- tambahkan di app.js
  `app.use(express.static('public'));` 
  digunakan untuk membaca seluruh folder `public` yang terdapat di `root`
- pada file `app.js` untuk root api ubah dari `/` menjadi lebih spesifik `/api/user`.
Contoh:<br>
dari
```js
app.get('/', getDataUserHandler);

```
menjadi
```js
app.get('/api/user', getDataUserHandler);

```
- update juga untuk `thunder client` sebelumnya hanya `http://localhost:3001` menjadi  `http://localhost:3001/api/user`
update juga untuk  `api testing` sebelumnya hanya `/`  menjadi `/api/user` 

## buat ui untuk Send data
- menggunakan tailwind

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
ref: https://tailwindcss.com/docs/installation/play-cdn

## buat Tampilan post dengan mengubah body menjadi
```html
<body class="bg-gray-100 p-4">
  <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h1 class="text-2xl font-semibold mb-4">Formulir Pengiriman Data</h1>
    <form id="dataForm">
      <div class="mb-4">
        <label for="nama" class="block text-gray-600">Nama:</label>
        <input type="text" id="nama" name="nama" class="w-full border rounded-md py-2 px-3"
          placeholder="Masukkan Nama Anda" required>
      </div>
      <div class="mb-4">
        <label for="umur" class="block text-gray-600">Umur:</label>
        <input type="number" id="umur" name="umur" class="w-full border rounded-md py-2 px-3"
          placeholder="Masukkan Umur Anda" required>
      </div>
      <div class="mt-4">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Kirim Data</button>
      </div>
    </form>
  </div>
 <script src="script.js"></script>
</body>
```
buat file baru dengan nama `script.js` di dalam folder `public`
```js
window.onload = () => { // dijalankan ketika semua halaman sudah berhasil di tampilkan
  document
    .getElementById('dataForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('nama').value;
      const age = document.getElementById('umur').value;

      // Ganti URL dengan URL API yang sesuai
      const apiUrl = 'http://localhost:3001/api/user';

      // Menggunakan Fetch API untuk mengirim data ke API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Manipulasi respons dari API sesuai kebutuhan Anda
          console.log('Respon dari API:', data);
        })
        .catch((error) => {
          console.error('Terjadi kesalahan:', error);
          alert('Terjadi kesalahan saat mengirim data ke API.');
        });
    });
};

```

- jalankan dengan `npm start` atau `npm run dev`
- untuk hasilnya buka `Console` pada browser dengan cara klik kanan pilih `Inspect`

Latihan
- Tambahkan tampilan untuk get, update, dan delete!
- untuk get, bisa dengan tombol atau otomatis berubah ketika ada perubahan data baik itu post, put atau delete.
- buat folder `create`, `edit`, `delete` di folder `public`. pindahkan file untuk post data yaitu `index.html` dan `script.js` ke dalam folder `create`. sedang untuk `get` berada di folder `public`
- Pastikan setiap post, update dan delete. list data juga terupdate!
- Pastikan semua terhubung dengan `rest api` yg telah dibuat
- pastikan semua `rest api` berjalan dengan baik di `thunder client` atau `testing api`!

referensi tugas
- https://tailwindcss.com/docs/border-collapse



Latihan
- Bagaimana menampilkan pesan error dengan alert bahwa nama tidak boleh angka? (besan dari backend)
- Bagaimana ketika terjadi error, tetap di halaman create!
  - biar tidak ganti halaman, comment dlu `window.open` biar tahu isi dari log
  - log bagian `data` di `frontEnd`
  - amati `structure object`
  - jika kondisi error, tampilkan pesannya lewat `alert`
    - gunakan `return` agar tidak menjalan baris berikutnya 
- (opsional)jika tidak ada error, hapus semua log! `(ctrl+shift+F)`

ref: 
menampilkan validasi yg gagal
```js
if (!isNaN(parseInt(name))) {
    return { error: true, message: 'nama tidak boleh pakai angka' };
  }
```
ke frontend