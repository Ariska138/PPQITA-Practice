# Catatan Ringkas (30/08/23)

- install extention `Thunder Client`
- buat collection dengan nama `backend-ppqita`
- pada titik tiga di collection `backend-ppqita`, pilih `New Request` berinama `root-get`, url adalah `localhost:3000`
- jalankan server dengan `npm run start`
- jangan lupa simpan dengan `ctrl + s`
- jalankan dengan klik tombol `send`

## test secara manual dengan terminal

- pastikan menjalankan server secara terpisah
- untuk get
  `curl -X GET http://localhost:3000`
  untuk update
  `curl -X PUT http://localhost:3000`
  untuk tambah data
  `curl -X POST -H 'content-type: application/json' -d '{"name":"Ariska Hidayat", "age":20}' http://localhost:3000`
  untuk delete data
  `curl -X DELETE http://localhost:3000`

node:

- isi dari heading tidak sensitif case.
- flag sensitif case
- untuk data json, baik properties maupun value harus dalam tanda double kutip
- pastikan pada `app.js` menambahkan `app.use(express.json());`
- pastikan restart server ketika ingin melihat perubahan

## test otomatis menggunakan supertest

- install supertest
  `npm i -D supertest`
- import suppertest
  `const request = require('supertest');`
- import aplikasi express
  `const app = require('./app');`
- panggil aplikasi di supertest (contoh implementasinya)
  `const response = await request(app).get('/');`
- test status
  `expect(response.status).toBe(200);`
- test body
  `expect(response.body).toEqual({ message: 'Hello, World!' });`
- sendangkan untuk contoh post

```
 const data = { message: 'Test Message' };
    const response = await request(app)
      .post('/api/post')
      .send(data);
```

- jangan lupa menutup server setelah selesai proses

```
afterAll(() => {
    app.close(); // Menutup server setelah semua tes selesai
  });
```

nb:

- tidak perlu menjalankan server secara manual
- pada app.js, untuk app.listen harus di export agar tidak muncul warning/error

```
const server = app.listen(....
....
module.exports = server;

```
