// Todo 3: boleh jadi PR besok. duplikasi dari memory gateway kemudian ubah dari memory menjadi mongodb
// clue 1: hapus seluruh function dari CrudObject dan variable datamemory
// clue 2: sesuaikan parameter dengan fungtion mongodb yg telah dibuat

const { MongoClient } = require('mongodb');

const { insertOne } = require('../riset/mongodb/oprations/ExampleInsert');

let collection;

const initDB = async () => {
  const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = 'testing';
  const collectionName = 'users';

  const database = client.db(dbName);
  collection = database.collection(collectionName);
};

const savingData = async (name, age) => {
  try {
    let id = Math.ceil(Math.random() * 1000);
  } catch (error) {
    console.log('error pada saving data: ', error);
  }
};

const showAllData = () => {
  return dataMemory;
};

const getDataByName = (name) => {
  // return findByName(dataMemory, name);
};

const editNamaData = (id, name) => {
  // dataMemory = updateData(dataMemory, id, name);

  return dataMemory;
};

const editNamaUmurData = (id, name, age) => {
  // dataMemory = updateAllData(dataMemory, id, { name, age });

  return dataMemory;
};

const isIdExist = (id) => {
  // return checkId(dataMemory, id);
};

const removeData = (id) => {
  // ubah ke integer dari string
  if (typeof id === 'string') {
    id = parseInt(id);
  }

  // dataMemory = deleteData(dataMemory, id);

  return dataMemory;
};

module.exports = {
  savingData,
  showAllData,
  editNamaData,
  removeData,
  getDataByName,
  editNamaUmurData,
  isIdExist,
};
