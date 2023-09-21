const { MongoClient } = require('mongodb');

async function run() {
  const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = 'testing';
  const collectionName = 'users';

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const users = [
    {
      id: 1,
      name: 'ariska',
      age: 20,
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(users);

    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }

  await client.close();
}

run().catch(console.dir);
