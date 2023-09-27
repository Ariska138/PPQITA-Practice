const { MongoClient } = require('mongodb');
const { insertMany, insertOne } = require('./oprations/ExampleInsert');
const {
  findMany,
  findOne,
  findOneWithQuery,
  findWithQuerySpesific,
} = require('./oprations/ExampleFind');
const { updateById } = require('./oprations/ExampleUpdate');
const { deteleById } = require('./oprations/ExampleDelete');

async function run() {
  const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = 'testing';
  const collectionName = 'users';

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const dataRes = await findMany(collection);

  console.log('data pertama :', dataRes);

  const dataRes2 = await deteleById(collection);

  console.log('data respon delete: ', dataRes2);

  const dataRes3 = await findMany(collection);

  console.log('data respon setelah update: ', dataRes3);

  await client.close();
}

run().catch(console.dir);
