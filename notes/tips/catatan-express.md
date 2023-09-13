
# Catatan Express.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="24" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  height="24"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="24" />
          
          
          
          
Merangkum semua hal tentang express js 

## ketika run test api, maka konflik pada port
Dicari: Bagaimana agar bisa jalan dan efisient?

### Solusi 1:
- Close server local, kemudian baru jalankan test api
  #### catatan:
  - tutup server <br>
  `ctrl+c`
  - jalanin server <br>
  `npm run dev` atau `npm run start`
  

### Solusi 2:
- Mengubah port server local dari `3000` menjadi `3001`. karena port yg digunakan oleh `smartest` adalah `3000`.

ubah pada `app.js`
```js
// biar bisa running
const port = 3001;

const server = app.listen(port, () => {
  console.log('Hai Dev, Servermu udah jalan di http://localhost:' + port); // IP:127.0.0.1 -> domain=> localhost
});
// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c

module.exports = server;

```

### Rekomendasi: 
**Solusi 2**