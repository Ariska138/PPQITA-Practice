// contoh api untuk menerima data
const express = require('express');
const { generateRandomToken } = require('./randomToken');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

let users = [
  { id: 1, username: 'root', password: 'root', name: 'Admin', token: '' },
  { id: 2, username: 'root2', password: '1234', name: 'Admin 2', token: '' },
  { id: 3, username: 'root3', password: '1122', name: 'Admin 3', token: '' },
];
app.post('/api/daftar', (req, res) => {
  // @todo3 menambah user baru

  let { body } = req;

  //cek data yg dibutuhkan dari client
  if (!body || !body.username) {
    return res.status(400).json({ error: true, message: 'harus ada username' });
  }

  if (!body || !body.password) {
    return res.status(400).json({ error: true, message: 'harus ada password' });
  }

  if (!body || !body.name) {
    return res.status(400).json({ error: true, message: 'harus ada nama' });
  }

  // melakukan pengecekan apakah username sudah digunakan atau belum
  const username = users.find((user) => user.username === body.username);

  if (username) {
    return res
      .status(400)
      .json({ error: true, message: 'username sudah pernah digunakan' });
  }

  // data yg dibutuhkan oleh server yg dibuat secara otomatis
  const id = uuidv4();
  const token = '';

  // 3. jika data sudah lengkap, maka data disimpan
  users.push({
    id,
    name: body.name,
    username: body.username,
    password: body.password,
    token,
  });

  // 4. beritahu ke client bawah data/akun sudah berhasil dibuat. kirimkan data yg dibutuhkan client

  return res.status(201).json({ message: 'Anda berhasil terdaftar' });
});

app.post('/api/logout', (req, res) => {
  // @todo2 hapus token, jika sebelumnya ada kasih tahu "berhasil logout", jika sebelumnya kosong maka kasih tahu "sudah logout"
  // 1. cek token yg diinputkan
  const { body } = req;

  if (!body || !body.token) {
    return res
      .status(400)
      .json({ error: true, message: 'token tidak ditemukan' });
  }
  // 2. cek token didatabase
  let idxUser = users.findIndex((user) => user.token === body.token);
  // 3. jika token ada maka token dihapus dan beritahu client bahwa berhasil logout
  if (idxUser >= 0) {
    users.splice(idxUser, 1);
    return res.status(200).json({ message: 'Anda berhasil logout' });
  }
  // 4. jika token tidak ada maka beritahu client bahwa user sudah logout
  return res.status(400).json({ message: 'token tidak ditemukan' });
});

app.post('/api/cektoken', (req, res) => {
  // @todo1 cek apa token atau tidak, jika ada kirimkan true, jika tidak kirimkan false
  // 1. pengecekan data input
  const { body } = req;

  if (!body || !body.token) {
    return res
      .status(400)
      .json({ error: true, message: 'token tidak ditemukan' });
  }
  // 2. pencarian data berdasarkan token yg diinputkan
  let user = users.find((user) => user.token === body.token);
  // 3. jika ketemu mengirimkan ke client
  if (user) {
    return res.status(200).json({
      data: { id: user.id, username: user.username, name: user.name },
    });
  }
  // 4. jika tidak ketemu maka menginfokan ke client bahwa token tidak valid
  return res.status(400).json({ error: true, message: 'token tidak valid' });
});

app.post('/api/login', (req, res) => {
  console.log(req.body);

  let body = req.body;

  // validasi data yg sederhana
  if (!body || !body.username) {
    return res.status(400).json({ error: true, message: 'harus ada username' });
  }

  if (!body || !body.password) {
    return res.status(400).json({ error: true, message: 'harus ada password' });
  }

  // @bagaimana mencocokan data dari yg diinput dengan yg sudah tersimpan
  index = users.findIndex((data) => {
    return data.username === body.username && data.password === body.password;
  });

  if (index >= 0) {
    // bikin token yg sederhana
    const token = generateRandomToken(20);
    users[index].token = token;
    return res.send({ token, message: 'berhasil login' });
  }

  return res
    .status(401)
    .json({ error: true, message: 'username or password not found' });
});

app.listen(3000, () => {
  console.log('server run in http://localhost:3000');
});
