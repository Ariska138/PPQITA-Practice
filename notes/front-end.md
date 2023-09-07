# Front End

bagaimana membuat tampilan frontend

- buat folder `public` di root
- buat tampilan html sederhana di dalam public `index.html`
- tambahkan di app.js
  `app.use(express.static('public'));` // Serve static files from the public directory
- untuk root api ubah dari `/` menjadi `/api` atau lebih spesifik `/api/user`
