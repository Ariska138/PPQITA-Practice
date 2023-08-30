const express = require('express');

const app = express();

/**
 * req adalah singkatan dari request yg isi yg dikirimkan oleh client.
 * contoh seperti body, parameter, query
 * res adalah singkatan dari responss yang isinya kita kirim ke client.
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

// biar bisa running
app.listen(3000, () => {
  console.log('Hai Dev, Servermu udah jalan di http://localhost:3000');
});
// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c
