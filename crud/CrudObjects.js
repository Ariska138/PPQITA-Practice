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
  const index = bank.findIndex((value) => value.id === id);
  // mengubah data berdasarkan id
  bank[index] = { id, name: value };
  // mengembalikan seluruh data yg telah diubah
  return bank;
};

const deleteData = (bank, id) => {
  const index = bank.findIndex((value) => value.id === id);

  bank.splice(index, 1);
  return bank;
};

module.exports = { createData, findById, updateData, deleteData, findByName };
