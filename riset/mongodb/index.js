const { MongoClient } = require('mongodb');
const { insertMany, insertOne } = require('./oprations/ExampleInsert');
const { findMany, findOne, findOneWith } = require('./oprations/ExampleFind');

async function run() {
  const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = 'testing';
  const collectionName = 'users';

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  // await insertMany(collection);
  // await insertOne(collection);
  // await findMany(collection);
  // await findOne(collection);
  await findOneWith(collection);

  await client.close();
}

run().catch(console.dir);
