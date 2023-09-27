const findMany = async (collection) => {
  try {
    const dataRes = await collection.find().toArray();

    console.log(`findMany documents successfully inserted.\n`, dataRes);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

const findOne = async (collection) => {
  try {
    const dataRes = await collection.findOne();

    console.log(`findMany documents successfully inserted.\n`, dataRes);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

const findOneWithQuery = async (collection) => {
  try {
    const dataRes = await collection.findOne({ age: 25 });

    console.log(`findMany documents successfully inserted.\n`, dataRes);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

const findOneWithQuerySpesific = async (collection) => {
  try {

    const dataRes = await collection.findOne({ age: { $gt: 20 } });

    console.log(`findMany documents successfully inserted.\n`, dataRes);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

module.exports = {
  findMany,
  findOne,
  findOneWithQuery,
  findOneWithQuerySpesific,
};
