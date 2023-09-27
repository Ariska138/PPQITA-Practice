const findMany = async (collection) => {
  try {
    const dataRes = await collection.find().toArray();

    return dataRes;
  } catch (err) {
    console.error(`Something went wrong trying to read the documents: ${err}`);
  }
};

const findOne = async (collection) => {
  try {
    const dataRes = await collection.findOne();

    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

const findOneWithQuery = async (collection) => {
  try {
    const dataRes = await collection.findOne({ id: 3 });
    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

const findWithQuerySpesific = async (collection) => {
  // ingin mencari siswa yg mimiliki umur 24 tahun
  try {
    const dataRes = await collection.find({ age: { $gt: 24 } }).toArray();

    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

module.exports = {
  findMany,
  findOne,
  findOneWithQuery,
  findWithQuerySpesific,
};
