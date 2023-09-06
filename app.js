const express = require('express');
const { nameValidation } = require('./validation/validation');

const app = express();

app.use(express.json()); // agar support json
/**
 * req adalah singkatan dari request yg isi yg dikirimkan oleh client.
 * contoh seperti body, parameter, query
 * res adalah singkatan dari responss yang isinya kita kirim ke client.
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */
app.get('/', (req, res) => {
  res.send('Hello World'); // yg dikirimkan ke server
});

// membuat data
app.post('/', (req, res) => {
  // mengecek properties
  if (!req.body.name) {
    return res.send({ error: true, message: 'tidak memiliki paramater nama' });
  }
  // @todo pengecekan property umur

  // mengambil data nama
  // let name = req.body.name; // mengambil data name
  let { name } = req.body;
  // @todo pemanggilan data umur

  // melakukan validasi nama
  let realNameRes = nameValidation(name);
  // @todo melakukan validasi umur

  if (realNameRes.error) {
    return res.send(realNameRes);
  }
  // @todo lempar error umur
  // if ...

  res.send({ data: { name: realNameRes.data } }); // @todo menambahkan data umur yg sudah divalidasi
});

// update data
app.put('/', (req, res) => {
  res.send('update data');
});

// hapus data
app.delete('/', (req, res) => {
  res.send('delete data');
});

// biar bisa running
app.listen(3000, () => {
  console.log('Hai Dev, Servermu udah jalan di http://localhost:3000');
});
// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c
