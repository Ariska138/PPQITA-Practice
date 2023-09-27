const insertMany = async (collection) => {
  const users = [
    {
      id: 1,
      name: 'ariska',
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
};

const insertOne = async (collection) => {
  const user = {
    id: 4,
    name: 'bambang',
    age: 30,
  };

  try {
    const insertManyResult = await collection.insertOne(user);

    console.log(` document successfully inserted.\n`);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

module.exports = { insertMany, insertOne };
