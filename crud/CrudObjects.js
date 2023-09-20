const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};

const findByName = (bank, name) => {
  return bank.find((value) => value.name.includes(name));
};

const updateData = (bank, id, value) => {
  // mencari index [0,1,2,...]
  if (typeof id === 'string') {
    id = parseInt(id);
  }
  const index = bank.findIndex((value) => value.id === id);
  // mengubah data berdasarkan id

  bank[index] = { ...bank[index], id, name: value };
  // mengembalikan seluruh data yg telah diubah
  return bank;
};

// id yg diinputkan bisa string atau number
const updateAllData = (bank, id, dataBaru) => {
  // pastikan variable adalah number
  if (typeof id === 'string') {
    id = parseInt(id);
  }
  // cari index berdasarkan id
  const index = bank.findIndex((value) => value.id === id);

  // ubah data bank berdasarkan index
  bank[index] = { ...bank[index], ...dataBaru }; // data lama direplace dengan data baru
  // {data} != {...data}
  // {data} = {data : {a,...}}
  // {...data} = {a,...}
  // {id} === {id:id}

  return bank;
};

const deleteData = (bank, id) => {
  const index = bank.findIndex((value) => {
    return value.id === id;
  });

  bank.splice(index, 1);
  return bank;
};

module.exports = {
  createData,
  findById,
  updateData,
  deleteData,
  findByName,
  updateAllData,
};
