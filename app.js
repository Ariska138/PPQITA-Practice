const express = require('express');
const { postDataUserHandler } = require('./handlers/post-data-user-handler');
const { getDataUserHandler } = require('./handlers/get-data-user-handler');
const { ubahDataUserHandler } = require('./handlers/ubah-data-user-handler');
const {
  deleteDataUserHandler,
} = require('./handlers/delete-data-user-handler');

const app = express();

app.use(express.json()); // agar support json
/**
 * req adalah singkatan dari request yg isi yg dikirimkan oleh client.
 * contoh seperti body, parameter, query
 * res adalah singkatan dari responss yang isinya kita kirim ke client.
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */
app.get('/', getDataUserHandler);

// membuat data
app.post('/', postDataUserHandler);

// update data
app.put('/', ubahDataUserHandler);

// hapus data
app.delete('/', deleteDataUserHandler);

// biar bisa running
const server = app.listen(3000, () => {
  console.log('Hai Dev, Servermu udah jalan di http://localhost:3000');
});
// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c

module.exports = server;
