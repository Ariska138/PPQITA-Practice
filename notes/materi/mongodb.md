1. duplication `memory-storage-gateway.js`, udah nama menjadi `mongodb-gateway.js`
2. hapus function2 dari `CrudObject.js` 
3. buat function koneksi ke db dengan nama `connectionDB`
```js
let collection;

// dipanggil di app.js
const connectionDB = async () => {
const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

const client = new MongoClient(uri);

await client.connect();

const dbName = 'development';
const collectionName = 'users';

const database = client.db(dbName);
collection = database.collection(collectionName);
};
```
4. panggil function yg ada di riset mongodb ke function sudah tersedia ( dan tambahkan `async` di function)

```js
const savingData = async (name, age) => {
  try {
    let id = Math.ceil(Math.random() * 1000);
    await insertOne(collection, { id, name, age });
  } catch (error) {
    console.log('error pada saving data: ', error);
  }
};

const showAllData = async () => {
  let data = [];
  try {
    data = await findMany(collection);
  } catch (error) {
    console.log('error pada show all data: ', error);
  } finally {
    return data;
  }
};
```
4. panggil connection db di `app.js`
```js
const { connectionDB } = require('./gateways/mongodb-gateway');
connectionDB();
```
5. panggil function mongodb gateway di handler dengan menambahkan `async`, `trycatch` dan `await`.

```js
    await savingData(realNameRes.data, realAgeRes.data); 

    res.send({ data: await showAllData() });
```
