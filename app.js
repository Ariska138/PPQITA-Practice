const express = require('express');
const { nameValidation, ageValidation } = require('./validation/validation');

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
  // mengecek property name
  if (!req.body.name) {
    res.status(400);
    return res.send({ error: true, message: 'tidak memiliki paramater nama' });
  }
  // @todo pengecekan property umur
  if (!req.body.age) {
    res.status(400);
    return res.send({ error: true, message: 'tidak memiliki paramater umur' });
  }

  // mengambil data nama
  // let name = req.body.name; // mengambil data name
  let { name, age } = req.body;
  // @todo pemanggilan data umur

  // melakukan validasi nama
  let realNameRes = nameValidation(name);
  let realAgeRes = ageValidation(age);
  // @todo melakukan validasi umur

  if (realNameRes.error) {
    res.status(400);
    return res.send(realNameRes);
  }
  // @todo lempar error umur
  if (realAgeRes.error) {
    res.status(400);
    return res.send(realAgeRes);
  }

  res.send({ data: { name: realNameRes.data, age: realAgeRes.data } }); // @todo menambahkan data umur yg sudah divalidasi
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
