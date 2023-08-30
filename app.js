const express = require('express');

const app = express();

app.use(express.json());
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
  console.log(req.body);
  let name = req.body.name;

  res.send('Assalamualaikum kak ' + name);
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
