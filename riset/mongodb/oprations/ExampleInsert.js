const insertMany = async (collection) => {
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
};

const insertOne = async (collection) => {
  const user = {
    id: 2,
    name: 'hidayat',
    age: 25,
  };

  try {
    const insertManyResult = await collection.insertOne(user);

    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

module.exports = { insertMany, insertOne };
