const { MongoClient } = require('mongodb');
const { insertMany, insertOne } = require('./oprations/ExampleInsert');
const {
  findMany,
  findOne,
  isIdExist,
  findWithQuerySpesific,
} = require('./oprations/ExampleFind');
const { updateById } = require('./oprations/ExampleUpdate');
const { deteleById, deleteById } = require('./oprations/ExampleDelete');

async function run() {
  const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = 'testing';
  const collectionName = 'users';

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  // @todo 1: menghapus semua data dengan nilai akhir adalah []
  let dataRes = await findMany(collection);
  // console.log('dataRes: ', dataRes);

  for (const data of dataRes) {
    await deleteById(collection, data.id);
  }
  let dataRes2 = await findMany(collection);
  // console.log('dataRes2: ', dataRes2);

  // @todo 2: melakukan crud pada data baru
  let myData = [
    {
      id: 1,
      name: 'mufid',
      age: 20,
    },
    {
      id: 2,
      name: 'hidayat',
      age: 25,
    },
    {
      id: 3,
      name: 'samsul',
      age: 23,
    },
  ];

  // 1. menyiapkan data
  const dataRes3 = await insertMany(collection, myData);
  // 2. melakukan pengecekan data ketika data ada
  // await isIdExist(collection, 2);
  // 3. melakukan pencekan ketika data tidak ada
  const isIdExisted = await isIdExist(collection, 4);
  console.log('isIdExisted: ', isIdExisted);

  // const dataRes3 = await insertMany(collection, myData);
  // const dataRes4 = await updateById(collection, 2, { name: 'shofia' });
  // const dataRes5 = await deleteById(collection, 3);
  // const dataRes6 = await findMany(collection);

  // console.log('data akhir: ', dataRes6);
  /** tidak perlu ditulis
   * data akhir:  [
  {
    _id: new ObjectId("6513b168f42071bdfef2176d"),
    id: 1,
    name: 'ariska',
    age: 20
  },
  {
    _id: new ObjectId("6513b168f42071bdfef2176e"),
    id: 2,
    name: 'shofia',
    age: 25
  }
]
   */

  await client.close();
}

run().catch(console.dir);
