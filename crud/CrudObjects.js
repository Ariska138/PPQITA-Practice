const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};

const updateData = (bank, id, value) => {
  // mencari index [0,1,2,...]
  const index = bank.findIndex((value) => value.id === id);
  // mengubah data berdasarkan id
  bank[index] = { id, name: value };
  // mengembalikan seluruh data yg telah diubah
  return bank;
};

module.exports = { createData, findById, updateData };
